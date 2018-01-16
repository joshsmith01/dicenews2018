<?php /* Template for author pages */ ?>

<?php get_header(); ?>
<?php global $wp_query; ?>
<div class="main-container">
    <div class="page-title-holder">
        <h1 class="category-page-title"><?php echo get_the_author(); ?></h1>
    </div>

    <div class="author-bio">
        <?php if(strlen(get_the_author_meta('description')) > 0) { ?>
            <div class="author-description">
                <?php echo get_the_author_meta( 'description');?>
            </div>
        <?php } ?>
        <a href="<?php echo get_site_url().'/about' ?>"><div class="dice-authors">More Dice Authors</div></a>
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
                         data-authid=<?php echo $wp_query->queried_object->ID; ?>>More Posts
                    </div>
                </div>

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