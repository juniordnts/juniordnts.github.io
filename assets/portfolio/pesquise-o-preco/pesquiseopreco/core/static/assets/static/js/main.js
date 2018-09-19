$(document).ready(function(){

    $(".button-menu").on('click', () => {

  

    	if ($(".button-menu").attr("data-show") === 'false') {
    		$(".product-box").animate({left: '16px'}, 200);
    		$(".button-menu").animate({left: '200px'}, 1);

    		$(".button-menu").attr("data-show", "true");
    	} else {
    		$(".product-box").animate({left: '-200px'}, 200);
    		$(".button-menu").animate({left: '0px'}, 1);

    		$(".button-menu").attr("data-show", "false");
    	}
    	

    	console.log($(".button-menu").attr("data-show"))

    });

    var slider = document.getElementById("range-price");
    var output = document.getElementById("value-price");
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    };
    
}); // -------------------


