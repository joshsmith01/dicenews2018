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

<article id="post-<?php the_ID(); ?>" <?php post_class( 'grid-x content-standard' ); ?>>

    <div class="article-excerpt-img small-4 cell">
		<?php the_post_thumbnail( 'thumbnail-desktop' ); ?>
    </div>
    <div class="article-excerpt-details small-8 cell">
        <header>
			<?php the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' ); ?>
            <div class="entry-meta entry-meta-standard">
				<?php foundationpress_entry_meta_standard(); ?>
            </div>
			<?php
			if ( function_exists( 'calculate_time_to_read' ) ) {
				echo '<p class="entry-meta-standard">';
				echo calculate_time_to_read();
				echo '</p>';
			} ?>
        </header>
        <div class="entry-content hide-for-small-only">
			<?php
			// Echo an excerpt that is calculated by the number of characters, not words. -JMS 2018-04-23
			if ( function_exists( 'get_excerpt' ) ) {
				echo get_excerpt( 120, 'content' );
			} else {
				the_excerpt();
			} ?>
        </div>
    </div>


</article>
