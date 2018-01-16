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
<?php global $wp_query; ?>

<div class="main-container">
    <div class="page-title-holder">
        <h1 class="category-page-title"><?php single_cat_title(); ?></h1>
    </div>

    <div class="main-grid">
        <main class="main-content">
			<?php if ( have_posts() ) { ?>
                <!-- Nonfeatured posts -->
                <div id="content">
                    <div class="stories">
                        <!-- Posts -->
						<?php $gradient_number = 0;
						$featured_counter      = 0;
						while ( have_posts() ) {
							the_post(); ?>

							<?php get_template_part( 'template-parts/content-standard', get_post_format() ); ?>

							<?php $gradient_number ++ ?>
						<?php } ?>
                    </div>
                    <!-- More posts button -->
                    <!-- <div class="autoscroll button expanded">Old Autoscroll</div>-->
                    <div id="restscroll" class="restscroll button expanded"
                         data-catid=<?php echo $wp_query->queried_object->cat_ID; ?>>More Posts
                    </div>
                </div>

            <div class="navigation-holder show-for-sr">
				<?php /* Display navigation to next/previous pages when applicable */
				if ( function_exists( 'foundationpress_pagination' ) ) {
					foundationpress_pagination();
				} elseif ( is_paged() ) {
					?>
                    <nav id="post-nav">
                        <div class="post-previous"><?php next_posts_link( __( '&larr; Older posts', 'foundationpress' ) ); ?></div>
                        <div class="post-next"><?php previous_posts_link( __( 'Newer posts &rarr;', 'foundationpress' ) ); ?></div>
                    </nav>
				<?php } ?>
			<?php } else {
				get_template_part( 'template-parts/content', 'none' );
			} ?>
            </div>


        </main>
		<?php if ( is_category( 'employer-resources' ) ) { ?>
            <aside class="sidebar">
				<?php dynamic_sidebar( 'erc-sidebar' ); ?>
            </aside>
		<?php } else {
			get_sidebar();
		} ?>
    </div><!-- END ..main-grid -->
</div>


<?php get_footer(); ?>
