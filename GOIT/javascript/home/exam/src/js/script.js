// sliders

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    animationLoop: true,
    controlNav: false,
    slideshow: true,
    directionNav: true
  });
});

(function($){

	var pict = [],
		defaultImg = [
		{ url: "dist/img/gall-1.jpg", word: "Sport and Activity" },
		{ url: "dist/img/gall-2.jpg", word: "Wellnes and Health" },
		{ url: "dist/img/gall-3.jpg", word: "Extreme Sports and Expeditions"},
		{ url: "dist/img/gall-4.jpg", word: "Games"},
		{ url: "dist/img/gall-5.jpg", word: "Culture and Education"},
		{ url: "dist/img/gall-6.jpg", word: "Relaxation"},
		{ url: "dist/img/gall-7.jpg", word: "Travelling"}
		];

	function getQuery(){
		var userQuery = $('.activity-form__input').val();
		$('.activity-form__input').val("");
		initQuery(userQuery);
	}

	function initQuery(userQuery){
		var query = encodeURIComponent(userQuery);
		var queryStr = 'http://api.pixplorer.co.uk/image?word=' + query + '&amount=7&size=s';

		$.ajax({
			type: "GET",
			dataType: "jsonp",
			cache: false,
			url: queryStr,
			success: function(data) {
				if ( data.status !== 'failed' ) {
					if (data.pict.length > 0) {
					localStorage.setItem("word", userQuery);
					var i = 0;
					while(i < 7) {
						pict[i].url = data.pict[i].imageurl;
						pict[i].word = data.pict[i].word;
						i++;
					}
				} else {
						if (localStorage.word) {
							$.each(pict, function(i, img) {
								img.word = localStorage.word;
							});
							}
				}
				} else{
						pict = copy(defaultImg);

				}
				render(pict);	
			},

			error: function() {
				alert('Ajax does not support by this browser.');
			}
		}).done(function(){
			Isotope();
		});
	}


	function Isotope(){
		$('.images-dest').isotope({
			layoutMode: 'masonry',
			itemSelector: '.activity__link',
			masonry: {
				gutter: 20
			}
		});

	}

	function render(pict){
		var html = tmpl($('#_template').html(), { data:pict });
		$('.images-dest').html(html);
	}

	function copy(oldArray) {
		var newArray = [];
		$.each(oldArray, function(i){
			newArray[i] = $.extend({}, oldArray[i]);
		});

		return newArray;
	}

	$(function() {
		pict = copy(defaultImg);


		if(typeof(Storage) !== "undefined") {

			var loadedData = localStorage.getItem("word");

			if (loadedData) {
				initQuery(loadedData);
			} else {
				initQuery('');
			}

	} else {
				var renderTmpl = function() {
					return render(pict);
				}

				$.when(renderTmpl()).done(function() {
					Isotope();
				});
		}
	});

	$('#form-activity').submit(function(e){
		e.preventDefault();
		$('.images-dest').isotope('destroy');
		$('.images-dest').html("");
		getQuery();
	});	

})(jQuery);

