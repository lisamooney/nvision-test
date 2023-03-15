<?php
add_action('wp_enqueue_scripts', 'styles');
function styles() {
    wp_enqueue_style(
        'app',
        get_template_directory_uri() . '/build/app.css',
        array(),
        time()
    );

};

add_action('wp_enqueue_scripts', 'scripts');
function scripts() {
    wp_enqueue_script(
        'app',
        get_template_directory_uri() . '/build/app.js',
        array('jquery'),
        time(),
        true
    );
};