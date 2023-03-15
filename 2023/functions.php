<?php
// Theme Dependencies
require get_template_directory() . '/includes/setup.php';
require get_template_directory() . '/includes/enqueue.php';
require get_template_directory() . '/includes/plugins/acf.php';
require get_template_directory() . '/includes/image-sizes.php';

// Please type and functions you may need below



/**
* Add a custom search button to the end of a specific menu that uses the wp_nav_menu() function
*/
add_filter('wp_nav_menu_items', 'add_search_link', 10, 2);
function add_search_link($items, $args){
    if( $args->theme_location == 'primary' ){
        $items .= '<li><a href="#"><span class="material-symbols-outlined search-button">search</span></a></li>';
    }
    return $items;
}

/**
* Add a custom post type for the slider
*/
add_action( 'init', 'create_posttype' );
function create_posttype() {
    register_post_type( 'slides', // Register Custom Post Type
        array(
        'labels'       => array(
            'name'               => 'Slides', 
            'singular_name'      => 'Slide',
            'add_new_item'       => 'Add New Slide',
            'edit_item'          => 'Edit Slide',
            'new_item'           => 'New Slide',
            'view'               => 'View Slide',
            'view_item'          => 'View Slide',
            'search_items'       => 'Search Slides',
            'not_found'          => 'No Slides found',
            'not_found_in_trash' => 'No Slides found in Trash',
        ),
        'public'       => true,
        'has_archive'  => true,
        'supports'     => array(
            'title',
            'editor',
            'excerpt'
        ),
    ) );
}