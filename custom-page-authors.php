<?php /* Template Name: Authors Page */ ?>

<?php get_header(); ?>
    <div class="main-container">
        <div class="page-title-holder">
            <h1 class="category-page-title"><?php the_title(); ?></h1>
        </div>
        <div class="main-grid">
            <main class="main-content">

				<?php while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>

					<?php $blogusers = get_users( 'orderby=nicename' ); ?>

                    <h2><?php _e( 'MASTHEAD', 'dicenews2018' ); ?>  </h2>
                    <div class="masthead authors">
						<?php
						foreach ( $blogusers as $user ):
							if ( get_cimyFieldValue( $user->ID, 'author_masthead' ) == 'YES' ):?>
								<?php $author = $user->ID ?>
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
										<?php if ( get_cimyFieldValue( $user->ID, 'author_email' ) == 'YES' ): ?>
                                            <div class="author-email">
                                                <a href="mailto:<?php echo the_author_meta( 'user_email', $author ); ?>>">
                                                <i class="fas fa-envelope"></i>
                                                <span><?php echo the_author_meta( 'user_email', $author ); ?></span>
                                                </a>
                                            </div>
										<?php endif ?>

										<?php $cimy_twitter = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'twitter' ) ); ?>
										<?php if ( strlen( $cimy_twitter ) > 0 ): ?>
                                            <div class="author-twitter">
                                                <a href="http://www.twitter.com/<?php echo $cimy_twitter ?>">
                                                    <i class="fab fa-twitter"></i><?php echo $cimy_twitter ?>
                                                </a>
                                            </div>
										<?php endif; ?>
                                    </div>
                                </div>
							<?php endif; ?>
						<?php endforeach; ?>
                    </div>

                    <h2><?php _e( 'AUTHORS', 'dicenews2018' ); ?>  </h2>
                    <div class="more-authors authors">

						<?php
						// Masthead
						foreach ( $blogusers as $user ):
							if ( get_cimyFieldValue( $user->ID, 'authors_page' ) == 'YES' ): ?>
								<?php $author = $user->ID ?>
                                <div class="author-fields">

                                    <a class="author-avatar" href="<?php echo get_author_posts_url( $author ); ?>">
		                                <?php echo get_avatar( $author ) ?>
                                    </a>
                                    <a class="larger-author-text" href="<?php echo get_author_posts_url( $author ); ?>">
                                        <div class="the-author"><?php echo get_the_author_meta( 'nickname', $author ); ?></div>
                                    </a>

                                    <div class="smaller-author-text">
										<?php if ( get_cimyFieldValue( $author, 'author_email' ) == 'YES' ): ?>
                                            <div class="author-email">
                                                <a href="mailto:<?php echo the_author_meta( 'user_email', $author ); ?>>">
                                                    <i class="fas fa-envelope"></i>
                                                    <span><?php echo the_author_meta( 'user_email', $author ); ?></span>
                                                </a>
                                            </div>
										<?php endif ?>
										<?php $cimy_twitter = cimy_uef_sanitize_content( get_cimyFieldValue( $author, 'twitter' ) ); ?>
										<?php if ( strlen( $cimy_twitter ) > 0 ): ?>
                                            <div class="author-twitter">
                                                <a href="http://www.twitter.com/<?php echo $cimy_twitter ?>">
                                                    <i class="fab fa-twitter"></i>
                                                    <?php echo $cimy_twitter ?>
                                                </a>
                                            </div>
										<?php endif ?>
                                    </div>
                                </div>
							<?php endif; ?>
						<?php endforeach; ?>
                    </div>
				<?php endwhile; ?>
				<?php edit_post_link( __( 'Edit', 'diceorg' ) ); ?>
            </main>
			<?php get_sidebar(); ?>
        </div><!-- END .main-grid -->
    </div>
    </div> <!-- END .main-container -->
<?php get_footer(); ?>