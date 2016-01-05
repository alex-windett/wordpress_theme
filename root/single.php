<?php
/**
 * The Template for displaying all single posts.
 *
 * @package {%= title %}
 */

use BigFish\FishBones\Setup;

the_post();
?>

<h1><?php the_title(); ?></h1>

<?php the_content(); ?>