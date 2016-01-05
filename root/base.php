<?php
use BigFish\FishBones\Wrapper;
use BigFish\FishBones\Setup;
use BigFish\FishBones\Extra;
?>
<!doctype html>
	<head>
		<meta charset="utf-8">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

		<?php wp_head() ?>

	</head>

	<body <?php body_class() ?>>

			<header></header>
					
					<main class="main" role="main">
						
						<h1>Welcome to {%= title %}</h1>
						<?php include Wrapper\template_path() ?>

					</main>
				
			<footer></footer>

		<?php wp_footer() ?>
	</body>
</html>