module.exports = function(grunt) {

	grunt.config('compass', {
		dist: {
			options: {
				config: 'config.rb'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-compass');
};