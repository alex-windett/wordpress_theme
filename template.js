/**
 *
 * Licensed under the MIT License
 */

'use strict';

// Basic template description
exports.description = 'Create a WordPress theme based on a Big Fish template.';

// Template-specific notes to be displayed before question prompts.
exports.notes = 'Answer a few questions about the features you want in your theme and we\'ll do the rest!';

// Template-specific notes to be displayed after the question prompts.
exports.after = 'You\'re done! Make sure everthings there by running npm install and bower install.';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

var globalConfig = {
	theme_root : 'root/',
	assets : 'root/assets/',

	js           : '<%= globalConfig.assets %>/js',
	scss         : '<%= globalConfig.assets %>/scss',
	bower        : '<%= globalConfig.assets %>/bower_components',
	node_modules : '<%= globalConfig.assets %>/node_modules',
	img          : '<%= globalConfig.assets %>/img',
	pages        : '<%= globalConfig.theme_root %>/img',
};

// The actual init template
exports.template = function (grunt, init, done) {
	init.process({}, [
		// Prompt for these values.
		init.prompt('title', 'Big Fish Project'),
		init.prompt('description', 'Another Awsome Big Fish Theme'),
		init.prompt('homepage', 'http://www.bigfish.co.uk'),
		init.prompt('author_name', 'Big Fish'),
		init.prompt('author_email', 'webteam@bigfish.co.uk'),
		init.prompt('author_url', 'http://www.bigfish.co.uk'),
		init.prompt('repository', 'git@github.com:bigfish/'),
		{
			name   : 'four_oh_four_template',
			message: 'Do you want a 404.php? [Y/n]',
			default: 'y'
		},
		{
			name   : 'archive_template',
			message: 'Do you want an archive.php? [Y/n]',
			default: 'y'
		},
		{
			name   : 'style_template',
			message: 'Do you want a style-guide.php? [Y/n]',
			default: 'y'
		},

	], function (err, props) {
		props.keywords = [];
		props.version = '0.1.0';
		props.dependencies = {
			    "grunt": "^0.4.5",
			    "grunt-contrib-clean": "^0.6.0",
			    "grunt-contrib-concat": "^0.5.0",
			    "grunt-contrib-imagemin": "^0.9.1",
			    "grunt-contrib-jshint": "^0.10.0",
			    "grunt-contrib-uglify": "^0.6.0",
			    "grunt-contrib-watch": "^0.6.1",
			    "grunt-newer": "^1.1.0",
			    "grunt-rename": "^0.1.4",
			    "grunt-sass-globbing": "^1.3.0",
			    "grunt-scss-image-helpers": "^0.1.0",
			    "grunt-spritesmith": "^4.6.1",
			    "grunt-svgmin": "^1.0.0",
			    "grunt-text-replace": "^0.3.12",
			    "grunt-contrib-compass": "^1.0.3"
		};

		// Sanitize names where we need to for PHP/JS
		props.name = props.title.replace(/\s+/g, '-').toLowerCase();

		// An additional value, safe to use as a JavaScript identifier.
		props.js_safe_name = props.name.replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');

		// An additional value that won't conflict with NodeUnit unit tests.
		props.js_test_safe_name = props.js_safe_name === 'test' ? 'myTest' : props.js_safe_name;
		props.js_safe_name_caps = props.js_safe_name.toUpperCase();

		// Files to copy and process
		var files = init.filesToCopy(props);

		// Did they want a 404 page?
		if (props.four_oh_four_template.toUpperCase()[0] == "N") {
			delete files[ '404.php'];
		}
		//Do they want an archive page?
		if (props.archive_template.toUpperCase()[0] == "N") {
			delete files[ 'archive-bf-cpt.php'];
		}

		// Do they want a styel-guide page?
		if (props.archive_template.toUpperCase()[0] == "N") {
			delete files[
				'<%= globalConfig.pages %>/style-guide.php', 
				'<%= globalConfig.scss %>/pages/_style-guide.scss'
			]
		}

		console.log(files);

		// Actually copy and process files
		// init.copyAndProcess(files, props, {noProcess: 'screenshot.png'});
		init.copyAndProcess(files, props);

		// Generate package.json file
		init.writePackageJSON('package.json', props);


		// Function to rename a directory using unix command line tools
		var sys = require('sys')
		var exec = require('child_process').exec;
		
		function puts(error, stdout, stderr) { 
			sys.puts(stdout) 
		}

		exec("mv assets/js/theme assets/js/" + props.js_safe_name);

		console.log("Installing node modules and bower components, this may take a while...");

		// Install Dependencies and run grunt task
		exec("npm install; bower install");

		console.log("Directory sctructre....");
		exec("ls -la", puts);
	});

};