<?php

// Create ERC Webinar posts
function dice_erc_webinar() {
    register_post_type( 'dice_erc_webinar',
        array(
            'labels' => array(
                'name' => __( 'ERC Webinars' ),
                'singular_name' => __( 'ERC Webinar' )
            ),
            'public' => true,
            'has_archive' => false,
        )
    );
	register_post_type( 'dice_ow_webinar',
		array(
			'labels'      => array(
				'name'          => __( 'Openweb Webinars' ),
				'singular_name' => __( 'Openweb Webinar' )
			),
			'public'      => true,
			'has_archive' => false,
		)
	);
	register_post_type( 'dice_he_webinar',
		array(
			'labels'      => array(
				'name'          => __( 'HackerEarth Webinars' ),
				'singular_name' => __( 'HackerEarth Webinar' )
			),
			'public'      => true,
			'has_archive' => false,
		)
	);
}
add_action( 'init', 'dice_erc_webinar' );

// Create ERC Webinar post categories
function dice_erc_webinar_categories(){
    $labels = array(
        'name'              => _x( 'ERC Webinar Categories', 'taxonomy general name' ),
        'singular_name'     => _x( 'ERC Webinar Category', 'taxonomy singular name' ),
        'search_items'      => __( 'Search ERC Webinar Categories' ),
        'all_items'         => __( 'All ERC Webinar Categories' ),
        'parent_item'       => __( 'Parent ERC Webinar Category' ),
        'parent_item_colon' => __( 'Parent ERC Webinar Category:' ),
        'edit_item'         => __( 'Edit ERC Webinar Category' ),
        'update_item'       => __( 'Update ERC Webinar Category' ),
        'add_new_item'      => __( 'Add New ERC Webinar Category' ),
        'new_item_name'     => __( 'New ERC Webinar Category Name' ),
        'menu_name'         => __( 'ERC Webinar Categories' ),
    );
	$ow_labels = array(
		'name'              => _x( 'Openweb Webinar Categories', 'taxonomy general name' ),
		'singular_name'     => _x( 'Openweb Webinar Category', 'taxonomy singular name' ),
		'search_items'      => __( 'Search Openweb Webinar Categories' ),
		'all_items'         => __( 'All Openweb Webinar Categories' ),
		'parent_item'       => __( 'Parent Openweb Webinar Category' ),
		'parent_item_colon' => __( 'Parent Openweb Webinar Category:' ),
		'edit_item'         => __( 'Edit Openweb Webinar Category' ),
		'update_item'       => __( 'Update Openweb Webinar Category' ),
		'add_new_item'      => __( 'Add New Openweb Webinar Category' ),
		'new_item_name'     => __( 'New Openweb Webinar Category Name' ),
		'menu_name'         => __( 'Openweb Webinar Categories' ),
	);
	$he_labels = array(
			'name'              => _x( 'HackerEarth Webinar Categories', 'taxonomy general name' ),
			'singular_name'     => _x( 'HackerEarth Webinar Category', 'taxonomy singular name' ),
			'search_items'      => __( 'Search HackerEarth Webinar Categories' ),
			'all_items'         => __( 'All HackerEarth Webinar Categories' ),
			'parent_item'       => __( 'Parent HackerEarth Webinar Category' ),
			'parent_item_colon' => __( 'Parent HackerEarth Webinar Category:' ),
			'edit_item'         => __( 'Edit HackerEarth Webinar Category' ),
			'update_item'       => __( 'Update HackerEarth Webinar Category' ),
			'add_new_item'      => __( 'Add New HackerEarth Webinar Category' ),
			'new_item_name'     => __( 'New HackerEarth Webinar Category Name' ),
			'menu_name'         => __( 'HackerEarth Webinar Categories' ),
		);

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        /*'rewrite'           => array( 'slug' => 'webinars' ),*/
    );
	$ow_args = array(
		'hierarchical'      => true,
		'labels'            => $ow_labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		/*'rewrite'           => array( 'slug' => 'webinars' ),*/
	);
	$he_args = array(
		'hierarchical'      => true,
		'labels'            => $he_labels,
		'show_ui'           => true,
		'show_admin_column' => true,
		'query_var'         => true,
		/*'rewrite'           => array( 'slug' => 'webinars' ),*/
	);

    register_taxonomy( 'dice_erc_webinar_category', 'dice_erc_webinar', $args );
	register_taxonomy( 'dice_ow_webinar_category', 'dice_ow_webinar', $ow_args );
	register_taxonomy( 'dice_he_webinar_category', 'dice_he_webinar', $he_args );
}
add_action('init', 'dice_erc_webinar_categories');