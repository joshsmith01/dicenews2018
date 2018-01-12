<?php header('Location: ' . get_site_url() . '/dices-webinar-series'); ?>
<?php die(); ?>

<?php get_header(); ?>

    <?php
        function post_webinar_dates($title, $term, $blurb_field){
            $today = date('Ymd');

            $args = array (
                'post_type' => 'dice_erc_webinar',
                'meta_query' => array(
                    array(
                        'key'		=> 'dice_erc_webinar_date',
                        'compare'	=> '>=',
                        'value'		=> $today,
                    ),
                ),
                'tax_query' => array(
                    array(
                        'taxonomy' => 'dice_erc_webinar_category',
                        'field' => 'slug',
                        'terms' => array ($term)
                    )
                ),
	            'orderby'	=> 'dice_erc_webinar_date',
	            'order'		=> 'ASC'
            );
            $query = new WP_Query($args);

            if($query->found_posts < 1)
                return;

            echo '<h2>' . $title . '</h2>';

            if(get_field($blurb_field)){
                echo '<div class="blurb">';
                echo get_field($blurb_field);
                echo '</div>';
            }

            echo '<ul class="dates">';
            while ($query->have_posts()) : $query->the_post();
                $date = get_field('dice_erc_webinar_date');
                $date = new DateTime($date);
                $date = $date->format('l, F j, Y');
                $link = get_field('dice_erc_webinar_link');
                $time = get_field('dice_erc_webinar_time');
                echo '<li><a href="' . $link . '">' . $date . ' at ' . $time . '</a></li>';
            endwhile;
            echo '</ul>';
            wp_reset_query();
        }
    ?>
    <div class="main-container content-main-container erc-webinar-page erc">
        <div class="main-grid">

            <div id="content" class="main-content">

				<?php the_title( '<h1>', '</h1>' ); ?>

				<?php if ( has_post_thumbnail() ) {
					get_template_part( 'template-parts/featured-image' );
				} ?>

				<?php while ( have_posts() ): the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; ?>

                <div class="container erc-webinar-dates">
                    <div class="row">
                        <div class="col-md-6">
							<?php post_webinar_dates( 'Quick Start Webinars', 'quick-start', 'dice_quick_start_blurb' ); ?>
                        </div>
                        <div class="col-md-6">
							<?php post_webinar_dates( 'Best Practice Webinars', 'best-practice', 'dice_best_practice_blurb' ); ?>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
							<?php post_webinar_dates( 'Special Event Webinars', 'special-event', 'dice_special_event_blurb' ); ?>
                        </div>
                    </div>
                </div>

				<?php wp_link_pages(); ?>
				<?php comments_template(); ?>
            </div><!-- END .main-content -->
            <aside id="sidebar" class="sidebar erc-sidebar">
				<?php dynamic_sidebar( 'erc-sidebar' ); ?>
            </aside>


        </div>
    </div>
<?php get_footer(); ?>