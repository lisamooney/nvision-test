<?php get_header();?>
<div class="hero">
	<div class="grid-container">
		<div class="grid-x grid-margin-x">
			<div class="cell small-12 medium-8 large-6">
				<h1><span class="red">Transforming Educational Experiences</span> Accelerating Innovative Research</h1>
				<p class="tagline">NVISION offers the academic community a diverse ecosystem of solutions to enrich hands-on lab experiences and enable efficient engineering research.</p>
			</div>
		</div>
		<div class="grid-x">
			<div class="cell small-12">
				<div class="button-container">
					<a href="#" class="btn btn-outline hide-for-small-only" title="REQUEST A QUOTE">REQUEST A QUOTE</a>
					<a href="#" class="btn btn-clear" title="Learn More">Learn More</a>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="three-column-boxes">
	<div class="grid-container">
		<div class="radial-gradient"></div>
		<div class="radial-shadow"></div>
		<div class="grid-x grid-margin-x box-container">
			<div class="cell small-12 medium-4 opacity-1 feature-slider">
				<h4 class="red">//</h4>
				<div class="box-slider slick">
				
					<?php
						$loop = array( 
							'post_type'      => 'slides',
							'posts_per_page' => -1,
						);

						// The Query
						$the_query = new WP_Query( $loop );
						
						// The Loop
						if ( $the_query->have_posts() ) {
							while ( $the_query->have_posts() ) {
								$the_query->the_post(); 
								$reviewer_info = get_field('title_and_company');
								?>
								<div class="slide">
									<blockquote><?php the_content(); ?></blockquote>
									<p class="name"><?php the_title(); ?></p>
									<p class="reviewer"><?php echo $reviewer_info; ?>
								</div>
							<?php }
						}
						wp_reset_postdata();
					?>
				</div>
			</div>
			<?php
				$args = array( 
					'post_type'      => 'post',
					'posts_per_page' => 2,
				);

				// The Query
				$the_query = new WP_Query( $args );

				// The Loop
				if ( $the_query->have_posts() ) {
					while ( $the_query->have_posts() ) {
						$the_query->the_post(); ?>
						<div class="cell small-12 medium-4 opacity-2 feature-box">
							<h2 class="red"><?php the_title(); ?></h2>
							<div class="feature-image">
								<?php 
								$image = get_field('feature_image');
								if( !empty( $image ) ): ?>
									<img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
								<?php endif; ?>
							</div>
							<?php the_content(); ?>
							<a href="<?php the_permalink(); ?>" class="white" alt="<?php the_title(); ?>">Read now</a>
						</div>
					<?php }
				} else {
					// no posts found
				}
				/* Restore original Post Data */
				wp_reset_postdata();
			?>
		</div>
	</div>
</div>
<?php get_footer();