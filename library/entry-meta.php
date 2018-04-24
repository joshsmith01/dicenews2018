<?php
/**
 * Entry meta information for posts
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

if ( ! function_exists( 'foundationpress_entry_meta' ) ) :
	function foundationpress_entry_meta() {
        global $post;

		$author_meta_data = get_the_author_meta();
		$the_avatar       = get_avatar( get_the_author_meta( 'ID' ), 64 );
		$avatar_data      = get_avatar_data( get_the_author_meta( 'ID' ) );
        $has_avatar       = validate_gravatar( get_the_author_meta( 'ID' ) );



		/* translators: %1$s: current date, %2$s: current time */
		echo '<div class="byline">';
		if ( validate_gravatar( get_the_author_meta( 'ID' ) ) ) { ?>
			<?php echo '<a href="' . get_author_posts_url( get_the_author_meta( 'ID' ) ) . '" rel="author" class="fn">' .get_avatar( get_the_author_meta( 'ID' ), 64 ) . '</a>'; ?>
        <?php }
		echo '<span class="byline-data"><span><span class="hide-for-medium">by </span><a href="' . get_author_posts_url( get_the_author_meta( 'ID' ) ) . '" rel="author" class="fn">' . get_the_author_meta( 'display_name' ) . '</a></span>';
		echo '<time class="updated" datetime="' . get_the_time( 'c' ) . '">' . get_the_date() . '</time>';
		if ( function_exists( 'calculate_time_to_read' ) ) {
			echo calculate_time_to_read();
		}
		echo'</span></div>';

		$post_type = get_post_type();
		if ( $post_type === 'post' || $post_type === 'erc-post' ) {
			$tag = get_the_tags();
			if ( $tag ) { ?>
                <div class="post-tags"><i class="fal fa-tag"></i><?php the_tags( '', '' ); ?></div><?php }
		} elseif ( $post_type === 'dice_ideal_employer' ) {
			$tag = get_the_term_list( get_the_ID(), 'ideal-employer-category' );
			if ( $tag ) { ?>
                <div class="post-tags"><i class="fal fa-tag"></i><?php echo $tag; ?></div><?php }
		}
	}
endif;


