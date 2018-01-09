<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class('grid-x content-standard'); ?>>

    <div class="article-excerpt-img small-8 cell">
	    <?php the_post_thumbnail( 'thumbnail-desktop' ); ?>
    </div>
    <div class="article-excerpt-details small-4 cell">
        <header>
		    <?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>
            <div class="entry-meta entry-meta-standard">
			    <?php foundationpress_entry_meta_standard(); ?>
            </div>
        </header>
        <div class="entry-content hide-for-small-only">
		    <?php the_excerpt(); ?>
        </div>
    </div>


</article>
