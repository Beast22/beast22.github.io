// (function(){

// 	function sliders() {
// 	    var mySwiper = new Swiper ('.swiper-container', {
// 	      // Optional parameters
// 	      direction: 'horizontal',
// 	      loop: true
// 	    })

// 	}

// 	function init(){
// 		sliders();
// 	}

// 	document.addEventListener('DOMContentLoaded', init);

// })();

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    controlNav: false,
    slideshow: true,
    directionNav: true
  });
});

