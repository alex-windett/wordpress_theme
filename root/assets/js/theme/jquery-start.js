// define jQuery
jQuery(function($){
// start custom functions

Foundation.global.namespace = '';

$(document).foundation({
	orbit: {
		animation: 'fade',
		timer_speed: 5000,
		pause_on_hover: true,
		resume_on_mouseout: true,
		next_on_click: true,
		animation_speed: 500,
		stack_on_small: false,
		navigation_arrows: true,
		slide_number: false,
		// show_slide_numbers: true,
		container_class: 'orbit-container',
		stack_on_small_class: 'orbit-stack-on-small',
		bullets: true,
		circular: true,
		timer: true,
		variable_height: false,
		swipe: true
	},
	accordion: {
		multi_expand: false,
		toggleable: true
	},
	offcanvas: {
		close_on_click: true
	},
	tab: {
		callback : function () {
			destroyMasonry();
			createMasonry();
		}
	},
	reveal: {
		animation: 'fade',
		animation_speed: 250,
		close_on_background_click: true
	}
});
// no writting in this file