<?php
/**
 * Register widget areas
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

if ( ! function_exists( 'foundationpress_sidebar_widgets' ) ) :
function foundationpress_sidebar_widgets() {
	register_sidebar(array(
		'id' => 'sidebar-widgets',
		'name' => __( 'Sidebar widgets', 'foundationpress' ),
		'description' => __( 'Drag widgets to this sidebar container.', 'foundationpress' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget' => '</section>',
		'before_title' => '<div class="heading"><h6 >',
		'after_title' => '</h6></div>',
	));

	register_sidebar(array(
		'id' => 'footer-widgets',
		'name' => __( 'Footer widgets', 'foundationpress' ),
		'description' => __( 'Drag widgets to this footer container', 'foundationpress' ),
		'before_widget' => '<section id="%1$s" class="large-4 columns widget footer-widget %2$s">',
		'after_widget' => '</section>',
		'before_title' => '<h6 class="heading">',
		'after_title' => '</h6>',
	));

	register_sidebar( array(
		'name'          => 'Footer Colophon',
		'id'            => 'footer_colophon',
		'before_widget' => '<div class="footer-widget footer-colophon">',
		'after_widget'  => '</div>',
	) );

}

add_action( 'widgets_init', 'foundationpress_sidebar_widgets' );
endif;
