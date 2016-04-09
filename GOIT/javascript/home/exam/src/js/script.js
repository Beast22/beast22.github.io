/*------sliders------*/

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    controlNav: false,
    slideshow: true,
    directionNav: true
  });
});

// $(function() {
// alert ('jQuery подключен и весело работает!');
// });

/*------ajax------*/

$(function() {

	function renderImg(queryImg){
		$.ajax({
			type: "GET",
	        dataType: "json",
	        cache: false,
	        url: 'http://api.pixplorer.co.uk/image?word=' + queryImg + '&amount=7&size=m',

	        success: function(data){
	        	for (i = 0; i <= (data.images.length - 1); i++){
	        		url1 = data.images[i].imageurl;
	        		$('.grid-item').eq(i).css("background-image", "url('"+decodeURI(url1)+"')");
	        		$('.activity__text').eq(i).text(data.images[i].word);
	        	}

	             $('.grid').masonry({
	                itemSelector: '.grid-item', 
	                 columnWidth: '.gutter-sizer', 
	                 isResizable: true, 
	                 singleMode: false, 
	                 isAnimated: true, 
	                 animationOptions: { 
	                      queue: false,
	                      duration: 400
	                 }
	              });
	        }

	     });
	}   

	        $('.block__button--activity').click(function(e) {

		        e.preventDefault();
		        var query = encodeURIComponent($('.activity-form__input').val());
		        renderImg(query);
		        return false;

	    	});

	    	renderImg('');
	
})

