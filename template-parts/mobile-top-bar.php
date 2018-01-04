<?php
/**
 * Template part for mobile top bar menu
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>

<nav class="mobile-menu vertical menu" id="<?php foundationpress_mobile_menu_left_id(); ?>" role="navigation" >
	<?php foundationpress_top_bar_l_mobile(); ?>
</nav>
<nav class="mobile-menu vertical menu right" id="<?php foundationpress_mobile_menu_right_id(); ?>" role="navigation">
	<?php foundationpress_top_bar_r_mobile(); ?>
</nav>
