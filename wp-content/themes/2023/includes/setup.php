<?php
/**
 * Set up theme defaults and registers support for various WordPress features.
 */
add_action('after_setup_theme', function () {

    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    /*
     * Let WordPress manage the document title.
     * By adding theme support, we declare that this theme does not use a
     * hard-coded <title> tag in the document head, and expect WordPress to
     * provide it for us.
     */
    add_theme_support('title-tag');

    /*
     * Enable support for Post Thumbnails on posts and pages.
     *
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus([
        'primary' => esc_html('Primary Menu'),
        'utility' => esc_html('Utility Menu'),
    ]);

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ]);
});

// Remove SEO Clutter from Admin bar
add_action('wp_before_admin_bar_render', 'custom_admin_bar_render');
function custom_admin_bar_render() {
    $GLOBALS['wp_admin_bar']->remove_menu('wpseo-menu');
}

// Rewrite Permalinks (Requires Save to generate .htacess)
add_action('init', function () {
    $GLOBALS['wp_rewrite']->set_permalink_structure('/%category%/%postname%/');
});

// Append 'active' class to current menu item
add_filter('wp_nav_menu', 'nav_menu', 10, 2);

function nav_menu($menu) {
    $menu = str_replace('current-menu-item', 'current-menu-item active', $menu);
    return $menu;
}
// Remove wp version param from any enqueued scripts
add_filter('style_loader_src', 'vc_remove_wp_ver_css_js', 9999);
add_filter('script_loader_src', 'vc_remove_wp_ver_css_js', 9999);

function vc_remove_wp_ver_css_js($src) {
    if (strpos($src, 'ver=' . get_bloginfo('version'))) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}

// Adds a .responsive-embed container to embeded videos
add_filter('embed_oembed_html', 'oembed_wrapper', 10, 4);

function oembed_wrapper($html, $url, $attr, $post_id) {
    if (
        strpos($url, 'youtube')
        || strpos($url, 'youtu.be')
        || strpos($url, 'vimeo')
    ) {
        return '<div class="responsive-embed widescreen">' . $html . '</div>';
    }
    return $html;
}

// Allow SVG upload
add_filter('upload_mimes', 'cc_mime_types');

function cc_mime_types($mimes) {
    $mimes['svg'] = 'image/svg+xml';
    return $mimes;
}

// Fixes SVG upload bug caused as of WP 4.7.1
add_filter('wp_check_filetype_and_ext', 'ignore_upload_ext', 10, 4);

function ignore_upload_ext($checked, $file, $filename, $mimes) {
    //we only need to worry if WP failed the first pass
    if (!$checked['type']) {

        //rebuild the type info
        $wp_filetype = wp_check_filetype($filename, $mimes);
        $ext = $wp_filetype['ext'];
        $type = $wp_filetype['type'];
        $proper_filename = $filename;

        //preserve failure for non-svg images
        if ($type && 0 === strpos($type, 'image/') && 'svg' !== $ext) {
            $ext = $type = false;
        }

        //everything else gets an OK, so e.g. we've disabled the error-prone finfo-related checks WP just went through. whether or not the upload will be allowed depends on the <code>upload_mimes</code>, etc.
        $checked = compact('ext', 'type', 'proper_filename');
    }

    return $checked;
}