<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<header>
	<?php if ( is_single() ) {
		the_title( '<h1 class="entry-title">', '</h1>' );
		} else {
		the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
		}
	?>
        <div class="grid-x">
            <div class="entry-meta cell small-12 small-order-2 medium-order-1">
                <?php foundationpress_entry_meta(); ?>
            </div>
            <?php if ( has_post_thumbnail() and ! get_field( 'hide_featured_image' ) ) {
                get_template_part( 'template-parts/single-featured-image' );
            } ?>
        </div>
	</header>
	<div class="entry-content">
		<?php the_content(); ?>
	</div>
	<footer>
		<?php
			wp_link_pages(
				array(
					'before' => '<nav id="page-nav"><p>' . __( 'Pages:', 'foundationpress' ),
					'after'  => '</p></nav>',
				)
			);
		?>

	</footer>
</article>
