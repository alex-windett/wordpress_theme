module.exports = function(grunt) {

	grunt.config('concat', {
		dist: {
			files: {
				'<%= globalConfig.js_concat %>/vendor.js': [
					'<%= globalConfig.bower %>/foundation/js/foundation.js',
					'<%= globalConfig.bower %>/stacktable/stacktable.js',
					'assets/js/vendor/jquery.superLabels.js',
					'<%= globalConfig.bower %>/dropkick/build/js/dropkick.min.js',
					// Owl Carousel must be called last
					'<%= globalConfig.bower %>/owl-carousel2/dist/owl.carousel.min.js',
					'<%= globalConfig.bower %>/jquery-hoverIntent/jquery.hoverIntent.js',
					'<%= globalConfig.bower %>/Lettering.js/jquery.lettering.js'
				],
				'<%= globalConfig.js_concat %>/ie-vendor.js' : [
					'<%= globalConfig.bower %>/html5shiv/dist/html5shiv.js',
					'<%= globalConfig.bower %>/nwmatcher/src/nwmatcher.js',
					'<%= globalConfig.bower %>/REM-unit-polyfill/js/rem.js',
					'<%= globalConfig.bower %>/respond/dest/respond.js',
					'<%= globalConfig.bower %>/selectivizr/selectivizr.js'
				],
				'<%= globalConfig.js_concat %>/app.js': [
					'<%= globalConfig.js_custom %>/jquery-start.js',
					'<%= globalConfig.js_custom %>/functions/*.js',
					'<%= globalConfig.js_custom %>/doc-ready.js',
					'<%= globalConfig.js_custom %>/debounce.js',
					'<%= globalConfig.js_custom %>/jquery-end.js'
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};