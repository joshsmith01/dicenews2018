<div id="employers_us ?>" class="top-employers employers_us active">
    <div class="grid-x">
        <div class="small-12 cell">
            <h3>US Top 30</h3>
            <p>The following 30 companies represent the most popular employers that nearly 5,500 US-based tech
                professionals would ideally like to work for.</p>
            <h4>Analysis</h4>
        </div>
    </div>
	<?php
	$args = array(
		'post_type'      => 'dice_ideal_employer',
		'posts_per_page' => '3',
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

				<?php while ( $loop->have_posts() ) {
					$loop->the_post();
					$do_not_duplicate[] = $post->ID;
					?>

                    <article class="small-12 medium-4 cell article-card">
                        <div class="card efc-card">
							<?php if ( has_post_thumbnail() ) : ?>

                                <div class="img-holder">
                                    <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail( 'thumbnail_620x364' ); ?></a>
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
            </div>
		<?php wp_reset_postdata();
	} ?>


    <div class="grid-x">
        <div class="small-12 cell">
            <h4>Employer Rankings – Transport Top 10</h4>
            <div class="ranked-employers">
                <!-- START Individual Cards -->
                <!-- START Card 01 -->
                <div class="card-efc card employer-card">
                    <div class="card-block">
                        <div class="employer-rank">
                            <div class="font-display text-center large-only-text-left">
                                <b>Rank #1 </b>
                                <span class="fa fa-argrid-x-circle-up text-efc-supporting"></span>
                                <span class="fa fa-argrid-x-circle-down text-efc-tertiary-b"></span>
                            </div>
                            <div class="font-caption text-center large-only-text-left">

                            </div>
                        </div>
                        <div class="employer-logo">
                            <a href="#" target="_blank">
                                <img width="150" height="150"
                                     src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Tesla.jpg"
                                     class="attachment-thumb size-thumb" alt="Tesla logo">
                            </a>
                        </div>
                        <div class="employer-info">
                            <div class="employer-name font-headline">
                                <strong><a href="https://www.dice.com" target="_blank">Tesla</a></strong>
                            </div>
                            <p>Key Strengths</p>
                            <ul>
                                <li>Happy</li>
                                <li>Sad</li>
                                <li>Glad</li>
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
                                <b>Rank #2 </b>
                                <span class="fa fa-argrid-x-circle-up text-efc-supporting"></span>
                                <span class="fa fa-argrid-x-circle-down text-efc-tertiary-b"></span>
                            </div>
                            <div class="font-caption text-center large-only-text-left">

                            </div>
                        </div>
                        <div class="employer-logo">
                            <a href="https://www.dice.com/company/lckbot" target="_blank">
                                <img width="150" height="150"
                                     src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Lockheed-Martin-150x150.png"
                                     class="attachment-thumb size-thumb" alt="Tesla logo">
                            </a>
                        </div>
                        <div class="employer-info">
                            <div class="employer-name font-headline">
                                <strong><a href="https://www.dice.com" target="_blank">Lockheed Martin</a></strong>
                            </div>
                        </div>
                        <div class="employer-jobs">
                            <a class="btn btn-block btn-efc-secondary nav-track"
                               href="https://www.dice.com/company/lckbot"
                               target="_blank">
                                View Jobs
                            </a>
                        </div>
                    </div>
                </div>
                <!-- END Card 02 -->

                <!-- END Individual Cards -->
            </div>
        </div>
    </div>
</div>