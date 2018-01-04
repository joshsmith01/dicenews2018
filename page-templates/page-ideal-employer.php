<?php /* Template Name: Ideal Employer */ ?>
<?php get_header(); ?>
    <div class="main-container">
        <div class="main-grid">
            <main class="main-content-full-width">


                    <div class="row page-intro">
                        <div class="small-12 cell">

                            <picture class="img-flexible">
                                <source srcset="<?php echo get_field( 'page_content_image_tiny' ); ?>"
                                        media="(max-width: 480px)">
                                <source srcset="<?php echo get_field( 'page_content_image_medium' ); ?>"
                                        media="(max-width: 768px)">
                                <source srcset="<?php echo get_field( 'page_content_image_banner' ); ?>"
                                        media="(max-width: 1200px)">
                                <img class="img-flexible"
                                     src="<?php echo get_field( 'page_content_image_src' ); ?>"
                                     title="Dice Ideal Employers for 2017" alt="Dice Ideal Employers">
                            </picture>

                            <h1><?php the_field( 'page_title' ); ?></h1>
							<?php the_field( 'page_content' ); ?>
                        </div>
                    </div>

                    <div class="row locale-topmenu">
                        <div class="small-12 cell">
                            <div class="top-link" style="color: white;">
                                <div class="row mobile-menu-top">
                                    <div class="small-12 cell text-center">
                                        <span class="mobile-menu-label">Location</span>
                                        <span class="hamburger"><span class="dice-nav-icon dice-menu"></span></span>
                                    </div>
                                </div>


                            </div>
                            <ul class="menu locale-menu">
                                <li><a class="employers_location active" data-id="location">Location</a></li>
                                <li><a class="employers_sector" data-id="sector">Sector</a></li>
                                <li><a class="employers_generations" data-id="generations">Generations</a></li>
                                <li><a class="employers_gender" data-id="gender">Gender</a></li>
                                <!--                        <li><a class="employers_company-size" data-id="company-size">Company Size</a></li>-->
                            </ul>
                        </div>
                    </div>

                    <div class="row locale-submenu submenu_location active">
                        <div class="small-12 cell">
                            <div class="top-link" style="color: white;">
                                <div class="row mobile-menu-top">
                                    <div class="small-12 cell text-center">
                                        <span class="mobile-menu-label">US</span>
                                        <span class="hamburger"><span class="dice-nav-icon dice-menu"></span></span>
                                    </div>
                                </div>
                            </div>
                            <ul class="menu locale-menu">
                                <li><a class="employers_us active" data-parent="location">US</a></li>
                                <!--                        <li><a class="employers_new-york" data-parent="location">New York</a></li>-->
                                <!--                        <li><a class="employers_chicago" data-parent="location">Chicago</a></li>-->
                                <!--                        <li><a class="employers_bay-area" data-parent="location">Bay Area</a></li>-->
                                <!--                        <li><a class="employers_washington" data-parent="location">Washington</a></li>-->
                                <!--                        <li><a class="employers_boston" data-parent="location">Boston</a></li>-->
                                <!--                        <li><a class="employers_dallas" data-parent="location">Dallas</a></li>-->
                                <!--                        <li><a class="employers_atlanta" data-parent="location">Atlanta</a></li>-->
                            </ul>
                        </div>
                    </div>

                    <div class="row locale-submenu submenu_sector hidden">
                        <div class="small-12 cell">
                            <div class="top-link" style="color: white;">
                                <div class="row mobile-menu-top">
                                    <div class="small-12 cell text-center">
                                        <span class="mobile-menu-label">Business Services</span>
                                        <span class="hamburger"><span class="dice-nav-icon dice-menu"></span></span>
                                    </div>
                                </div>
                            </div>
                            <ul class="menu locale-menu submenu-sector">
                                <li><a class="employers_business-services" data-parent="sector">Business Services</a>
                                </li>
                                <li><a class="employers_consumer" data-parent="sector">Consumer Services</a></li>
                                <li><a class="employers_finance" data-parent="sector">Finance</a></li>
                                <!--                        <li><a class="employers_healthcare" data-parent="sector">Healthcare</a></li>-->
                                <li><a class="employers_transport" data-parent="sector">Transport</a></li>
                                <li><a class="employers_technology" data-parent="sector">Technology</a></li>
                                <li><a class="employers_tech-consumer" data-parent="sector">Tech: Consumer</a></li>
                                <li><a class="employers_tech-enterprise" data-parent="sector">Tech: Enterprise</a></li>
                                <li><a class="employers_tech-hardware" data-parent="sector">Tech: Hardware</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="row locale-submenu submenu_generations hidden">
                        <div class="small-12 cell">
                            <div class="top-link" style="color: white;">
                                <div class="row mobile-menu-top">
                                    <div class="small-12 cell text-center">
                                        <span class="mobile-menu-label">Baby Boomer</span>
                                        <span class="hamburger"><span class="dice-nav-icon dice-menu"></span></span>
                                    </div>
                                </div>
                            </div>
                            <ul class="menu locale-menu submenu-generations">
                                <li><a class="employers_baby-boomer" data-parent="generations">Baby Boomer</a></li>
                                <li><a class="employers_gen-x" data-parent="generations">Gen X</a></li>
                                <li><a class="employers_millennial" data-parent="generations">Millennial</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="row locale-submenu submenu_gender hidden">
                        <div class="small-12 cell">
                            <div class="top-link" style="color: white;">
                                <div class="row mobile-menu-top">
                                    <div class="small-12 cell text-center">
                                        <span class="mobile-menu-label">Female</span>
                                        <span class="hamburger"><span class="dice-nav-icon dice-menu"></span></span>
                                    </div>
                                </div>
                            </div>
                            <ul class="menu locale-menu submenu-gender">
                                <li><a class="employers_female" data-parent="gender">Female</a></li>
                                <li><a class="employers_male" data-parent="gender">Male</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="row locale-submenu submenu_company-size hidden">
                        <div class="small-12 cell">
                            <div class="top-link" style="color: white;">
                                <div class="row mobile-menu-top">
                                    <div class="small-12 cell text-center">
                                        <span class="mobile-menu-label">100k +</span>
                                        <span class="hamburger"><span class="dice-nav-icon dice-menu"></span></span>
                                    </div>
                                </div>
                            </div>
                            <ul class="menu locale-menu submenu-company-size">
                                <li><a class="employers_100k" data-parent="company-size">100k+</a></li>
                                <li><a class="employers_10k-to-20k" data-parent="company-size">20k to 100k</a></li>
                                <li><a class="employers_20k-to-100k" data-parent="company-size">10k to 20k</a></li>
                                <li><a class="employers_5k-to-10k" data-parent="company-size">5k to 10k</a></li>
                                <li><a class="employers_5k" data-parent="company-size">< 5k</a></li>
                            </ul>
                        </div>
                    </div>



					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/us-top-30.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/business-services-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/consumer-services-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/transport-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/technology-top-20.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/millennial-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/gen-x-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/baby-boomer-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/tech-hardware-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/tech-enterprise-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/tech-consumer-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/man-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/woman-top-10.php' ) ?>
					<?php include( get_stylesheet_directory() . '/template-parts/ideal-employer-lists/finance-top-10.php' ) ?>

                    <div class="row">
                        <div class="small-12 cell">

							<?php
							if ( get_field( 'footer_title' ) ) { ?>
                                <h3><?php the_field( 'footer_title' ); ?></h3>
							<?php }
							if ( get_field( 'footer_content' ) ) {
								the_field( 'footer_content' );
							}
							?>
                        </div>
                    </div>

            </main>
        </div>
    </div>
<?php get_footer(); ?>