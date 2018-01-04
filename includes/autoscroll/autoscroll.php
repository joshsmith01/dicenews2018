<?php /* More Posts button */

function autoscroll_init(){

    // Get some info
    global $wp_query;
    $query_vars = $wp_query->query_vars;
    $ids = [];
    while(have_posts()):the_post();
        array_push($ids, get_the_ID());
    endwhile;

    // Prepare to send info
    $args = array(
        'query_vars' => $query_vars,
        'ids' => $ids
    );

    wp_enqueue_script('autoscroll', get_template_directory_uri() . '/includes/autoscroll/autoscroll.js');
    wp_localize_script('autoscroll', 'autoscroll_vars', $args);
}

// Send more posts back to autoscroll.js
function autoscroll(){

    $paged = intval($_POST['paged']);
    $query_vars = $_POST['query_vars'];
    $ids = [];
    foreach($_POST['ids'] as $id){
        array_push($ids, intval($id));
    }

    // Set the query to be used in the loop
    query_posts(array(
        's' => $query_vars['s'],
        'cat' => $query_vars['cat'],
        'category_name' => $query_vars['category_name'],
        'category__not_in' => $query_vars['category__not_in'],
        'author' => $query_vars['author'],
        'paged' => $paged,
        'post__not_in' => $ids,
        'post_status' => 'publish',
        'post_type' => $query_vars['post_type']
    ));

    if($query_vars['category_name'] == 'dice-data')
        get_template_part('loop-dice-data');
    else
        get_template_part('loop');
    exit;
}
add_action('wp_ajax_autoscroll', 'autoscroll');           // for logged in user
add_action('wp_ajax_nopriv_autoscroll', 'autoscroll');    // if user not logged in
add_action('wp_enqueue_scripts', 'autoscroll_init');