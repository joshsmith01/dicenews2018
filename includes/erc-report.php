<?php

// ERC Report posts
function diceerc_custom_report_type_init() {
	$labels = array(
		'name'               => _x( 'Reports', 'Reports' ),
		'singular_name'      => _x( 'Report', 'Report' ),
		'add_new'            => _x( 'Add New', 'report' ),
		'add_new_item'       => __( 'Add New Report' ),
		'edit_item'          => __( 'Edit Report' ),
		'new_item'           => __( 'New Report' ),
		'all_items'          => __( 'All Reports' ),
		'view_item'          => __( 'View Reports' ),
		'search_items'       => __( 'Search Reports' ),
		'not_found'          => __( 'No reports found' ),
		'not_found_in_trash' => __( 'No reports found in Trash' ),
		'parent_item_colon'  => '',
		'menu_name'          => 'Reports'
	);
	$args   = array(
		'labels'             => $labels,
		'public'             => true,
		'publicly_queryable' => true,
		'show_ui'            => true,
		'show_in_menu'       => true,
		'query_var'          => true,
		'capability_type'    => 'post',
		'has_archive'        => true,
		'hierarchical'       => false,
		'menu_position'      => 5,
		'supports'           => array( 'title', 'editor', 'author', 'thumbnail', 'excerpt' ),
		'taxonomies'         => array( 'category', 'post_tag' ),
		'yarpp_support'      => true
	);
	register_post_type( 'report', $args );
	register_taxonomy( 'post_tag', 'category', 'report' );
}

add_action( 'init', 'diceerc_custom_report_type_init' );
