<!DOCTYPE html>
<html <?php language_attributes();?>>

<head>
    <meta charset="<?php bloginfo('charset');?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url');?>">
    <!-- search icon -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <?php wp_head();?>
</head>

<body <?php body_class();?>>
    
    <!-- Component: Header -->
    <header class="site-header opacity-1" role="banner">
        <div class="header-wrapper">
            <div class="grid-x">
                <div class="cell small-6 medium-3 logo align-bottom">
                    <!-- logo -->
                    <img src="<?php echo get_template_directory_uri(); ?>/assets/NVISION-Logo.svg" alt="NVISION" />
                </div>
                <div class="cell small-6 medium-9 nav-wrapper align-right">
                    <div class="grid-x">
                        <div class="cell large-12 show-for-large align-right">
                        <!-- utilty menu -->
                        <?php
                            wp_nav_menu(array('theme_location'	=> 'utility', 'menu_class' => 'menu utility'));
                        ?>
                        </div>
                        <div class="cell small-12 large-12 align-right align-middle">
                            <div class="show-for-large">
                                <!-- main menu -->
                                <?php
                                wp_nav_menu(array('theme_location'	=> 'primary', 'menu_class' => 'menu primary'));
                                ?>
                            </div>
                            <div class="hide-for-large hamburger-menu">
                            <a href="#"><span class="material-symbols-outlined search-button">search</span></a><span class="material-symbols-outlined">menu</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main class="site-content">