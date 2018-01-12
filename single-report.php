<?php get_header(); ?>

<div class="story">
<?php while(have_posts()): the_post(); ?>
    <div class="top-heading">
        <?php the_title( '<h1>', '</h1>' ); ?>
    </div>

<?php endwhile; ?>

<div class="stories-holder">
    <?php if (has_post_thumbnail() and !get_field('hide_featured_image') and !($d3_post_url)): ?>
        <?php if ($legacy and $cat_id != $erc): /* Hide featured image on posts on content imported from prior theme */ ?>
            <div class="img-holder legacy">
        <?php else: ?>
            <div class="img-holder">
        <?php endif ?>
        <?php
            the_post_thumbnail('thumbnail_873x485' );
            echo '<div class="caption">' . get_field( 'content' ) . '</div>';
        ?>
            </div>
    <?php endif; ?>
</div>

<?php $d3_post_url = get_field('d3_post_url'); ?>
<?php $d3_height = get_field('d3_height'); ?>
<?php if($d3_height > 0): ?>
    <?php echo '<data height="'.$d3_height.'"></data>' ?>
<?php endif ?>

<?php if($d3_post_url): ?>
    <?php $d3_id = url_to_postid($d3_post_url); ?>
    <div class="d3">
        <div class="mobile-overlay"></div>
        <?php $d3_url = get_post_field('d3_url', $d3_id); ?>
        <iframe src="<?php echo $d3_post_url ?>" seamless frameBorder="0" scrolling="no" id="d3-iframe"></iframe>
        <div class="expand">
            <a href="<?php echo $d3_post_url ?>" target="blank">
                <div class="icon icon-scale-spread-1"></div>
                <span class="mobile-full">Expand for interactive view</span>
            </a>
        </div>
    </div>
<?php endif ?>

<div class="clearfix"></div>

<aside id="sidebar" class="erc-sidebar">
    <?php dynamic_sidebar('erc-sidebar'); ?>
</aside>

<div id="content">

<?php while(have_posts()): the_post(); ?>
    <?php the_content(); ?>
    <?php wp_link_pages(); ?>
<?php endwhile; ?>

<?php if(get_field('set_related_articles')):?>
    <div class="related-posts">
        <h3>Related Articles</h3>
        <div class="wrapper">
            <?php if(get_field('url_01')):?>
                <?php $url = get_field('url_01'); ?>
                <?php $id = url_to_postid($url); ?>
                <?php $thumb = get_the_post_thumbnail($id, 'yarpp-thumbnail'); ?>
                <?php $title = get_the_title($id); ?>
                <?php echo $thumb ?>
                <a href="<?php echo $url; ?>?icid=ON_DN_UP_JS_AV_OG_RA_1"><?php echo $title; ?></a>
            <?php endif ?>
        </div>
        <div class="wrapper">
            <?php if(get_field('url_02')):?>
                <?php $url = get_field('url_02'); ?>
                <?php $id = url_to_postid($url); ?>
                <?php $thumb = get_the_post_thumbnail($id, 'yarpp-thumbnail'); ?>
                <?php $title = get_the_title($id); ?>
                <?php echo $thumb ?>
                <a href="<?php echo $url; ?>?icid=ON_DN_UP_JS_AV_OG_RA_2"><?php echo $title; ?></a>
            <?php endif ?>
        </div>
        <div class="wrapper">
            <?php if(get_field('url_03')):?>
                <?php $url = get_field('url_03'); ?>
                <?php $id = url_to_postid($url); ?>
                <?php $thumb = get_the_post_thumbnail($id, 'yarpp-thumbnail'); ?>
                <?php $title = get_the_title($id); ?>
                <?php echo $thumb ?>
                <a href="<?php echo $url; ?>?icid=ON_DN_UP_JS_AV_OG_RA_3"><?php echo $title; ?></a>
            <?php endif ?>
        </div>
    </div>
<?php endif ?>

<?php $image_credit = get_field('image_credit'); ?>
<?php if($image_credit): ?>
    <div class="image-credit">Image Credit: <?php echo $image_credit ?></div>
<?php endif ?>

</div>
</div>

<?php get_footer(); ?>