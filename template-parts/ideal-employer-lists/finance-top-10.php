<div id="employers_finance" class="top-employers employers_finance hidden">
    <div class="grid-x">
        <div class="small-12 cell">
            <h3>Finance Top 10</h3>
            <p>The 10 most popular financial services firms that US-based tech professionals would ideally like to work
                for.
            </p>
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
				'terms'    => 'finance'
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
        <h4>Employer Rankings – Finance Top 10</h4>
        <div class="ranked-employers">
            <!-- START Individual Cards -->
            <!-- START Card 01 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b><?php _e( 'Rank', 'dicenews2015' ); ?> #1</b>
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
                            <a href="https://www.dice.com/company/10125746" target="_blank"><strong>JPMorgan Chase &
                                    Co</strong></a>
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
                        <a href="https://www.dice.com/company/10118499" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Bank-of-America-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Bank of America Merrill Lynch logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/10118499" target="_blank">
                                <strong>Bank of America Merrill Lynch</strong>
                            </a>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/10118499"
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
                            <b>Rank #3</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Wells-Fargo-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Wells Fargo logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Wells Fargo</strong>
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
                        <a href="https://www.dice.com/company/citi4" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/citi.png"
                                 class="attachment-thumb size-thumb" alt="Citi logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <a href="https://www.dice.com/company/citi4" target="_blank">
                                <strong>Citi</strong>
                            </a>
                        </div>
                    </div>
                    <div class="employer-jobs">
                        <a class="btn btn-block btn-efc-secondary nav-track"
                           href="https://www.dice.com/company/citi4"
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
                            <b>Rank #5</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/11/logo_american-express-150x150.png"
                             class="attachment-thumb size-thumb" alt="American Express logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>American Express</strong>
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
                            <b>Rank #6</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/11/logo_usaa-150x150.png"
                             class="attachment-thumb size-thumb" alt="USAA logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>USAA</strong>
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
                            <b>Rank #6</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/11/logo_capital-group-150x150.png"
                             class="attachment-thumb size-thumb" alt="Capital Group logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Capital Group</strong>
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
                            <b>Rank #8</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/goldman_sachs.png"
                             class="attachment-thumb size-thumb" alt="Goldman Sachs logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Goldman Sachs</strong>
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
                            <b>Rank #8</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/11/logo_visa-150x150.gif"
                             class="attachment-thumb size-thumb" alt="Visa logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Visa</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 09 -->

            <!-- START Card 10 -->
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
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/fidelity1.png"
                             class="attachment-thumb size-thumb" alt="Fidelity logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Fidelity</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 110 -->

            <!-- END Individual Cards -->
        </div>
    </div>
</div>
</div>