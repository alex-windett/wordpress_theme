<?php 
$post = get_page_by_path(  /* Page URL */ '  ' );
setup_postdata( $post );

use BigFish\FishBones\Setup; 
?>

	<h1><?php the_title() ?></h1>
	<?php the_content() ?>

	<?php wp_reset_postdata() ?>

	<?php if ( have_posts() ): while( have_posts() ): the_post(); ?>
						
		<h2><?php the_title() ?></h2>
		<?php the_content() ?>
		
		<?php $image = wp_get_attachment_image_src( get_post_thumbnail_id(), 'full' ); ?>	
		<img <?= Setup\srcset( $image[0], 350, 225 ); ?> alt="<?php the_title() ?>" >


	<?php endwhile; endif; ?>

<?php wp_reset_postdata() ?>