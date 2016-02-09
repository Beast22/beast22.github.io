$(function () {

	var $drop = $('.dropdown');

	$drop.on('mouseenter', function(){
		$(this).find('.submenu:first').slideDown("fast").animate({
			backgroundColor: "#c25451",
		}, 400);
	});

	$drop.on('mouseleave', function(){
		$(this).find('.submenu:first').slideUp("fast").animate({
			backgroundColor: "#9b3432",
		}, 200);;
	});

});