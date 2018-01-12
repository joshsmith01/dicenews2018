<?php

// Startup posts - legacy from old site
function create_dice_startuppost() {
	register_post_type( 'Startup Post',
		array(
			'labels'      => array(
				'name'          => __( 'Startup Post' ),
				'singular_name' => __( 'Startup Post' )
			),
			'public'      => true,
			'has_archive' => false,
		)
	);
}

add_action( 'init', 'create_dice_startuppost' );
