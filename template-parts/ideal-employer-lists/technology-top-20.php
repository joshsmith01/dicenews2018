<div id="employers_technology" class="top-employers employers_technology hidden">
    <div class="grid-x">
        <div class="small-12 cell">
            <h3><?php _e( 'Technology Top 20', 'dicenews2015' ); ?></h3>
            <p><?php _e( 'The 20 most popular technology firms that US-based tech professionals would ideally like to work for.', 'dicenews2015' ); ?>
            </p>
            <h4><?php _e( 'Analysis', 'dicenews2015' ); ?></h4>
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
				'terms'    => 'technology'
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
        <h4><?php _e( 'Employer Rankings – Technology Top 20', 'dicenews2015' ); ?></h4>
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
                            <strong>Google</strong>
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
                            <b>Rank #2</b>
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
                            <strong><a href="https://www.dice.com" target="_blank">Amazon</a></strong>
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
                        <a href="#" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/Microsoft-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Microsoft logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com" target="_blank">Microsoft</a></strong>
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
                            <b>Rank #5</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="#" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/Facebook-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Facebook logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Facebook</strong>
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
                        <a href="https://www.dice.com/company/ciscobot" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/cisco-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Cisco Systems logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/ciscobot" target="_blank">Cisco Systems</a></strong>
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
            <!-- END Card 06 -->

            <!-- START Card 07 -->
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
                        <a href="https://www.dice.com/company/10112602" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/oracle-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Oracle logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/10112602" target="_blank">Oracle</a></strong>
                        </div>
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
                        <a href="https://www.dice.com/company/delliirc" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/dell-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Dell logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/delliirc" target="_blank" >Dell</a></strong>
                        </div>
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
            <!-- END Card 08 -->

            <!-- START Card 09 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #9 </b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/salesforce-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Salesforce logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Salesforce</strong>
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
                            <b>Rank #10</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/10109419" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo('wpurl'); ?>/wp-content/uploads/2017/09/Hewlett-Packard-150x150.png"
                                 class="attachment-thumb size-thumb" alt="Hewlett Packard logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/10109419" target="_blank">Hewlett Packard</strong>
                        </div>
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
            <!-- END Card 10 -->

            <!-- START Card 11 -->
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
                        <img width="150" height="150" src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/General_Electric-150x150.png" class="attachment-thumb size-thumb" alt="GE / General Electric logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>General Electric</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 11 -->

            <!-- START Card 12 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #12</b>
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
                    </div>
                </div>
            </div>
            <!-- END Card 12 -->

            <!-- START Card 13 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #13</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">

                        </div>
                    </div>
                    <div class="employer-logo">
                        <a href="https://www.dice.com/company/sappa003" target="_blank">
                            <img width="150" height="150"
                                 src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/09/SAP-150x150.jpg"
                                 class="attachment-thumb size-thumb" alt="Hewlett Packard logo">
                        </a>
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong><a href="https://www.dice.com/company/sappa003" target="_blank">SAP</strong>
                        </div>
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
            <!-- END Card 13 -->

            <!-- START Card 14 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #14</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/Adobe-Logo-1-150x150.jpg"
                             class="attachment-thumb size-thumb" alt="Adobe Systems logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Adobe Systems</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 14 -->

            <!-- START Card 15 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #15</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2012/09/vmware-150x150.jpg"
                             class="attachment-thumb size-thumb" alt="VMWare logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>VMWare</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 15 -->

            <!-- START Card 16 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #16</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/redhat-logo-square-150x150.jpg"
                             class="attachment-thumb size-thumb" alt="Red Hat logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Red Hat</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 16 -->

            <!-- START Card 17 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #17</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/samsung-logo-150x150.jpg"
                             class="attachment-thumb size-thumb" alt="Samsung logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Samsung</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 17 -->

            <!-- START Card 18 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #18</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/Sony_logo-880x660-150x150.png"
                             class="attachment-thumb size-thumb" alt="Sony logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Sony</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 18 -->

            <!-- START Card 19 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #19</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/square-linkedin-512-150x150.png"
                             class="attachment-thumb size-thumb" alt="LinkedIn logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>LinkedIn</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 19 -->

            <!-- START Card 20 -->
            <div class="card-efc card employer-card">
                <div class="card-block">
                    <div class="employer-rank">
                        <div class="font-display text-center large-only-text-left">
                            <b>Rank #20</b>
                        </div>
                        <div class="font-caption text-center large-only-text-left">
                        </div>
                    </div>
                    <div class="employer-logo">
                        <img width="150" height="150"
                             src="<?php echo get_bloginfo( 'wpurl' ); ?>/wp-content/uploads/2017/10/download-1-150x150.png"
                             class="attachment-thumb size-thumb" alt="Epic Software logo">
                    </div>
                    <div class="employer-info">
                        <div class="employer-name font-headline">
                            <strong>Epic Software</strong>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END Card 20 -->

            <!-- END Individual Cards -->
        </div>
    </div>
</div>
</div>