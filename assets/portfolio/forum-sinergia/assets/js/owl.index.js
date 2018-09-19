$(document).ready(function($) {

	$('#carousel-elenco').owlCarousel({
		navContainer: '#customNav',
		navText: ["◂","▸"],
		nav: true,
		loop: true,
		margin: 10,
		responsiveClass: true,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1, nav: false, loop: true,
			},
			600: {
				items: 2, nav: false, loop: true,
			},
			1000: {
				items: 3, nav: false, loop: true,
			},
			1200:{
				items: 4, nav: false, loop: true,
			}
		},
	});

	$('#carousel-parceiros').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1, nav: false, loop: true,
			},
			600: {
				items: 2, nav: false, loop: true,
			},
			1000: {
				items: 3, nav: false, loop: true,
			},
			1200:{
				items: 4, nav: false, loop: true,
			}
		},
	});

$('.slide-owl').owlCarousel({
    items:1,
    loop: true,
    autoHeight:true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
});



});