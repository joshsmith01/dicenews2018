<div id="employers_business-services" class="top-employers employers_business-services hidden">
    <div class="grid-x">
        <div class="small-12 cell">
            <h3><?php _e( 'Business Services Top 10', 'dicenews2015' ); ?></h3>
            <p><?php _e( 'The 10 most popular business services firms that US-based tech professionals would ideally like to work
                for.', 'dicenews2015' ); ?>
            </p>
            <h4><?php _e( 'Analysis', 'dicenews2015' ); ?></h4>
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
				'terms'    => 'business-services'
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
        <h4><?php _e( 'Employer Rankings – Business Services Top 10', 'dicenews2015' ); ?></h4>
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
                        <a href="https://www.dice.com/company/ibmna" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/IBM-150x150.jpg"
                                 class="attachment-thumb size-thumb" alt="IBM logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/ibmna" target="_blank"><?php _e( 'IBM', 'dicenews2015' ); ?></a></strong>
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
                        <a href="https://www.dice.com/company/10106525" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/deloitte-150x150.jpg"
                                 class="attachment-thumb size-thumb" alt="Deloitte logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/10106525" target="_blank"><?php _e( 'Deloitte', 'dicenews2015' ); ?></a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/10106525"
                           target="_blank">
	                        <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
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
                        <a href="https://www.dice.com/company/80104617" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/accenture-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Accenture logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/80104617" target="_blank"><?php _e( 'Accenture', 'dicenews2015' ); ?></a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/80104617"
                           target="_blank">
                            <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>
                </div>
            </div>
            <!-- END Card 03 -->

            <!-- START Card 04 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #4', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/booz" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/10/l4q156nrca4k80hffpol-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Booz Allen Hamilton logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/booz" target="_blank"><?php _e( 'Booz Allen Hamilton', 'dicenews2015' ); ?></a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/booz"
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

                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/10/image_for_twitter-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Tesla logo">

                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><?php _e( 'Cognizant Technology Solutions', 'dicenews2015' ); ?></strong>
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

                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/10/Boston-Consulting-Group-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Boston Consulting Group logo">

                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><?php _e( 'Boston Consulting Group', 'dicenews2015' ); ?></strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 06 -->

            <!-- START Card 07 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #7', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/10104943" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/pwc-150x150.png"
                                 class="attachment-thumb size-thumb" alt="PwC logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/10104943" target="_blank"><?php _e( 'PwC', 'dicenews2015' ); ?></a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/10104943"
                           target="_blank">
	                        <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>
                </div>
            </div>
            <!-- END Card 07 -->

            <!-- START Card 08 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #8', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/10121331" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/tata-football-vector-logo-400x400-150x150.png"
                                 class="attachment-thumb size-thumb" alt="PwC logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/10121331" target="_blank"><?php _e( 'Tata Group', 'dicenews2015' ); ?></a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/10121331"
                           target="_blank">
	                        <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>
                </div>
            </div>
            <!-- END Card 08 -->

            <!-- START Card 09 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank #8', 'dicenews2015' ); ?></b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/10105424" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/0ebeeb134c03c65d7e524f6dda509b89-150x150.png"
                                 class="attachment-thumb size-thumb" alt="PwC logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/10105424" target="_blank"><?php _e( 'TEKsystems', 'dicenews2015' ); ?></a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/10105424"
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
                        <a href="https://www.dice.com/jobs/q-leidos-dc-Leidos-jobs?searchid=7247046159763&stst=" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/leidos-squarelogo-1420581293842-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Leidos logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/jobs/q-leidos-dc-Leidos-jobs?searchid=7247046159763&stst=" target="_blank"><?php _e( 'Leidos', 'dicenews2015' ); ?></a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/jobs/q-leidos-dc-Leidos-jobs?searchid=7247046159763&stst="
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