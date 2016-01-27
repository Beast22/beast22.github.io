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



	function getAnswers(e){

		 e.preventDefault();

		 var yourAnswers = [];

		for (var i = 0; i < my_test.length; i++){

			var checkboxes = $('quest_item' + i + 'input:checkbox');

			var answered = {};

			for (var c = 0; c < checkboxes.length; c++){

			var checked = checkboxes[c].checked;

			var correct = my_test[i].correctAnswer[c+1];

			if (checked !== correct) {

					answered[c] = false;

				} else {

					answered[c] = true;
				};

			};
				yourAnswers.push(answered);


		 };

	


 	// modal window

	 	function createResults(){
		 	var $modal = $('<div id="modal_form"><h2>Результаты теста:\n</h2></div>');
			var $closer = $('<span id="modal_close">X</span>');
		    var $overlay = $('<div id="overlay"></div>');

		    $('body').append($modal);
		    $('#modal_form').append($closer);
		    $('body').append($overlay);

		    for (var i = 0; i < my_test.length; i++){

				var checkboxes = $('quest_item' + i + 'input:checkbox');

				var results = $('#modal_form' + i + 'input:checkbox');

					for (var c = 0; c < questions[i].answer.length; c++) {

						var checked = checkboxes[c].checked;

						if((checked == true)) {
							if ((yourAnswers[i][k]) == true) {
								$(results[k]).attr({
								"disabled": true,
		    					"checked" : true	
								}).append("<span> Правильный ответ!</span>");
							}
						}
					};

			};


			  function showResults(){
			  	$('#overlay').fadeIn(400,
			  		function(){
			  			$('#modal_form')
			  				.css('display', 'block')
			  				.animate({opacity: 1, top: '50%'}, 200);
			  	});
			  }


			  function hideResults(){
			  	$('#modal_form')
			  		.animate({opacity: 0, top: '45%'}, 200,
			  		function(){
			  			$(this).css('display', 'none');
			  			$('#overlay').fadeOut(400);
			  		});
			  };

			  $('#go').on('click', showResults);
			  $('#modal_close').on('click', hideResults);
			  $('#overlay').on('click', hideResults);

		 };

		 createResults();
	 };

	 $('#go').on('click', getAnswers);
	


});