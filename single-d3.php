<?php /* Template Name: d3 */ ?>

<head>
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_template_directory_uri(); ?>/style.css"  />
    <link rel="stylesheet" type="text/css" media="all" href="<?php echo get_template_directory_uri(); ?>/includes/d3/d3.css"  />
    <title><?php echo get_the_title(); ?></title>
</head>

<div class="d3">
    <?php
    $theme_url = get_template_directory_uri();
    $d3_location = get_field('d3_location');
    if($d3_location): ?>
        <iframe src="<?php echo $theme_url.$d3_location ?>" seamless frameBorder="0" scrolling="no" data="image.svg" type="image/svg+xml"></iframe>
    <?php endif ?>
</div>