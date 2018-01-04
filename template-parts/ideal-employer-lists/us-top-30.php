<div id="employers_us" class="top-employers employers_us active">
    <div class="grid-x">
        <div class="small-12 cell">
            <h3><?php _e( 'US Top 30', 'dicenews2015' ); ?></h3>
            <p><?php _e( 'The following 30 companies represent the most popular employers that nearly 5,500 US-based tech
                professionals would ideally like to work for.', 'dicenews2015' ); ?></p>
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
				'terms'    => 'us'
			),
		),
	);
	$loop = new WP_Query( $args );
	if ( $loop->have_posts() ) {
		global $post; ?>
        <div class="grid-x grid-margin-x">
<!--            -->
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
                                    <h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                    </h2>
                                </header>
								<?php wp_link_pages(); ?>
                            </div>
                        </div>
                    </article>

				<?php } ?>
<!--            </div>-->
        </div>
		<?php wp_reset_postdata();
	} ?>



<div class="grid-x">
    <div class="small-12 cell">
        <h4><?php _e( 'Employer Rankings – US Top 30', 'dicenews2015' ); ?></h4>
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
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Company Perks', 'dicenews2015' );  ?></li>
                            <li><?php _e( 'Flexible Working Options / Schedule', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Office / Team Environment', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>

                </div>
            </div>
            <!-- END Card 01 -->

            <!-- START Card 02 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #2</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">

                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/Amazon-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Amazon logo">

                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Amazon</strong>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Company Perks', 'dicenews2015' );  ?></li>
                            <li><?php _e( 'Flexible Working Options / Schedule', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Office / Team Environment', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>

                </div>
            </div>
            <!-- END Card 02 -->

            <!-- START Card 03 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #3</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">

                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Microsoft-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Microsoft logo">

                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Microsoft</strong>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Solid Training / Skills Development', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Opportunities for Promotiont', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Company Perks', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Offer Sabbatical / Volunteer Time', 'dicenews2015' ); ?></li>
                        </ul>
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
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Equity Awards', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Progressive on Diversity / Social Issues', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Innovator in Industry', 'dicenews2015' ); ?></li>
                        </ul>
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
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #5</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Facebook-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Facebook logo">

                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Facebook</strong>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Company Perks', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Equity Awards', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Flexible Working Options / Schedule', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>

                </div>
            </div>
            <!-- END Card 05 -->

            <!-- START Card 06 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #6</b>
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
                            <strong><a href="https://www.dice.com/company/ibmna" target="_blank">IBM</a></strong>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Company Perks', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Equity Awards', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Flexible Working Options / Schedule', 'dicenews2015' ); ?></li>
                        </ul>
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
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Financial Stability / Record of Success', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Good Corporate Citizen / Strong Values', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Established Leader in Industry', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- END Card 07 -->

            <!-- START Card 08 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #8</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">

                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Tesla-150x150.jpg"
                             class="attachment-thumb size-thumb" alt="Tesla logo">

                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Tesla</strong>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Innovator in Industry', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Challenging / Interesting Work', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Strong Leadership', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>


                </div>
            </div>
            <!-- END Card 08 -->

            <!-- START Card 09 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #9</b>
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
                            <strong><a href="https://www.dice.com/company/ciscobot" target="_blank">Cisco Systems</a></strong>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Solid Training / Skills Development', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Established Leader in Industry', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Work with Key Industry Players', 'dicenews2015' ); ?></li>
                        </ul>
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
            <!-- END Card 09 -->

            <!-- START Card 10 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #10</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/10112602" target="_blank">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/oracle-150x150.png"
                             class="attachment-thumb size-thumb" alt="Oracle logo">
                        </a>

                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/10112602" target="_blank"><strong>Oracle</strong></a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Solid Training / Skills Development', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Manageable Working Hours', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Work with Key Industry Players', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Flexible Working Options / Schedule', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/10112602"
                           target="_blank">
                            <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>
                </div>
            </div>
            <!-- END Card 10 -->

            <!-- START Card 11 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #11</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/delliirc" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/dell-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Dell logo">
                        </a>

                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/delliirc" target="_blank"><strong>Dell</strong></a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Work with Key Industry Players', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Solid Training / Skills Development', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Opportunities for Promotiont', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Positive Organizational Culture', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/delliirc"
                           target="_blank">
                            <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>

                </div>
            </div>
            <!-- END Card 11 -->

            <!-- START Card 12 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #12</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/lckbot" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Lockheed-Martin-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Lockheed Martin logo">
                        </a>

                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/lckbot" target="_blank"><strong>Lockheed Martin</strong></a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Challenging / Interesting Work', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Opportunities for Promotiont', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Financial Stability / Record of Success', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/lckbot"
                           target="_blank">
                            <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>

                </div>
            </div>
            <!-- END Card 12 -->

            <!-- START Card 13 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #13</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/10125746" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/JP-Morgan-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Lockheed Martin logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/10125746" target="_blank"><strong>JPMorgan Chase & Co</strong></a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Competitive Bonus', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Opportunities for Promotiont', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Strong Leadership', 'dicenews2015' ); ?></li>
                        </ul>
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
            <!-- END Card 13 -->

            <!-- START Card 14 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #13</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">

                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/SpaceX-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Lockheed Martin logo">


                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">

                                <strong>SpaceX</strong>

                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Challenging / Interesting Work', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Innovator in Industry', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Strong Leadership', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>

                </div>
            </div>
            <!-- END Card 14 -->

            <!-- START Card 15 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #15</b>
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
                            <a href="https://www.dice.com/company/10106525" target="_blank">
                                <strong>Deloitte</strong>
                            </a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Solid Training / Skills Development', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Financial Stability / Record of Success', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Strong Leadership', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Positive Organizational Culture', 'dicenews2015' ); ?></li>
                        </ul>
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
            <!-- END Card 15 -->

            <!-- START Card 16 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #16</b>
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
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Good Corporate Citizen / Strong Values', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Positive Organizational Culture', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Flexible Working Options / Schedule', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- END Card 16 -->

            <!-- START Card 17 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #16</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">

                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/verizon-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Verizon logo">


                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">

                                <strong>Verizon</strong>

                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Manageable Working Hours', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Benefits', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Established Leader in Industry', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>

                </div>
            </div>
            <!-- END Card 17 -->

            <!-- START Card 18 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #18</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/10285903" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/11/ATT-logo-150x150.png"
                                 class="attachment-thumb size-thumb" alt="AT&T logo">
                        </a>

                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/10285903" target="_blank">
                                <strong>AT&T</strong>
                            </a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Solid Training / Skills Development', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Manageable Working Hours', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Good Corporate Citizen / Strong Values', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/10285903"
                           target="_blank">
                            <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>

                </div>
            </div>
            <!-- END Card 18 -->

            <!-- START Card 19 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #19</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">

                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/NASA-150x150.jpg"
                                 class="attachment-thumb size-thumb" alt="AT&T logo">


                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/10285903" target="_blank">
                                <strong>NASA</strong>
                            </a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Challenging / Interesting Work', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Established Leader in Industry', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Benefits', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>


                </div>
            </div>
            <!-- END Card 19 -->

            <!-- START Card 20 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #20</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/ngitbot" target="_blank">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Northrop-Grumman.gif"
                             class="attachment-thumb size-thumb" alt="Northrop Grumman logo">
                        </a>


                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/ngitbot" target="_blank">
                                <strong>Northrop Grumman</strong>
                            </a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Manageable Working Hours', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Challenging / Interesting Work', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Good Corporate Citizen / Strong Values', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/ngitbot"
                           target="_blank">
                            <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>


                </div>
            </div>
            <!-- END Card 20 -->

            <!-- START Card 21 -->

            <!-- END Card 21 -->

            <!-- START Card 22 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #22</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150" src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/General_Electric-150x150.png" class="attachment-thumb size-thumb" alt="General Electric logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>General Electric</strong>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Manageable Working Hours', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Opportunities for Promotiont', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Competitive Salary', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Financial Stability / Record of Success', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- END Card 22 -->

            <!-- START Card 23 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #22</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/10109419" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Hewlett-Packard-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Hewlett Packard logo">
                        </a>


                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/10109419" target="_blank">
                                <strong>Hewlett Packard</strong>
                            </a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Manageable Working Hours', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Solid Training / Skills Development', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Office / Team Environment', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/10109419"
                           target="_blank">
                            <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>


                </div>
            </div>
            <!-- END Card 23 -->

            <!-- START Card 24 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #24</b>
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
                            <a href="https://www.dice.com/company/80104617" target="_blank">
                                <strong>Accenture</strong>
                            </a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Opportunities for Promotiont', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Good Corporate Citizen / Strong Values', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Flexible Working Options / Schedule', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Manageable Working Hours', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Open / Transparent Communication', 'dicenews2015' ); ?></li>
                        </ul>
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
            <!-- END Card 24 -->

            <!-- START Card 25 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #25</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">

                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/boeing-150x150.jpg"
                                 class="attachment-thumb size-thumb" alt="Boeing logo">



                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">

                                <strong>Boeing</strong>

                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Challenging / Interesting Work', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Established Leader in Industry', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Financial Stability / Record of Success', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Benefits', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Work with Key Industry Players', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>



                </div>
            </div>
            <!-- END Card 25 -->

            <!-- START Card 26 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #25</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">

                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Intel-150x150.png"
                             class="attachment-thumb size-thumb" alt="Intel logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">

                            <strong>Intel</strong>

                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Innovator in Industry', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Work with Key Industry Players', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Open / Transparent Communication', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- END Card 26 -->

            <!-- START Card 27 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #27</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/uhgbot" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Unitedhealth-Group-150x150.jpg"
                                 class="attachment-thumb size-thumb" alt="UnitedHealth Group logo">
                        </a>


                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/uhgbot" target="_blank">
                                <strong>UnitedHealth Group</strong>
                            </a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Manageable Working Hours', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Flexible Working Options / Schedule', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Opportunities for Promotiont', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/uhgbot"
                           target="_blank">
                            <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>


                </div>
            </div>
            <!-- END Card 27 -->

            <!-- START Card 28 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #28</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">

                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Activision-Blizzard-150x150.png"
                             class="attachment-thumb size-thumb" alt="Activision Blizzard logo">


                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">

                            <strong>Activision Blizzard</strong>

                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Challenging / Interesting Work', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Office / Team Environment', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Financial Stability / Record of Success', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>


                </div>
            </div>
            <!-- END Card 28 -->

            <!-- START Card 29 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #29</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/sappa003" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/SAP-150x150.jpg"
                                 class="attachment-thumb size-thumb" alt="SAP logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/sappa003" target="_blank">
                                <strong>SAP</strong>
                            </a>
                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Open / Transparent Communication', 'dicenews2015' ); ?><sup>*</sup></li>
                            <li><?php _e( 'Office / Team Environment', 'dicenews2015' ); ?><sup>*</sup></li>
                            <li><?php _e( 'Flexible Working Options / Schedule', 'dicenews2015' ); ?><sup>*</sup></li>
                        </ul>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/sappa003"
                           target="_blank">
                            <?php _e( 'View Jobs', 'dicenews2015' ); ?>
                        </a>
                    </div>
                </div>
            </div>
            <!-- END Card 29 -->

            <!-- START Card 30 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #30</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">

                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/unnamed-4-150x150.png"
                             class="attachment-thumb size-thumb" alt="Netflix logo">


                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">

                            <strong>Netflix</strong>

                        </div>
                        <p><?php _e( 'Key Strengths', 'dicenews2015' ); ?></p>
                        <ul>
                            <li><?php _e( 'Established Leader in Industry', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Competitive Salary', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Innovator in Industry', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Flexible Working Options / Schedule', 'dicenews2015' ); ?></li>
                            <li><?php _e( 'Manageable Working Hours', 'dicenews2015' ); ?></li>
                        </ul>
                    </div>


                </div>
            </div>
            <!-- END Card 30 -->



            <!-- END Individual Cards -->
        </div>
    </div>
</div>
</div>