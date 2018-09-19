
// Menu mobile

$(".menu-name").click(menuToggle);

// if ($(window).width() < 760){
//   $("#menuMobile").slideUp("slow");
// };

$(window).resize(function(){
  console.log("Resize");
  if ($(window).width() > 760){
    $("#menuMobile").slideDown("slow");
  } else {
    $("#menuMobile").slideUp("slow");
  };
});

function menuToggle(){
  if ($(window).width() < 760){
    $("#menuMobile").slideToggle("slow");
  };
};




// Instagram feed

var galleryFeed = new Instafeed({
  get: "user",
  userId: 66,
  accessToken: "hh",
  resolution: "standard_resolution",
  useHttp: "true",
  limit: 3,
  template: '<div class="block-img-insta"><img class="img-insta" src="{{image}}"><a href="https://www.instagram.com/alecrimfc/" target="_blank"><div class="info-insta"><div><p><i class="material-icons insta-icon">favorite</i>{{likes}}</p><p><i class="material-icons insta-icon">chat_bubble</i>{{comments}}</p></div></div></a></div>',
  target: "instafeed",
});

galleryFeed.run();


function instaSize(){
	var largura = ($('#instafeed').width())*0.33;
		console.log(largura);
    $('.img-insta').css('property1', '150');
};

$(window).resize(instaSize);

// slide animation

$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      if ($(this).attr("data-slide") == 'top'){
        $(this).addClass("slideTop");
      } else if ($(this).attr("data-slide") == 'left'){
        $(this).addClass("slideLeft");
      } else if ($(this).attr("data-slide") == 'right'){
        $(this).addClass("slideRight");
      } else {
        $(this).addClass("slideDown");
      }
    };
  });
});


