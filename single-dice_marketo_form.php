<?php $legacy = false; ?>
<?php get_header(); ?>
<?php global $is_erc; ?>

<div class="toolkit"></div>

<div class="story">
<?php if(get_field('sponsor')): ?>
    <div class="sponsor">
        <img class="logo" src="<?php echo get_field('sponsor_icon'); ?>">
        <div class="learn-more">
            Brought to you by <?php echo get_field('sponsor') ?> <a href="<?php echo get_field('sponsor_link'); ?>">Learn More</a>
        </div>
    </div>
<?php endif; ?>

<?php
$date = (int) + get_the_date('Ymd');
if ($date < 20150502){
    $legacy = true;
}else {
    $legacy = false;
}
?>
<div class="top-heading">
    <?php the_title( '<h1>', '</h1>' ); ?>
    <ul class="details">

        <?php
        $post_type = get_post_type( get_the_ID() );
        if($post_type=='post'){
            $cat_ids = wp_get_post_categories( get_the_ID() );
            $cat_id = $cat_ids[0];
            $cat_name = get_cat_name($cat_id);
            if($cat_name == 'Employer Resources')
                $cat_name = get_cat_name($cat_ids[1]);
        }else{
            $terms = get_the_terms( get_the_ID(), 'jobs-category' );
            foreach($terms as $term);
            $cat_name = $term->name;
        }
        ?>

        <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')) ?>">
            <li class="author icon icon-user-1"><?php the_author(); ?></li></a>

        <li class="date icon icon-clock-2"><?php the_time() ?></li>

        <a href="<?php echo get_category_link(get_cat_ID($cat_name)); ?>" class="icon-link">
            <li class="labels icon icon-tag-2"><?php echo $cat_name; ?></li></a>

        <a href="<?php echo the_permalink() ?>#comments" class="icon-link">
            <li class="comments icon icon-bubble-comment-2"><?php comments_number( '0', '1', '%' ); ?></li></a>
    </ul>
</div>

<?php $d3_post_url = get_field('d3_post_url'); ?>

<div class="stories-holder">
    <?php if (has_post_thumbnail() and !get_field('hide_featured_image') and !($d3_post_url)): ?>
        <?php if ($legacy and !$is_erc): /* Hide featured image on posts on content imported from prior theme */ ?>
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

<?php if($is_erc and is_active_sidebar('erc-sidebar')): ?>
    <aside id="sidebar" class="erc-sidebar">
        <?php dynamic_sidebar('erc-sidebar'); ?>
    </aside>
<?php else: ?>
    <?php get_sidebar(); ?>
<?php endif; ?>

<?php if ($legacy): /* Hide related posts on content imported from prior theme */ ?>
    <div id="content" class="legacy">
    <?php else: ?>
    <div id="content">
<?php endif ?>

<?php while(have_posts()): the_post(); ?>
    <div class="marketo-embed">
        <?php the_content(); ?>
    </div>
    <?php wp_link_pages(array(
        'next_or_number'=>'next',
        'previouspagelink' => '&laquo; Previous Page',
        'nextpagelink'=>'Next Page &raquo;',
        'before' => '<div class="page-nav">',
        'after' => '</div>'
    ));
    ?>
<?php endwhile; ?>

<?php first_page_link(); ?>

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
<?php else:?>
    <?php dynamic_sidebar('related_articles'); ?>
<?php endif ?>

<?php include 'blocks/single_related_jobs'; ?>

<?php $image_credit = get_field('image_credit'); ?>
<?php if($image_credit): ?>
    <div class="image-credit">Image Credit: <?php echo $image_credit ?></div>
<?php endif ?>

<?php comments_template(); ?>
    </div>
    </div>

<?php get_footer(); ?>