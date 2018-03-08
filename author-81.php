<?php /* Template for author pages */ ?>
<?php
$author          = get_the_author_meta( 'ID' );
$dice_position   = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'dice_position' ) );
$author_location = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'author_location' ) );
$author_linkedin = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'LINKEDIN' ) );
$author_twitter  = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'TWITTER' ) );
$author_facebook = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'FACEBOOK' ) );
$author_email    = get_the_author_meta( 'email' );
$site_title      = get_bloginfo( 'title' );
$site_url        = get_bloginfo( 'url' );


?>
<?php get_header(); ?>
<?php global $wp_query; ?>
    <div class="main-container">
        <div class="main-grid">
            <main class="main-content">


                <div class="author-bio">
                    <div class="author-meta">
						<?php if ( validate_gravatar( get_the_author_meta( 'ID' ) ) ) { ?>
                            <div class="author-avatar-holder show-for-medium">
                                <img src="<?php echo esc_url( get_avatar_url( $author_email, [ 'size' => 85 ] ) ); ?>"
                                     class="avatar"/>
                            </div>
						<?php } ?>
                        <div class="author-text-meta">

                            <h1 class="category-page-title"><?php echo get_the_author(); ?></h1>
	                        <?php if ( validate_gravatar( get_the_author_meta( 'ID' ) ) ) { ?>
                                <div class="author-avatar-holder show-for-small-only">
                                    <img src="<?php echo esc_url( get_avatar_url( $author_email, [ 'size' => 85 ] ) ); ?>"
                                         class="avatar"/>
                                </div>
	                        <?php } ?>
							<?php if ( $dice_position ) { ?>
                                <h4 class="author-position"><?php echo $dice_position ?><?php if ( $site_title ) {
										echo ', <a href="' . $site_url . '" class="site-link"> ' . $site_title . '</a>';
									} ?></h4>

							<?php } ?>

							<?php if ( $author_location ) { ?>

                                <h4 class="author-position"><?php echo $author_location ?></h4>

							<?php } ?>
                        </div>
                    </div> <!-- END .author-meta -->
                    <div class="author-social-contact">
						<?php if ( $author_facebook ) { ?>
                            <a href="<?php echo $author_facebook ?>" class="" rel="" target="">

								<?php get_template_part( 'dist/assets/images/svg/logo', 'facebook.svg' ) ?>

                            </a>
						<?php } ?>
						<?php if ( $author_twitter ) { ?>
							<?php if ( $author_twitter ) { ?>
                                <a href="//twitter.com/<?php echo $author_twitter ?>" class="" rel="" target="">

									<?php get_template_part( 'dist/assets/images/svg/logo', 'twitter.svg' ) ?>

                                </a>
							<?php } ?>
						<?php } ?>
						<?php if ( $author_linkedin ) { ?>
                            <a href="<?php echo $author_linkedin ?>" class="" rel="" target="">

								<?php get_template_part( 'dist/assets/images/svg/logo', 'linked-in.svg' ) ?>

                            </a>
						<?php } ?>
						<?php if ( $author_email ) { ?>
							<?php if ( $author_email ) { ?>
                                <a href="mailto:<?php echo $author_email ?>" class="" rel="" target="">

									<?php get_template_part( 'dist/assets/images/svg/logo', 'email.svg' ) ?>

                                </a>
							<?php } ?>
						<?php } ?>
                    </div>


					<?php if ( strlen( get_the_author_meta( 'description' ) ) > 0 ) { ?>
                        <div class="author-description">
							<?php echo get_the_author_meta( 'description' ); ?>
                        </div>
					<?php } ?>
                    <a href="<?php echo get_site_url() . '/about' ?>">
                        <div class="dice-authors"><?php _e( 'More Dice Authors', 'dicenews2018' ); ?></div>
                    </a>
                    <div class="page-subtitle-holder">
                        <h3 class="category-page-subtitle"><?php _e( 'Articles by ', 'dicenews2018' ); ?><?php echo get_the_author(); ?></h3>
                    </div>
                </div>

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
                         data-authid=<?php echo $wp_query->queried_object->ID; ?>><?php _e( 'More Posts', 'dicenews2018' ); ?>
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