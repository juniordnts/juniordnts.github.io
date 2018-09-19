$('.slide-owl-home').owlCarousel({
  items: 1,
  loop: true,
  autoHeight: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
});
$('.slide-owl-parc').owlCarousel({
  loop: true,
  autoHeight: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: false,
  responsive : {
      0: { items: 1, },
    480: { items: 2, },
    768: { items: 3, },
    1020: { items: 4, }
  }
});