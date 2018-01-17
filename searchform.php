<?php /* Note that this is kind of complicated because we want searches from ERC vs. non-ERC to be distinct */

// Get ERC subcategories
$erc = get_cat_ID('employer resources');
$erc_cats = get_categories(array('type' => 'post', 'child_of' => $erc));
$erc_cat_ids = [$erc];
foreach ($erc_cats as $cat){
    array_push($erc_cat_ids, $cat->term_id);
}

// Check if we should search for ERC or Tech Pro posts
if((!is_home() && have_posts()) and
    $_GET['cat'] != '-'.$erc and
    (in_category($erc_cat_ids) or
     is_category($erc_cat_ids))){
    $is_erc = TRUE;
}
else
    $is_erc = FALSE;
?>

<?php $sq = get_search_query() ? get_search_query() : __('Topic or phrase', 'diceorg'); ?>
<form method="get" class="search-form" action="<?php echo home_url(); ?>" >
	<fieldset>
    	<div class="row">
        	<div class="input-holder">
                <input type="search" name="s" placeholder="<?php echo $sq; ?>" />
                <?php if(!$is_erc):?>
                    <input type="hidden" name="cat" value="-<?php echo $erc ?>"/>
                    <input type="hidden" name="category__not_in" id="category__not_in" value="<?php echo $erc ?>" />
                <?php else: ?>
                    <input type="hidden" name="cat" id="cat" value="<?php echo $erc; ?>" />
                <?php endif ?>
                <button id="searchsubmit" type="submit"><span class="icon icon-magnifier"></span><span class="show-for-sr">Search Insights</span></button>
        	</div>
        </div>
	</fieldset>
</form>