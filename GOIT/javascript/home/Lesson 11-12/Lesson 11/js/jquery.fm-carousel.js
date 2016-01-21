(function($){

	$.fn.fm_carousel = function(options){

		var defaults = {
			quantaty: 4,
			autoPlay: false,
			autoPlayDelay: 2000 // delay in miliseconds
		};

		var settings = $.extend(defaults, options);

		var $leftArrow = $('.fm-carousel-arrow-left');
		var $rightArrow = $('.fm-carousel-arrow-right'); 
		var $carousel = $('.fm-carousel-list');
		var $leftOffset = 225;
		var $currentLeftPlace = 0;
		var $elementsCount = $carousel.find('li').length;
		var $maximumOffset;
		var $minimumOffset;
	
	
		  	$leftArrow.click(function() {
    		$maximumOffset = 0;
		if ($currentLeftPlace != maximumOffset){
			$currentLeftPlace += 225;
			$carousel.animate({left : $currentLeftPlace + "px"}, 500);
			}
		}); 

		 	$rightArrow.click(function() {
    		$minimumOffset = - (($elementsCount - options.quantaty) * $leftOffset);
		if ($currentLeftPlace != minimumOffset){
			$currentLeftPlace -= 225;
			$carousel.animate({left : $currentLeftPlace + "px"}, 500);
			}
		}); 

		return this;
	};




})(jQuery);