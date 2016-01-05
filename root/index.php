<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package {%= title %}
 */

use BigFish\FishBones\Wrapper;
use BigFish\FishBones\Setup;
?>

<?php if ( have_posts() ): ?>

	<?php while ( have_posts() ) : the_post(); ?>
		
		<h1><?php the_title(); ?></h1>

		<?php the_content(); ?>

	<?php endwhile; ?>


<?php else: ?>

	<h1>No blog posts here</h1>

<?php endif; ?>