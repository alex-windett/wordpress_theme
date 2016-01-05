module.exports = function(grunt) {

	grunt.config('watch', {
		sass: {
			files: [ '<%= globalConfig.scss %>/**/*.scss' ],
			tasks: ['compass:dist']
		},
		js: {
			files: '<%= globalConfig.js_custom %>/**/*.js',
			tasks: ['concat', 'jshint']
		},
		livereload: {
			options: {
				livereload: 35740
			},
			files: ['**/*.html', '**/*.php', '<%= globalConfig.js_concat %>/*', '<%= globalConfig.css %>/*','img/**/*.{png,jpg,jpeg,gif,webp,svg}']
		},
		sprites: {
			files: [
				'<%= globalConfig.img_sprites %>/**/*.{png,jpg,gif}',
				'<%= globalConfig.img_sprites %>/sprite-*.png',
				'grunt-tasks/grunt-sprite.js',
				'grunt-tasks/grunt-rename.js'
			],
			tasks: [
				'sprite',
				'compass:dist'
			]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};