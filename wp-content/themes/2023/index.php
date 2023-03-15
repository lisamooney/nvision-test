<?php get_header();?>
<?php if (have_posts()): while (have_posts()): the_post();?>

		<!-- Start Coding Here :) -->

		<?php endwhile;endif;?>
<?php get_footer();