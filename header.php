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
    <!-- Google ad with tracking -->
	<?php include 'includes/header/google-ad-tracking.php'; ?>
    <!-- End Google -->
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) === 'offcanvas' ) : ?>
	<?php get_template_part( 'template-parts/mobile-off-canvas' ); ?>
<?php endif; ?>


<header class="site-header" role="banner">
    <div class="full-width-background top-bar-nav">
        <div class="main-container">
            <div class="grid-x title-bar site-navigation small-navigation" <?php foundationpress_title_bar_responsive_toggle() ?>>
                <div class="small-4 cell">
                    <div class="site-title-bar " <?php foundationpress_title_bar_responsive_toggle_left() ?>>
                        <div class="title-bar-left">
                            <button aria-label="<?php _e( 'Left Menu', 'foundationpress' ); ?>" class="menu-icon"
                                    type="button"
                                    data-toggle="<?php foundationpress_mobile_menu_left_id(); ?>"></button>
                        </div>
                    </div>
                </div>
                <div class="small-4 cell text-center logo-holder">
                    <a href="https://www.dice.com" class="" rel="" target="">
		                    <?php get_template_part( 'dist/assets/images/svg/logo', 'dice.svg' ) ?>
                    </a>
                    <p><?php bloginfo('title'); ?></p>
                </div>
                <div class="small-4 cell">
                    <div class="site-title-bar" <?php foundationpress_title_bar_responsive_toggle_right() ?>>
                        <div class="title-bar-right">
                            <button aria-label="<?php _e( 'Right Menu', 'foundationpress' ); ?>" class="menu-icon"
                                    type="button"
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
