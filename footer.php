<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "off-canvas-wrap" div and all content after.
 *
 * @package FoundationPress
 * @since FoundationPress 1.0.0
 */
?>

<div class="footer-container">
	<footer class="footer">
        <section class="logo-holder footer-widget">
        <a href="https://www.dice.com" class="" rel="" target="">

			<?php get_template_part( 'dist/assets/images/svg/logo', 'dice.svg' ) ?>

        </a>
        </section>
		<?php dynamic_sidebar( 'footer-widgets' ); ?>
        <section class="logo-holder footer-widget logo-download-store widget_text large-4 columns widget footer-widget widget_custom_html">
            <h6 class="heading show-for-large"><?php _e( 'Dice Everywhere', 'dicenews2018' ); ?>  </h6>

            <div class="textwidget custom-html-widget" style="font-size:3em; color:Tomato">
                <div class="social-icons">
                    <a href="https://twitter.com/dicedotcom">
                        <i class="fab fa-twitter-square"></i>
                    </a>
                    <a href="https://www.facebook.com/dice">
                        <i class="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://plus.google.com/+Dice/posts">
                        <i class="fab fa-google-plus-square"></i>
                    </a>
                </div>
                <div class="store-badges">
                    <div class="google-badge">
                        <a href="http://c00.adobe.com/d53bf41a-0d61-47b4-b7f1-6df9b46831cf/DI_OS_UN_MA_UP/g/com.dice.app.jobs"
                           class="" rel="" target="">

                            <?php get_template_part( 'dist/assets/images/svg/logo', 'google-play-badge.svg' ) ?>

                        </a>
                    </div>

                    <div class="apple-badge">
                        <a href="https://itunes.apple.com/app/id794201100" class="" rel="" target="">

                            <?php get_template_part( 'dist/assets/images/svg/logo', 'apple-store.svg' ) ?>

                        </a>
                    </div>
                </div>
            </div>
        </section>
	</footer>
</div>


<div class="colophon-container">
    <div class="footer-widget footer-colophon">
        <div class="dice-copyright">
            <div class="copyright-text">
	            <?php _e( 'Copyright ©1990', 'dicenews2018' ); ?> - <?php echo date('Y'); ?> <?php _e( 'Dice', 'dicenews2018' ); ?>
                . <span class="copyright-hide"><?php _e( 'All rights reserved. Use of this site is subject to certain', 'dicenews2018' ); ?>  </span>
                <a href="https://www.dice.com/common/seeker/docs/terms_and_conditions.jsp"><?php _e( 'Terms and Conditions.', 'dicenews2018' ); ?>  </a>
            </div>
            <div class="dhi-text">
                <a href="http://www.dhigroupinc.com" class="external" rel="nofollow">
                    <?php echo file_get_contents( get_template_directory_uri() . '/dist/assets/images/svg/dhi-neg-i.svg' ); ?></a><span class="text"><?php _e( 'Dice is a DHI service', 'dicenews2018' ); ?>  </span>
            </div>
        </div>
    </div>
</div>

<?php if ( get_theme_mod( 'wpt_mobile_menu_layout' ) === 'offcanvas' ) : ?>
	</div><!-- Close off-canvas content -->
<?php endif; ?>

<?php wp_footer(); ?>

<?php if($_SERVER['HTTP_HOST'] === "insights2018.local") { ?>
  <script id="__bs_script__">//<![CDATA[
    document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.js?v=2.18.13'><\/script>".replace("HOST", location.hostname));
    //]]></script>
<?php } ?>
</body>
</html>
