$(function(){



	// var $block1 = $('.block1');
	var $form = $('form'); 
	$form.append('<div class="tooltip_set"></div>');
	var $tooltip_set = $('.tooltip_set');

	var $firstname = $('#firstname');
	$tooltip_set.append('<span class="message1 tooltip">Please provide your first name</span>');
	$('#firstname').on('mouseover', function(){
		$('.message1').animate({
			opacity: 1
		}, 300)
	})

	$('#firstname').on('mouseout', function(){
		$('.message1').animate({
			opacity: 0
		}, 300)
	})

	var $lastname = $('#lastname');
	$tooltip_set.append('<span class="message2 tooltip">Please provide your last name</span>');
	$('#lastname').on('mouseover', function(){
		$('.message2').animate({
			opacity: 1
		}, 300)
	})

	$('#lastname').on('mouseout', function(){
		$('.message2').animate({
			opacity: 0
		}, 300)
	})

	var $adress = $('#adress');
	$tooltip_set.append('<span class="message3 tooltip">Please provide your adress</span>');
	$('#adress').on('mouseover', function(){
		$('.message3').animate({
			opacity: 1
		}, 300)
	})

	$('#adress').on('mouseout', function(){
		$('.message3').animate({
			opacity: 0
		}, 300)
	})

	$('.show_help').on('click', function(){
		$('.tooltip').animate({opacity: 1}, 300);
		setTimeout(function(){
			$(".tooltip").stop().animate({ "opacity": 0 },300);
		}, 2000);

	})





});