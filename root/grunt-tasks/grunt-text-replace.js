module.exports = function(grunt) {

	grunt.config('replace', {
		images: {
			src: ['<%= globalConfig.css %>/*.css'],
			overwrite: true,
			replacements: [{
				from: /\.\.\/img\/src\//g,
				to: '../../<%= globalConfig.img_min %>/'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-text-replace');
};