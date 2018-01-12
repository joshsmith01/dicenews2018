<?php $legacy ?>
<?php get_header(); ?>

    <div class="toolkit"></div>

<div class="story">
<?php while(have_posts()): the_post(); ?>
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
                $cat_name = get_cat_name($cat_ids[0]);
            }else{
                $terms = get_the_terms( get_the_ID(), 'jobs-category' );
                foreach($terms as $term);
                $cat_name = $term->name;
            }
            ?>

            <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')) ?>">
                <li class="author icon icon-user-1"><?php the_author(); ?></li></a>

            <li class="date icon icon-clock-2"><?php the_time('m/d/Y') ?></li>

            <a href="<?php echo get_category_link(get_cat_ID($cat_name)); ?>" class="icon-link">
                <li class="labels icon icon-tag-2"><?php echo $cat_name; ?></li></a>

            <a href="<?php echo the_permalink() ?>#comments" class="icon-link">
                <li class="comments icon icon-bubble-comment-2"><?php comments_number( '0', '1', '%' ); ?></li></a>
        </ul>
    </div>

<?php endwhile; ?>

<?php $d3_post_url = get_field('d3_post_url'); ?>

    <div class="stories-holder">
<?php if (has_post_thumbnail()): ?>
<?php if ($legacy){ /* Hide featured image on posts on content imported from prior theme */ ?>
    <div class="img-holder legacy">
    <?php }else{ ?>
    <div class="img-holder">
        <?php } ?>
        <?php
        if(!get_field('hide_featured_image') and !($d3_post_url)){
            the_post_thumbnail('thumbnail_873x485' );
            echo '<div class="caption">' . get_field( 'content' ) . '</div>';
        }
        ?>
    </div>
<?php endif; ?>

    </div>

<?php if($d3_post_url): ?>
    <?php $d3_id = url_to_postid($d3_post_url); ?>

    <div class="d3">
        <?php $d3_url = get_post_field('d3_url', $d3_id); ?>
        <iframe src="<?php echo $d3_url ?>" seamless frameBorder="0" scrolling="no"></iframe>
        <span class="full"><a href="<?php echo $d3_post_url ?>">Full Screen</a></span>
    </div>

<?php endif ?>


    <div class="clearfix"></div>

<?php get_sidebar(); ?>

<?php if ($legacy){ /* Hide related posts on content imported from prior theme */ ?>
    <div id="content" class="legacy">
    <?php }else{ ?>
    <div id="content">
<?php } ?>

<?php while(have_posts()): the_post(); ?>
    <?php the_content(); ?>
    <?php wp_link_pages(); ?>
<?php endwhile; ?>

    <div class="related-jobs">
        <div class="title">
            <h3>Related Jobs</h3>
            <div class="search">
                <span class="dice-nav-icon dice-nav-icon-magnifyingglass"></span>
                <a href="http://www.dice.com/">Search</a>
            </div>
        </div>
        <div class="keywords hidden"><?php echo get_field('topics_related_jobs_search_term') ?></div>
        <div class="job" id="related-job0"><div class="job-title"></div><div class="job-details"></div></div>
        <div class="job" id="related-job1"><div class="job-title"></div><div class="job-details"></div></div>
        <div class="job" id="related-job2"><div class="job-title"></div><div class="job-details"></div></div>
        <a href="https://www.dice.com/register/?icidcnt=CT:RE"><button>Register</button></a>
    </div>

<?php $image_credit = get_field('image_credit'); ?>
<?php if($image_credit): ?>
    <div class="image-credit">Image Credit: <?php echo $image_credit ?></div>
<?php endif ?>

<?php dynamic_sidebar('related_articles'); ?>

<?php comments_template(); ?>
    </div>
    </div>

<?php get_footer(); ?>