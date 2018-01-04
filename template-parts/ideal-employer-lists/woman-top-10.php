<div id="employers_female" class="top-employers employers_female hidden">
    <div class="grid-x">
        <div class="small-12 cell">
            <h3><?php _e( 'Female Top 10', 'dicenews2015' ); ?> </h3>
            <p><?php _e( 'The 10 most popular companies that US-based female professionals would ideally like to work for.', 'dicenews2015' ); ?>

            </p>
            <h4><?php _e( 'Analysis', 'dicenews2015' ); ?>  </h4>
        </div>
    </div>
	<?php
	$args = array(
		'post_type'      => 'dice_ideal_employer',
		'posts_per_page' => '3',
		'order' => 'ASC',
		'tax_query'      => array(
			array(
				'taxonomy' => 'ideal-employer-category',
				'field'    => 'slug',
				'terms'    => 'female'
			),
		),
	);
	$loop = new WP_Query( $args );
	if ( $loop->have_posts() ) {
		global $post; ?>
        <div class="grid-x grid-margin-x">

				<?php while ( $loop->have_posts() ) {
					$loop->the_post();
					$do_not_duplicate[] = $post->ID;
					?>

                    <article class="small-12 medium-4 cell article-card">
                        <div class="card efc-card">
							<?php if ( has_post_thumbnail() ) : ?>

                                <div class="img-holder">
                                    <a href="<?php the_permalink(); ?>" target="_blank"><?php the_post_thumbnail( 'thumbnail_620x364' ); ?></a>
                                </div>

							<?php endif; ?>

                            <div class="card-block">
                                <header>
                                    <h2><a href="<?php the_permalink(); ?>" target="_blank"><?php the_title(); ?></a>
                                    </h2>
                                </header>
								<?php wp_link_pages(); ?>
                            </div>
                        </div>
                    </article>

				<?php } ?>
            </div>
		<?php wp_reset_postdata();
	} ?>



<div class="grid-x">
    <div class="small-12 cell">
        <h4><?php _e( 'Employer Rankings – Female Top 10', 'dicenews2015' ); ?></h4>
        <div class="ranked-employers">
            <!-- START Individual Cards -->
            <!-- START Card 01 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #1', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/Google-150x150.jpg"
                             class="attachment-thumb size-thumb" alt="Google logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><?php _e( 'Google', 'dicenews2015' ); ?></strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 01 -->

            <!-- START Card 02 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #2', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Amazon-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Amazon logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><?php _e( 'Amazon', 'dicenews2015' ); ?></strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 02 -->

            <!-- START Card 03 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #3', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150" src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Microsoft-150x150.png" class="attachment-thumb size-thumb" alt="Microsoft logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><?php _e( 'Microsoft', 'dicenews2015' ); ?></strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 03 -->

            <!-- START Card 04 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #4</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/applecup" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Apple-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Apple logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/applecup" target="_blank">Apple</a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/applecup"
                           target="_blank">
					        <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>
                </div>
            </div>
            <!-- END Card 04 -->

            <!-- START Card 05 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #5', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150" src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/Facebook-150x150.png" class="attachment-thumb size-thumb" alt="Facebook logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><?php _e( 'Facebook', 'dicenews2015' ); ?></strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 05 -->

            <!-- START Card 06 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #6', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/ibmna" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/IBM-150x150.jpg"
                                 class="attachment-thumb size-thumb" alt="IBM logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/ibmna"
                                       target="_blank"><?php _e( 'IBM', 'dicenews2015' ); ?></a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/ibmna"
                           target="_blank">
					        <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>
                </div>
            </div>
            <!-- END Card 06 -->

            <!-- START Card 07 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #7</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/disney-150x150.jpg"
                             class="attachment-thumb size-thumb" alt="Walt Disney logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Walt Disney</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 07 -->

            <!-- START Card 08 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?>#8</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/salesforce-150x150.png"
                             class="attachment-thumb size-thumb" alt="Salesforce logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Salesforce</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 08 -->

            <!-- START Card 09 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #9', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/10125746" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/JP-Morgan-150x150.png"
                                 class="attachment-thumb size-thumb" alt="JP Morgan logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/10125746" target="_blank"><?php _e( 'JP Morgan', 'dicenews2015' ); ?></a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/10125746"
                           target="_blank">
			                <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>
                </div>
            </div>
            <!-- END Card 09 -->

            <!-- START Card 10 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #10', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/ciscobot" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/cisco-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Cisco Systems logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/ciscobot"
                                       target="_blank"><?php _e( 'Cisco Systems', 'dicenews2015' ); ?></a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/ciscobot"
                           target="_blank">
					        <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>
                </div>
            </div>
            <!-- END Card 10 -->
            <!-- END Individual Cards -->
        </div>
    </div>
</div>
</div>