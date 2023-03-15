<?php
/**
 * Custom login styles for the theme
 */
// Login Logo
add_action('login_enqueue_scripts', 'login_logo');

function login_logo() {?>
<?php if ($logo = get_field('desktop_logo', 'options')): ?>
<style type="text/css">
body.login h1 a {
    background-image: url(<?php echo $logo['url']; ?>);
    background-size: auto 100%;
    height: 65px;
    width: 320px;
}

body.login h1 a img {
    width: 100%;
    height: auto;
}
</style>
<?php endif;?>
<?php }

// Load the CSS
add_action('login_enqueue_scripts', 'login_css');

function login_css() {
    wp_enqueue_style('login_css', get_template_directory_uri() . '/build/css/login.css', false);
}

// Change header link to our site instead of wordpress.org
add_filter('login_headerurl', 'remove_logo_link');

function remove_logo_link() {
    return get_bloginfo('url');
}

// Change logo title from WordPress to our site name
add_filter('login_headertitle', 'change_login_logo_title');

function change_login_logo_title() {
    return get_bloginfo('name');
}