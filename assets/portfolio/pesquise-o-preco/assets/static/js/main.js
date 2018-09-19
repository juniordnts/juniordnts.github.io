$(document).ready(function(){

    $(".button-menu").on('click', () => {

  

    	if ($(".button-menu").attr("data-show") === 'false') {
    		$(".product-box").animate({left: '15px'}, 200);
    		// $(".button-menu").animate({left: '200px'}, 1);

    		$(".button-menu").attr("data-show", "true");
    	} else {
    		$(".product-box").animate({left: '-200px'}, 200);
    		// $(".button-menu").animate({left: '0px'}, 1);

    		$(".button-menu").attr("data-show", "false");
    	}
    	

    	// console.log($(".button-menu").attr("data-show"))

    });

    var slider = document.getElementById("range-price");
    var output = document.getElementById("value-price");
    output.innerHTML = slider.value;

    slider.oninput = function() {
      output.innerHTML = this.value;
    };
    
}); // -------------------


/**/


if ($("body").width() < 770) {
    var btnAltura = $("#logo").height();
    btnAltura = btnAltura - 50;
    btnAltura = btnAltura/2;
    var btnPosicao = $("#logo").offset().top;

    $(".button-menu").css("top", btnAltura + btnPosicao );
    $(".product-box").css("top", btnAltura + btnPosicao + 45);
};


/**/


var liBtn = $(".btn-sub-product");
$(".sub-item").each(function(index){
    if($(this).html().length < 20){
        liBtn[index].remove();
    }; 
});