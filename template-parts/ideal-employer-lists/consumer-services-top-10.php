<div id="employers_consumer" class="top-employers employers_consumer hidden">
    <div class="grid-x">
        <div class="small-12 cell">
            <h3>Consumer Services Top 10</h3>
            <p>The 10 most popular consumer firms that US-based tech professionals would ideally like to work for.</p>
            <h4>Analysis</h4>
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
				'terms'    => 'consumer'
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
                                    <h2><a href="<?php the_permalink(); ?>"target="_blank"><?php the_title(); ?></a>
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
        <h4>Employer Rankings – Consumer Services Top 10</h4>
        <div class="ranked-employers">
            <!-- START Individual Cards -->
            <!-- START Card 01 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #1 </b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150" src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/disney-150x150.jpg" class="attachment-thumb size-thumb" alt="IBM logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Walt Disney</strong>
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
                            <b>Rank #2 </b>
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
                    </div>
                </div>
            </div>
            <!-- END Card 02 -->

            <!-- START Card 03 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #3</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/11/ATT-logo-150x150.png"
                             class="attachment-thumb size-thumb" alt="AT&T logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>AT&T</strong>
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
                            <b>Rank #4</b>
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
                    </div>
                </div>
            </div>
            <!-- END Card 04 -->

            <!-- START Card 05 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #5</b>
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
                    </div>
                </div>
            </div>
            <!-- END Card 05 -->

            <!-- START Card 06-->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #6</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/nike_swoosh_logo_black-150x150.png"
                             class="attachment-thumb size-thumb" alt="Nike logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Nike</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 06 -->

            <!-- START Card 07-->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #7</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/download-150x150.png"
                             class="attachment-thumb size-thumb" alt="Comcast logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Comcast</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 07 -->

            <!-- START Card 08-->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #8</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/Coca-Cola_square_logo-150x150.png"
                             class="attachment-thumb size-thumb" alt="Coca-Cola logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Coca-Cola</strong>
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
                            <b>Rank #9</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/RTX0f82d1" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/NBC-150x150.jpg"
                                 class="attachment-thumb size-thumb" alt="PwC logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/RTX0f82d1" target="_blank">NBC Universal</a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/RTX0f82d1"
                           target="_blank">
                            View Jobs
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
                            <b>Rank #10</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/COSWA001" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/c4d8690c-a9a0-6e0a-be1e-ff0000415d3a-150x150.jpg"
                                 class="attachment-thumb size-thumb" alt="Costco Wholesale Corporation logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/COSWA001" target="_blank">Costco
                                    Wholesale Corporation</a></strong>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/COSWA001"
                           target="_blank">
                            View Jobs
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