<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "container" div.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?> >
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <!-- Facebook integration -->
	<?php if ( is_front_page() ): ?>
        <meta property="fb:pages" content="424870040934897"/>
        <meta property="fb:pages" content="7811043486"/>
	<?php endif; ?>

    <!-- Google site verification for tracking traffic -->
    <meta name="google-site-verification" content="nYFZB2o_OTgNCj_VIe2Ef0QjRr6Mkz44yJ8fmF4z3EQ"/>

    <!-- Begin Adobe Dynamic tag manager -->
    <script src="//assets.adobedtm.com/8c06f57f0590fbbe830e2dd0366687c0599684e7/satelliteLib-73044e29039c50f90968e5135f6f50a83641e7f0.js"></script>
    <!-- End Adobe tag-->

    <!-- Google ad with tracking -->
	<?php include 'includes/header/google-ad-tracking.php'; ?>
    <!-- End Google -->

    <!-- Begin Monetate tag v6. Place at start of document head. DO NOT ALTER. -->
	<?php include 'includes/header/monetate.php'; ?>
    <!-- End Monetate tag. -->

	<?php
	/* Omniture tracking */
	$meta;

	if ( is_home() ) {
		$meta = 'homepage';
	} else if ( is_single() ) {
		$meta = 'post';
	} else if ( is_author() ) {
		$meta = 'author';
	} else if ( is_archive() ) {
		$meta = 'archive';
	} else if ( is_page_template( 'custom-page-authors.php' ) ) {
		$meta = 'about';
	} else if ( is_page_template( 'custom-page-career-toolkit.php' ) ) {
		$meta = 'career toolkit';
	} else if ( is_page() ) {
		$meta = 'page';
	} else if ( is_404() ) {
		$meta = '404';
	}
	echo '<meta name="ompagename" content="news ' . $meta . '">';
	?>

	<?php global $is_erc; ?>
	<?php if ( $is_erc ): ?>
        <!-- Munchkin script for Employer Resources pages -->
		<?php include 'includes/header/erc-munchkin.php'; ?>

        <!-- ERC Marketo Newsletter -->
		<?php include 'includes/header/erc-marketo-newsletter.php'; ?>
	<?php endif ?>


	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) === 'offcanvas' ) : ?>
	<?php get_template_part( 'template-parts/mobile-off-canvas' ); ?>
<?php endif; ?>


<header class="site-header" role="banner">
    <div class="full-width-background top-bar-nav">
        <div class="main-container">
            <div class="grid-x grid-padding-x title-bar site-navigation small-navigation" <?php foundationpress_title_bar_responsive_toggle() ?>>
                <div class="small-6 cell logo-holder">
                    <a href="https://www.dice.com" class="" rel="" target="">
			            <?php get_template_part( 'dist/assets/images/svg/logo', 'dice.svg' ) ?>
                    </a>
                </div>









                <div class="small-6 cell">
                    <div class="site-title-bar" <?php foundationpress_title_bar_responsive_toggle_right() ?>>
                        <div class="title-bar-right">
                            <button aria-label="<?php _e( 'Right Menu', 'foundationpress' ); ?>" class="menu-icon"
                                    type="button"
                                    data-slide-speed="800"
                                    data-toggle="<?php foundationpress_mobile_menu_right_id(); ?>"></button>
                        </div>
                    </div>
                </div>
            </div>


            <nav class="site-navigation top-bar" role="navigation">
                <div class="top-bar-left">
                    <div class="grid-x">
                        <div class="shrink cell logo-holder">
                            <a href="https://www.dice.com" class="" rel="" target="">

                                <?php get_template_part('dist/assets/images/svg/logo', 'dice.svg') ?>

                            </a>
                        </div>
                        <div class="auto cell">
					        <?php foundationpress_top_bar_l(); ?>
                        </div>
                    </div>
                </div>

                <div class="top-bar-right">
					<?php foundationpress_top_bar_r(); ?>

					<?php if ( ! get_theme_mod( 'wpt_mobile_menu_layout' ) || get_theme_mod( 'wpt_mobile_menu_layout' ) === 'topbar' ) : ?>
						<?php get_template_part( 'template-parts/mobile-top-bar' ); ?>
					<?php endif; ?>
                </div>
            </nav>


        </div>
    </div>
    <!-- Set this in theme options -->
	<?php $header_banner = get_field( 'header_banner', 'option' ); ?>
	<?php if ( $header_banner ) { ?>
    <div class="banner full-width-background show-for-large">
        <?php echo  $header_banner; ?>
    </div>

	<?php } ?>
    <div class="full-width-background main-nav show-for-medium">
        <div class="main-container">
            <nav class="site-navigation" role="navigation">

					<?php foundationpress_main_nav(); ?>

            </nav>

        </div>
    </div>
</header>
