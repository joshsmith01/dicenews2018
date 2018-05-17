<?php /* Note that this is kind of complicated because we want searches from ERC vs. non-ERC to be distinct */


$search_post_type = get_post_type();


// Check if we should search for ERC or Tech Pro posts
if ( ( ! is_home() && have_posts() ) && $search_post_type === 'erc-post' ) {
	$is_erc = true;
} else {
	$is_erc = false;
} ?>

<?php $sq = get_search_query() ? get_search_query() : __( 'Topic or phrase', 'dicenews2018' ); ?>
<form method="get" class="search-form" action="<?php echo home_url(); ?>">
    <fieldset>
        <div class="row">
            <div class="input-holder">
                <input type="search" name="s" placeholder="<?php echo $sq; ?>"/>
				<?php if ( ! $is_erc ): ?>
                    <input type="hidden" name="post_type" value="-<?php echo 'erc-post'; ?>"/>
				<?php elseif ( $is_erc ) : ?>
                    <input type="hidden" name="post_type" value="<?php echo $search_post_type ?>"/>
				<?php endif ?>
                <button id="searchsubmit" class="button expanded show-for-small-only" type="submit">
                    <span><?php _e( 'Search Insights', 'dicenews2018' ); ?>  </span>
                </button>
            </div>
        </div>
    </fieldset>
</form>