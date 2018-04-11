<?php /* Template Name: Authors Page */ ?>

<?php get_header(); ?>
    <div class="main-container">

        <div class="main-grid">
            <main class="main-content">

                <h1 class="category-page-title"><?php the_title(); ?></h1>

				<?php while ( have_posts() ) : the_post(); ?>
                    <div class="content">
						<?php the_content(); ?>
                    </div>
                    <div class="social-sharing-data">
						<?php
						$dice_follow_social_heading = get_field( 'dice_social_heading' );
						$dice_follow_facebook       = get_field( 'dice_social_facebook' );
						$dice_follow_twitter        = get_field( 'dice_social_twitter' );
						$dice_follow_linkedin       = get_field( 'dice_social_linkedin' );
						$dice_follow_pinterest      = get_field( 'dice_social_pinterest' );
						$dice_follow_reddit         = get_field( 'dice_social_reddit' );
						$dice_follow_contact_us     = get_field( 'dice_social_contact_us' );
						?>
	                    <?php if ( $dice_follow_social_heading ) { ?>
                            <h5><?php echo $dice_follow_social_heading ?></h5>
                        <?php } ?>
                        <div class="share-buttons">
							<?php if ( $dice_follow_facebook ) { ?>
                                <a href="<?php echo $dice_follow_facebook ?>" class="" rel="" target="">

									<?php get_template_part( 'dist/assets/images/svg/logo', 'facebook.svg' ) ?>

                                </a>
							<?php } ?>
							<?php if ( $dice_follow_twitter ) { ?>
                                <a href="<?php echo $dice_follow_twitter ?>" class="" rel="" target="">

									<?php get_template_part( 'dist/assets/images/svg/logo', 'twitter.svg' ) ?>

                                </a>
							<?php } ?>
							<?php if ( $dice_follow_linkedin ) { ?>
                                <a href="<?php echo $dice_follow_linkedin ?>" class="" rel="" target="">

									<?php get_template_part( 'dist/assets/images/svg/logo', 'linked-in.svg' ) ?>

                                </a>
							<?php } ?>
							<?php if ( $dice_follow_pinterest ) { ?>
                                <a href="<?php echo $dice_follow_pinterest ?>" class="" rel="" target="">

									<?php get_template_part( 'dist/assets/images/svg/logo', 'pinterest.svg' ) ?>

                                </a>
							<?php } ?>
							<?php if ( $dice_follow_reddit ) { ?>
                                <a href="<?php echo $dice_follow_reddit ?>" class="" rel="" target="">

									<?php get_template_part( 'dist/assets/images/svg/logo', 'reddit.svg' ) ?>

                                </a>
							<?php } ?>
                        </div>
                        <div class="share-buttons">
	                    <?php if ( $dice_follow_contact_us ) { ?>
                            <a href="mailto:<?php echo $dice_follow_contact_us ?>" class="" rel="" target="">

			                    <?php _e( 'Contact Us', 'dicenews2018' ); ?>

                            </a>
	                    <?php } ?>
                        </div>
                    </div>
					<?php $blogusers = get_users( 'orderby=meta_value&meta_key=last_name' ); ?>

                    <h2 class="masthead-section-editors"><?php _e( 'Editors', 'dicenews2018' ); ?>  </h2>
                    <div class="masthead authors">
						<?php
						foreach ( $blogusers as $user ):
							$author = $user->ID;
							$dice_position = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'dice_position' ) );
							$author_location = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'author_location' ) );
							$author_linkedin = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'LINKEDIN' ) );
							$author_twitter = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'TWITTER' ) );
							$author_facebook = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'FACEBOOK' ) );
							$author_email = get_the_author_meta( 'email', $author );
							$site_title = get_bloginfo( 'title' );
							$site_url = get_bloginfo( 'url' );
							if ( get_cimyFieldValue( $author, 'author_masthead' ) == 'YES' ):?>
                                <div class="author-fields">
                                    <a class="author-avatar" href="<?php echo get_author_posts_url( $author ); ?>">
										<?php echo get_avatar( $author ) ?>
                                    </a>
                                    <a class="larger-author-text" href="<?php echo get_author_posts_url( $author ); ?>">
                                        <div class="the-author"><?php echo get_the_author_meta( 'nickname', $author ); ?></div>
                                    </a>
									<?php $dice_position = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'dice_position' ) ); ?>
                                    <div class="author-position"><?php echo $dice_position ?></div>

                                    <div class="smaller-author-text">
										<?php if ( $author_facebook ) { ?>
                                            <a href="<?php echo $author_facebook ?>" class="" rel="" target="">

												<?php get_template_part( 'dist/assets/images/svg/logo', 'facebook.svg' ) ?>

                                            </a>
										<?php } ?>
										<?php if ( $author_twitter ): ?>
                                            <a href="//twitter.com/<?php echo $author_twitter ?>" class="" rel=""
                                               target="">

												<?php get_template_part( 'dist/assets/images/svg/logo', 'twitter.svg' ) ?>

                                            </a>
										<?php endif; ?>
										<?php if ( $author_linkedin ) { ?>
                                            <a href="<?php echo $author_linkedin ?>" class="" rel="" target="">

												<?php get_template_part( 'dist/assets/images/svg/logo', 'linked-in.svg' ) ?>

                                            </a>
										<?php } ?>
										<?php if ( $author_email ): ?>
                                            <a href="mailto:<?php echo $author_email ?>" class="" rel="" target="">

												<?php get_template_part( 'dist/assets/images/svg/logo', 'email.svg' ) ?>

                                            </a>
										<?php endif ?>
                                    </div>
                                </div>
							<?php endif; ?>
						<?php endforeach; ?>
                    </div>

                    <h2><?php _e( 'Authors', 'dicenews2018' ); ?>  </h2>
                    <div class="more-authors authors">

						<?php
						// Authors
						$authors             = get_users( 'orderby=meta_value&meta_key=first_name' );
						foreach ( $authors as $user ):
							$author = $user->ID;
							$dice_position   = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'dice_position' ) );
							$author_location = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'author_location' ) );
							$author_linkedin = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'LINKEDIN' ) );
							$author_twitter  = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'TWITTER' ) );
							$author_facebook = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'FACEBOOK' ) );
							$author_email    = get_the_author_meta( 'email', $author );
							$site_title      = get_bloginfo( 'title' );
							$site_url        = get_bloginfo( 'url' );
							if ( get_cimyFieldValue( $user->ID, 'authors_page' ) == 'YES' ): ?>

                                <div class="author-fields">

                                    <a class="author-avatar" href="<?php echo get_author_posts_url( $author ); ?>">
										<?php echo get_avatar( $author ) ?>
                                    </a>
                                    <a class="larger-author-text" href="<?php echo get_author_posts_url( $author ); ?>">
                                        <div class="the-author"><?php echo get_the_author_meta( 'nickname', $author ); ?></div>
                                    </a>

                                    <div class="smaller-author-text">
										<?php if ( $author_facebook ) { ?>
                                            <a href="<?php echo $author_facebook ?>" class="" rel="" target="">

												<?php get_template_part( 'dist/assets/images/svg/logo', 'facebook.svg' ) ?>

                                            </a>
										<?php } ?>
										<?php if ( $author_twitter ): ?>
                                            <a href="//twitter.com/<?php echo $author_twitter ?>" class="" rel=""
                                               target="">

												<?php get_template_part( 'dist/assets/images/svg/logo', 'twitter.svg' ) ?>

                                            </a>
										<?php endif; ?>
										<?php if ( $author_linkedin ) { ?>
                                            <a href="<?php echo $author_linkedin ?>" class="" rel="" target="">

												<?php get_template_part( 'dist/assets/images/svg/logo', 'linked-in.svg' ) ?>

                                            </a>
										<?php } ?>
										<?php if ( $author_email ): ?>
                                            <a href="mailto:<?php echo $author_email ?>" class="" rel="" target="">

												<?php get_template_part( 'dist/assets/images/svg/logo', 'email.svg' ) ?>

                                            </a>
										<?php endif ?>
                                    </div>
                                </div>
							<?php endif; ?>
						<?php endforeach; ?>
                    </div>
				<?php endwhile; ?>

            </main>
			<?php get_sidebar(); ?>
        </div><!-- END .main-grid -->
    </div>
    </div> <!-- END .main-container -->
<?php get_footer(); ?>