'use strict';

$(function () {

	// let Template();

	var my_test = JSON.parse(getObject());
	var tmpl = _.template($('#test').html());
	var result = tmpl(my_test);
	$('body').append(result);

	var Template = function Template() {
		var questions = {
			'1': {
				'title': 'Что такое CSS-хак?',
				'answers': ['это взлом персональных данных с помощью CSS', 'это использование синтаксически некорректных CSS команд для старых браузеров', 'это использование javascript внутри CSS'],
				'correct': 1
			},
			'2': {
				'title': 'Что такое условные комментарии?',
				'answers': ['это специальна технология определения валидности HTML для данного браузера', 'это вставка кода на javascript для поддержания кроссбраузерности', 'это специальна технология определения версии для IE'],
				'correct': 2
			},
			'3': {
				'title': 'Какие подходы считаются лучшими с точки зрения качества?',
				'answers': ['все подходы одинаково хороши', 'Graceful Degradation и Mobile First', 'Progressive Enhancement и Mobile First'],
				'correct': 1
			}

		};

		var tmp = {
			textTitle: 'Тест по фронтенду',
			subtitle: 'Выберите один вариант:',
			questions: questions,
			input: 0,
			switchOn: 'Показать результаты'
		};

		localStorage.setItem('questions', JSON.stringify(tmp));
	};

	// let getObject = () => localStorage.getItem('questions');

	function getObject() {
		return localStorage.getItem('questions');
	}

	$('#switchOn').on('click', function () {
		createModalform();
		showResult();
	});

	var showResult = function showResult() {
		var elements = $('input:radio');
		var indexElement = 0;

		var _loop = function _loop(index) {

			my_test.questions[index].answers.forEach(function (item, i) {
				if (elements[indexElement].checked) {
					$('.answered')[indexElement].style.color = "#000";
					$('.answered')[indexElement].style.fontWeight = "bold";
				}

				if (i === my_test.questions[index].correct) {
					if (elements[indexElement].checked) {
						$(".list__item")[index - 1].style.background = "rgb(223,240,216)";
						$('.answered')[indexElement].style.color = "#000";
					}
				}

				// if(elements.checked !== true) {
				// $('.info').css({'display':'block'});

				// }
				indexElement++;
			});
		};

		for (var index in my_test.questions) {
			_loop(index);
		}
		indexElement = 0;
	};

	var createModalform = function createModalform() {
		var modal = $('<div class = "background"></div>');
		var container = $('<div class = "container"></div>');
		modal.append(container);
		var list = $('<ol class = "list"></ol>');
		container.append(list);
		var info = $('<p class = "info">f;lkf;efkl;</p>');
		container.append(info);

		var _loop2 = function _loop2(index) {
			var item = $('<li class = "list__item"></li>');
			var quest = $('<h4 class = "list__quest"></h4>');
			var answer = $('<ul class = "list__answer"></ul>');
			list.append(item);
			item.append(quest);
			quest.text(my_test.questions[index].title);
			item.append(answer);
			my_test.questions[index].answers.forEach(function (item) {
				var answerItem = $('<li class = "answered"></li>');
				answer.append(answerItem);
				answerItem.text(item);
			});
		};

		for (var index in my_test.questions) {
			_loop2(index);
		}
		var button = $('<input type = "submit" value = "OK" id = "switchOff" class="btn btn-info">');
		button.click(deleteModalform);
		container.append(button);
		$('body').append(modal);
	};

	var deleteModalform = function deleteModalform() {
		$("input").attr("checked", false);
		$('.background').remove();
	};
});