'use strict'

$(function () {

	var questions = [

		{
			question:"Что такое CSS-хак?",
			quest_descr:"Выберите один ответ:",

			answer:[
			"a. это взлом персональных данных с помощью CSS",
			"b. это использование синтаксически некорректных CSS команд для старых браузеров",
			"с. это использование javascript внутри CSS"
			],
			correctAnswer: 1
		},

		{
			question:"Что такое условные комментарии?",
			quest_descr:"Выберите один ответ:",

			answer:[
			"a.  это специальна технология определения валидности HTML для данного браузера",
			"b. это вставка кода на javascript для поддержания кроссбраузерности",
			"с. это специальна технология определения версии для IE"
			],
			correctAnswer: 2
		},

		{
			question:"Какие подходы считаются лучшими с точки зрения качества?",
			quest_descr:"Выберите один ответ:",

			answer:[
			"a. все подходы одинаково хороши",
			"b. Graceful Degradation и Mobile First",
			"c. Progressive Enhancement и Mobile First"
			],
			correctAnswer: 1
		}


	]

	 localStorage.setItem('test', JSON.stringify(questions));

	 var my_test = JSON.parse(localStorage.getItem('test'));

	 var test_questions = $('#testGenerate').html();

	 var content = tmpl(test_questions, {test: my_test});

	 $('.form').append(content); 


	 function modalWindow(){
	 // 	var $modal = document.createElement('div');
		// var $closer = document.createElement('span');
		// var $overlay = document.createElement('div');

		// $modal.classList.add('modal_form');
		// $closer.classList.add('modal_close');
		// $overlay.classList.add('overlay');

		 	var modal = document.getElementById('modal_form');
			var closer = document.getElementById('modal_close');
		    var overlay = document.getElementById('overlay');

		    // $('body').append($modal);
		    // $($modal).append($closer);
		    // $('body').append($overlay);
	 }

			  function showModal(){

			  	$('#overlay').fadeIn(400,
			  		function(){
			  			$('#modal_form')
			  				.css('display', 'block')
			  				.animate({opacity: 1, top: '50%'}, 200);
			  	});
			  }


			  function hideModal(){
			  	$('#modal_form')
			  		.animate({opacity: 0, top: '45%'}, 200,
			  		function(){
			  			$(this).css('display', 'none');
			  			$('#overlay').fadeOut(400);
			  		});
			  };

			  $('#go').on('click', showModal);
			  $('#modal_close').on('click', hideModal);
			  $('#overlay').on('click', hideModal);

});