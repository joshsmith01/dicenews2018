<?php
/**
 * Register theme support for languages, menus, post-thumbnails, post-formats etc.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

if ( ! function_exists( 'foundationpress_theme_support' ) ) :
function foundationpress_theme_support() {
	// Add language support
	load_theme_textdomain( 'foundationpress', get_template_directory() . '/languages' );

	// Switch default core markup for search form, comment form, and comments to output valid HTML5
	add_theme_support( 'html5', array(
		'search-form',
		'comment-form',
		'comment-list',
		'gallery',
		'caption',
	) );

	// Add menu support
	add_theme_support( 'menus' );

	// Let WordPress manage the document title
	add_theme_support( 'title-tag' );

	// Add post thumbnail support: http://codex.wordpress.org/Post_Thumbnails
	add_theme_support( 'post-thumbnails' );

	// RSS thingy
	add_theme_support( 'automatic-feed-links' );

	// Add post formats support: http://codex.wordpress.org/Post_Formats
	add_theme_support( 'post-formats', array('aside', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio', 'chat') );

	// Additional theme support for woocommerce 3.0.+
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );

	// Add foundation.css as editor style https://codex.wordpress.org/Editor_Style
	add_editor_style( 'dist/assets/css/' . foundationpress_asset_path('app.css'));

	// Excerpt
	function custom_excerpt_length( $length ) {
		return 26;
	}

	add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );

	function custom_excerpt( $text ) {
		if ( strpos( $text, '[&hellip;]' ) ) {
			$excerpt = str_replace( '[&hellip;]', '<a class="more-link" href="' . get_permalink() . '">&hellip;</a>', $text );
		} else {
			$excerpt = $text . '<p><a class="more-link" href="' . get_permalink() . '">&hellip;</a></p>';
		}

		return $excerpt;
	}
	add_filter( 'the_excerpt', 'custom_excerpt' );

	// Modify query for certain pages
	function set_query( $query ) {

		$erc         = get_cat_ID( 'employer resources' );
		$erc_cat_ids = null;

		if ( $erc ) {
			$erc_cats    = get_categories( array( 'child_of' => $erc ) );
			$erc_cat_ids = [ $erc ];
			foreach ( $erc_cats as $cat ) {
				array_push( $erc_cat_ids, $cat->term_id );
			}
		}

		// Prevent home page from displaying ERC posts
		if ( is_home() && $query->is_main_query() ) {
			// Set the index.php query
			$query->set( 'post_status', 'publish' );
			$query->set( 'post_type', array( 'post', 'dice_ideal_employer' ) );
			if ( $erc ) {
				$query->set( 'category__not_in', $erc_cat_ids );
			}
		} elseif ( is_category( $erc_cat_ids ) and $query->is_main_query() ) {
			$query->set( 'post_type', array( 'post', 'report' ) );
		}
	}

	add_action( 'pre_get_posts', 'set_query' );




}

add_action( 'after_setup_theme', 'foundationpress_theme_support' );
endif;

/**
 * Utility function to check if a gravatar exists for a given email or id
 *
 * @param int|string|object $id_or_email A user ID,  email address, or comment object
 *
 * @return bool if the gravatar exists or not
 */

function validate_gravatar( $id_or_email ) {
	//id or email code borrowed from wp-includes/pluggable.php
	$email = '';
	if ( is_numeric( $id_or_email ) ) {
		$id   = (int) $id_or_email;
		$user = get_userdata( $id );
		if ( $user ) {
			$email = $user->user_email;
		}
	} elseif ( is_object( $id_or_email ) ) {
		// No avatar for pingbacks or trackbacks
		$allowed_comment_types = apply_filters( 'get_avatar_comment_types', array( 'comment' ) );
		if ( ! empty( $id_or_email->comment_type ) && ! in_array( $id_or_email->comment_type, (array) $allowed_comment_types ) ) {
			return false;
		}

		if ( ! empty( $id_or_email->user_id ) ) {
			$id   = (int) $id_or_email->user_id;
			$user = get_userdata( $id );
			if ( $user ) {
				$email = $user->user_email;
			}
		} elseif ( ! empty( $id_or_email->comment_author_email ) ) {
			$email = $id_or_email->comment_author_email;
		}
	} else {
		$email = $id_or_email;
	}

	$hashkey = md5( strtolower( trim( $email ) ) );
	$uri     = 'http://www.gravatar.com/avatar/' . $hashkey . '?d=404';

	$data = wp_cache_get( $hashkey );
	if ( false === $data ) {
		$response = wp_remote_head( $uri );
		if ( is_wp_error( $response ) ) {
			$data = 'not200';
		} else {
			$data = $response['response']['code'];
		}
		wp_cache_set( $hashkey, $data, $group = '', $expire = 60 * 5 );

	}
	if ( $data == '200' ) {
		return true;
	} else {
		return false;
	}
}

// Force GitHub Updater to foreground processing.
// https://github.com/afragen/github-updater/wiki/Background-Processing
add_filter( 'github_updater_disable_wpcron', '__return_true' );







// http://mercytapscott.com/specific-category-jetpack-related-posts/
// https://jetpack.com/support/related-posts/customize-related-posts/
// https://gist.github.com/kraftbj/9711eaed13e4cf13524e
// https://samnabi.com/blog/jetpack-only-show-related-posts-from-the-same-category
/**
 * Only return ERC related posts on ERC posts from Jetpack
 * @see
 * http://mercytapscott.com/specific-category-jetpack-related-posts/
 * https://jetpack.com/support/related-posts/customize-related-posts/
 * https://gist.github.com/kraftbj/9711eaed13e4cf13524e
 * https://samnabi.com/blog/jetpack-only-show-related-posts-from-the-same-category
 *
 * @param $categories
 * @param $post_id
 *
 * @return array
 */
function jp_only_rp_in_certain_category( $categories, $post_id ) {
	if ( in_category( 'employer-resources' ) ) { // using a category slug, could be ID, an array of IDs, etc
		$categories = array( get_category_by_slug( 'employer-resources' ) );
	}

	return $categories;
}

add_filter( 'jetpack_relatedposts_filter_has_terms', 'jp_only_rp_in_certain_category', 10, 2 );


/**
 * Return related posts other than ERC posts
 *
 * @see
 * http://mercytapscott.com/specific-category-jetpack-related-posts/
 * https://jetpack.com/support/related-posts/customize-related-posts/
 * https://gist.github.com/kraftbj/9711eaed13e4cf13524e
 * https://samnabi.com/blog/jetpack-only-show-related-posts-from-the-same-category
 *
 * @param $filters
 *
 * @return array
 */
function jetpackme_filter_exclude_category( $filters ) {
	if ( !in_category( 'employer-resources' ) ) {
		$filters[] = array(
			'not' =>
				array( 'term' => array( 'category.slug' => 'employer-resources' ) )
		);

		return $filters;
	}
}

add_filter( 'jetpack_relatedposts_filter_filters', 'jetpackme_filter_exclude_category' );
