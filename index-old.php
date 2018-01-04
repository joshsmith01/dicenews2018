<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * e.g., it puts together the home page when no home.php file exists.
 *
 * Learn more: {@link https://codex.wordpress.org/Template_Hierarchy}
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

get_header(); ?>
    <div class="main-container">
        <div class="main-grid">
			<?php // Display the latest 3 posts with category of headline. -JMS ?>
            <main class="main-content">
                <div class="top-headlines">
					<?php
					$headlines = array();
					$i         = 0;
					while ( have_posts() ) {

						the_post();
						if ( $i < 3 ) {
							echo '<div>';
							the_post_thumbnail( 'featured-one-third' );
							echo '</div>';
							$i ++;
						}
					} ?>
                </div>


				<?php if ( have_posts() ) { ?>

					<?php /* Start the Loop */ ?>
					<?php while ( have_posts() ) {
						the_post(); ?>
						<?php get_template_part( 'template-parts/content-standard', get_post_format() ); ?>
					<?php } ?>

				<?php } else { ?>
					<?php get_template_part( 'template-parts/content', 'none' ); ?>

				<?php } // End have_posts() check. ?>
				<?php wp_reset_postdata(); ?>
				<?php /* Display navigation to next/previous pages when applicable */ ?>
				<?php
				if ( function_exists( 'foundationpress_pagination' ) ) :
					foundationpress_pagination();
                elseif ( is_paged() ) :
					?>
                    <nav id="post-nav">
                        <div class="post-previous"><?php next_posts_link( __( '&larr; Older posts', 'foundationpress' ) ); ?></div>
                        <div class="post-next"><?php previous_posts_link( __( 'Newer posts &rarr;', 'foundationpress' ) ); ?></div>
                    </nav>
				<?php endif; ?>


            </main>
			<?php get_sidebar(); ?>

        </div>
    </div>
<?php get_footer();
