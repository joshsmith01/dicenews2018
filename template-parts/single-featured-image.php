<?php
// If a featured image is set, insert into layout and use Interchange
// to select the optimal image size per named media query.
if ( has_post_thumbnail( $post->ID ) ) : ?>
    <header class="featured-hero cell small-12 small-order-1 medium-order-2" role="banner"
            data-interchange="[<?php the_post_thumbnail_url( 'fp-medium' ); ?>, small], [<?php the_post_thumbnail_url( 'fp-medium' ); ?>, medium], [<?php the_post_thumbnail_url( 'single-featured-xlarge' ); ?>, large], [<?php the_post_thumbnail_url( 'single-featured-xlarge' ); ?>, xlarge]">
    </header>
<?php endif;
