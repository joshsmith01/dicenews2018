<?php
/**
 * The template for displaying archive pages
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * If you'd like to further customize these archive views, you may create a
 * new template file for each one. For example, tag.php (Tag archives),
 * category.php (Category archives), author.php (Author archives), etc.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */


get_header(); ?>
<?php global $wp_query; ?>

<div class="main-container">
    <div class="main-grid">


        <!-- Featured posts desktop -->
        <div class="top-stories grid-x">
			<?php $thirds = 0 ?>
			<?php $num_featured = 0; ?>
			<?php while ( have_posts() ) {
				the_post();
				if ( $thirds >= 3 ) {
//				    rewind_posts();
					break;
				}
				$thumb_size = get_field( 'type' ); ?>
                <div class="small-12 medium-4 large-4 cell <?php echo $thumb_size; ?>">
					<?php if ( get_field( 'sponsor' ) ) { ?>
                        <div class="sponsor">
                            <img class="logo" src="<?php echo get_field( 'sponsor_icon' ); ?>">
                            <div class="learn-more">
                                Brought to you by <?php echo get_field( 'sponsor' ); ?> <a
                                        href="<?php echo get_field( 'sponsor_link' ); ?>">Learn More</a>
                            </div>
                        </div>
					<?php }
					if ( $thirds == 0 ) {
						if ( $thumb_size == 'featured-one-third' ) {
							$thirds += 1;
						} elseif ( $thumb_size == 'featured-two-third' ) {
							$thirds += 2;
						} elseif ( $thumb_size == 'featured-full' ) {
							$thirds += 3;
						} else {
							$thumb_size = 'featured-one-third';
							$thirds     += 1;
						}
						the_post_thumbnail( $thumb_size );
					} else {
						the_post_thumbnail( 'featured-one-third' );
						$thirds += 1;
					}
					$num_featured ++;
					?>
                    <span class="title blue <?php echo get_field( 'color' ); ?>">
                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                    </span>
                </div>
				<?php wp_reset_postdata();
			} ?>
        </div>


        <main class="main-content">
		    <?php if ( get_query_var( 'confirmation', 0 ) > 0 ) { // Email confirmation page ?>
                <div class="confirmation-header">
                    <div class="confirmation">
                        <h1>Confirmation</h1>
                    </div>
                    <div class="confirmation-text">Thanks for signing up!</div>
                </div>

                <!--			--><?php //} elseif ( have_posts() ) { ?>
		    <?php }

		    /* The 2nd Query (without global var) */
		    $query2 = new WP_Query( array(
			    'offset'                 => 3,
			    'posts_per_page'         => 7,
			    'post_type'              => 'erc-post',
			    'no_found_rows'          => true,
			    'update_post_meta_cache' => false,
			    'update_post_term_cache' => false
		    ) ); ?>


            <!-- Nonfeatured posts -->
            <div id="content">
                <div class="stories">
                    <!-- Posts -->
				    <?php $gradient_number = 0;
				    $featured_counter      = 0;
				    while ( $query2->have_posts() ) {
					    $query2->the_post(); ?>

					    <?php get_template_part( 'template-parts/content-standard', get_post_format() ); ?>

					    <?php $gradient_number ++ ?>
				    <?php }
				    wp_reset_postdata(); ?>
                </div>
                <!-- More posts button -->
                <!--                    <div class="autoscroll button expanded">Old Autoscroll</div>-->
                <div id="restscroll" class="restscroll button expanded"
                     data-cptid=<?php echo 'erc-post' ?>>More Posts
                </div>
            </div>

            <div class="navigation-holder show-for-sr">
			    <?php /* Display navigation to next/previous pages when applicable */
			    if ( function_exists( 'foundationpress_pagination' ) ) {
				    foundationpress_pagination();
			    } elseif ( is_paged() ) {
				    ?>
                    <nav id="post-nav" class="show-for-sr">
                        <div class="post-previous"><?php next_posts_link( __( '&larr; Older posts', 'foundationpress' ) ); ?></div>
                        <div class="post-next"><?php previous_posts_link( __( 'Newer posts &rarr;', 'foundationpress' ) ); ?></div>
                    </nav>
			    <?php } else {
				    get_template_part( 'template-parts/content', 'none' );
			    } ?>
            </div>


        </main>
		<?php if ( is_post_type_archive( 'erc-post' ) ) { ?>
            <aside class="sidebar">
				<?php dynamic_sidebar( 'erc-sidebar' ); ?>
            </aside>
		<?php } else {
			get_sidebar();
		} ?>
    </div><!-- END .main-grid -->
</div>


<?php get_footer(); ?>
