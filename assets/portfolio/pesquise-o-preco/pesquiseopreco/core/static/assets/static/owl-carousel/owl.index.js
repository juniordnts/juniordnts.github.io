jQuery(document).ready(function($) {

	$('.owl-carousel').owlCarousel({
		navContainer: '#customNav',
		navText: ["◂","▸"],
		nav: true,
		loop: true,
		margin: 10,
		responsiveClass: true,
		autoplay: true,
		autoplayTimeout: 1500,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1, nav: false, loop: true,
			},
			600: {
				items: 2, nav: false, loop: true,
			},
			1000: {
				items: 4, nav: false, loop: true,
			}
		},
	});

});	// end document ready