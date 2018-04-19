<?php
/**
 * Entry meta information for posts
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

if ( ! function_exists( 'foundationpress_entry_meta_standard' ) ) :
	function foundationpress_entry_meta_standard() {
		/* translators: %1$s: current date, %2$s: current time */
		echo '<p class="byline author "><a href="' . get_author_posts_url( get_the_author_meta( 'ID' ) ) . '" rel="author" class="fn">' . get_the_author() . ',&nbsp; ' . '</a></p>';
		echo '<time class="updated " datetime="' . get_the_time( 'c' ) . '">'  . get_the_date() . '</time>';
		if ( function_exists( 'mtr_print' ) ) {
			mtr_print();
		}
	}
endif;
