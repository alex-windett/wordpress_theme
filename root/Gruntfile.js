module.exports = function (grunt) {

	var timestamp = new Date().getTime(); 

	var globalConfig = {
		project: '{%= js_safe_name %}',
		assets : 'assets',

		base: '/wp-content/themes/{%= js_safe_name %}',

		js           : '<%= globalConfig.assets %>/js',
		css          : '<%= globalConfig.assets %>/css',
		scss         : '<%= globalConfig.assets %>/scss',
		scss_includes: '<%= globalConfig.scss %>/includes',
		bower        : '<%= globalConfig.assets %>/bower_components',
		img          : '<%= globalConfig.assets %>/img',

		img_src    : '<%= globalConfig.img %>/src',
		img_min    : '<%= globalConfig.img %>/min/src',
		img_sprites: '<%= globalConfig.img %>/sprites',

		js_min   : '<%= globalConfig.js %>/min',
		js_concat: '<%= globalConfig.js %>/concat',
		js_custom: '<%= globalConfig.js %>/<%= globalConfig.project %>',

		timestamp: timestamp
	};

	grunt.initConfig({
		pkg         : grunt.file.readJSON('package.json'),
		globalConfig: globalConfig
	});

	// Load tasks
	grunt.loadTasks('grunt-tasks');
	grunt.loadNpmTasks('grunt-newer');
	// grunt.loadNpmTasks('grunt-sass');
	// grunt.loadNpmTasks('grunt-rename');

	// Register tasks
	grunt.registerTask('common', [
		// 'scss_images',
		'newer:sprite',
		'sass_globbing',
		// 'rename',
		// 'replace:scss',
		'concat',
		'uglify',
		'compass'
	]);
	grunt.registerTask('default', [
		'common',
		// 'svgmin',
		'newer:imagemin',
		'replace:images'
	]);
	grunt.registerTask('dev', [
		'common',
		'watch'
	]);
};