<?php /* Enable D3 posts. Custom fields added with ACF plugin. */

/* d3.js is included in the footer if we are on the single.php template */
function create_dice_d3() {
    register_post_type( 'D3',
        array(
            'labels' => array(
                'name' => __( 'D3' ),
                'singular_name' => __( 'D3' )
            ),
            'public' => true,
            'has_archive' => false,
        )
    );
}
add_action( 'init', 'create_dice_d3' );

function remove_editor_d3() {
    remove_post_type_support( 'd3', 'editor' );
}
add_action( 'admin_init', 'remove_editor_d3' );