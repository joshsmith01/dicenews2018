<?php
/**
 * Register Menus
 *
 * @link http://codex.wordpress.org/Function_Reference/register_nav_menus#Examples
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

register_nav_menus( array(
	'top-bar-r'        => esc_html__( 'Right Top Bar', 'foundationpress' ),
	'top-bar-l'        => esc_html__( 'Left Top Bar', 'foundationpress' ),
	'top-bar-r-mobile' => esc_html__( 'Right Top Bar Mobile', 'foundationpress' ),
	'top-bar-l-mobile' => esc_html__( 'Left Top Bar Mobile', 'foundationpress' ),
	'main-nav'         => esc_html__( 'Main Navigation', 'foundationpress' ),
//	'mobile-nav'       => esc_html__( 'Mobile', 'foundationpress' ),
));



/**
 * Desktop navigation - right top bar
 *
 * @link http://codex.wordpress.org/Function_Reference/wp_nav_menu
 */
if ( ! function_exists( 'foundationpress_top_bar_r' ) ) {
	function foundationpress_top_bar_r() {
		wp_nav_menu( array(
			'container'      => false,
			'menu_class'     => 'dropdown menu',
			'items_wrap'     => '<ul id="%1$s" class="%2$s desktop-menu" data-dropdown-menu>%3$s</ul>',
			'theme_location' => 'top-bar-r',
			'depth'          => 3,
			'fallback_cb'    => false,
			'walker'         => new Foundationpress_Top_Bar_Walker(),
		));
	}
}


/**
 * Desktop navigation - left top bar
 *
 * @link http://codex.wordpress.org/Function_Reference/wp_nav_menu
 */
if ( ! function_exists( 'foundationpress_top_bar_l' ) ) {
	function foundationpress_top_bar_l() {
		wp_nav_menu( array(
			'container'      => false,
			'menu'           => __( 'top-bar-l', 'foundationpress' ),
			'menu_class'     => 'dropdown menu',
			'items_wrap'     => '<ul id="%1$s" class="%2$s" data-dropdown-menu>%3$s</ul>',
			'theme_location' => 'top-bar-l',
			'depth'          => 3,
			'fallback_cb'    => false,
			'walker'         => new Foundationpress_Top_Bar_Walker(),
		) );
	}
}


/**
 * Desktop navigation - right top bar mobile
 *
 * @link http://codex.wordpress.org/Function_Reference/wp_nav_menu
 */
if ( ! function_exists( 'foundationpress_top_bar_r_mobile' ) ) {
	function foundationpress_top_bar_r_mobile() {
		wp_nav_menu( array(
			'container'      => false,                         // Remove nav container
			'menu'           => __( 'top-bar-r-mobile', 'foundationpress' ),
			'menu_class'     => 'vertical menu drilldown',
			'theme_location' => 'top-bar-r-mobile',
			'items_wrap'     => '<ul id="%1$s" class="%2$s" data-drilldown data-close-on-click="true" data-parent-link="true" data-auto-height="true" data-animate-height="true" data-submenu-toggle="true">%3$s</ul>',
			'fallback_cb'    => false,
			'walker'         => new Foundationpress_Mobile_Walker(),
		) );
	}
}

/**
 * Desktop navigation - left top bar mobile
 *
 * @link http://codex.wordpress.org/Function_Reference/wp_nav_menu
 */
if ( ! function_exists( 'foundationpress_top_bar_l_mobile' ) ) {
	function foundationpress_top_bar_l_mobile() {
		wp_nav_menu( array(
			'container'      => false,                         // Remove nav container
			'menu'           => __( 'top-bar-l-mobile', 'foundationpress' ),
			'menu_class'     => 'vertical menu',
			'theme_location' => 'top-bar-l-mobile',
			'items_wrap'     => '<ul id="%1$s" class="%2$s" data-accordion-menu data-submenu-toggle="true">%3$s</ul>',
			'fallback_cb'    => false,
			'walker'         => new Foundationpress_Mobile_Walker(),
		) );
	}
}

/**
 * Desktop navigation - Main Navigation
 *
 * @link http://codex.wordpress.org/Function_Reference/wp_nav_menu
 */
if ( ! function_exists( 'foundationpress_main_nav' ) ) {
	function foundationpress_main_nav() {
		wp_nav_menu( array(
			'container'      => false,                         // Remove nav container
			'menu'           => __( 'main-nav', 'foundationpress' ),
			'menu_class'     => 'dropdown menu',
			'theme_location' => 'main-nav',
			'items_wrap'     => '<ul id="%1$s" class="%2$s" data-dropdown-menu data-submenu-toggle="true">%3$s</ul>',
			'fallback_cb'    => false,
			'walker'         => new Foundationpress_Mobile_Walker(),
		) );
	}
}


/**
 * Mobile navigation - topbar (default) or offcanvas
 */
if ( ! function_exists( 'foundationpress_mobile_nav' ) ) {
	function foundationpress_mobile_nav() {
		wp_nav_menu( array(
			'container'      => false,                         // Remove nav container
			'menu'           => __( 'mobile-nav', 'foundationpress' ),
			'menu_class'     => 'vertical menu',
			'theme_location' => 'mobile-nav',
			'items_wrap'     => '<ul id="%1$s" class="%2$s" data-accordion-menu data-submenu-toggle="true">%3$s</ul>',
			'fallback_cb'    => false,
			'walker'         => new Foundationpress_Mobile_Walker(),
		));
	}
}


/**
 * Add support for buttons in the top-bar menu:
 * 1) In WordPress admin, go to Apperance -> Menus.
 * 2) Click 'Screen Options' from the top panel and enable 'CSS CLasses' and 'Link Relationship (XFN)'
 * 3) On your menu item, type 'has-form' in the CSS-classes field. Type 'button' in the XFN field
 * 4) Save Menu. Your menu item will now appear as a button in your top-menu
*/
if ( ! function_exists( 'foundationpress_add_menuclass' ) ) {
	function foundationpress_add_menuclass( $ulclass ) {
		$find = array('/<a rel="button"/', '/<a title=".*?" rel="button"/');
		$replace = array('<a rel="button" class="button"', '<a rel="button" class="button"');

		return preg_replace( $find, $replace, $ulclass, 1 );
	}
	add_filter( 'wp_nav_menu','foundationpress_add_menuclass' );
}

/**
 * Check to see if the DLI cookie exists.
 * If the cookie exists, that means that the user is logged into the TechPro application.
 * ergo, provide a  logout link.
 */
if (isset($_COOKIE['DLI'])) {

	/**
	 * @param $item_output
	 * @param $item
	 *
	 * @return string
	 */
	function provide_logout( $item_output, $item ) {

		if ( 'Login/Register' == $item->title ) {

			return '<a href="//www.dice.com/dashboard/logout">' .  __( 'Logout', 'dice-mobile-news-feed' ) .  '</a>';

		}

		return $item_output;
	}

add_filter( 'walker_nav_menu_start_el', 'provide_logout', 10, 2 );
}
