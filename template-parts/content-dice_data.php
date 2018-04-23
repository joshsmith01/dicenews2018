<?php /* Template part for populating Dice Data page */ ?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'grid-xddd content-dice_data small-6 cell' ); ?>>
    <?php if(get_field('sponsor')): ?>
        <div class="sponsor">
            <img class="logo" src="<?php echo get_field('sponsor_icon'); ?>">
            <div class="learn-more">
	            <?php _e( 'Brought to you by', 'dicenews2018' ); ?> <?php echo get_field('sponsor') ?> <a href="<?php echo get_field('sponsor_link'); ?>"><?php _e( 'Learn More', 'dicenews2018' ); ?></a>
            </div>
        </div>
    <?php endif; ?>

    <?php
    $thumb_id = get_post_thumbnail_id();
    $desktop_url = wp_get_attachment_image_src($thumb_id, 'featured-one-third')[0];
    $tablet_url = wp_get_attachment_image_src($thumb_id, 'featured-two-third')[0];
    $mobile_url = wp_get_attachment_image_src($thumb_id, 'featured-mobile')[0];
    ?>

    <a href="<?php the_permalink(); ?>">
        <picture>
            <source srcset="<?php echo $desktop_url; ?>" media="(min-width: 996px)" />
            <source srcset="<?php echo $tablet_url; ?>" media="(min-width: 768px)" />
            <source srcset="<?php echo $mobile_url; ?>" media="(max-width: 767px)" />
            <img srcset="<?php echo $desktop_url; ?>">
        </picture>
    </a>

    <span class="title <?php echo get_field('color'); ?>">
        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
    </span>
</article>