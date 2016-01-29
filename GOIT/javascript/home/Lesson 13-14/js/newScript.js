'use strict'
$(function(){

	Template();

	var my_test = JSON.parse(getObject());
	var tmpl = _.template($('#test').html());
	var result = tmpl(my_test);
	$('body').append(result);


	function Template(){
		var questions = {
		    '1': {
		        'title': 'Что такое CSS-хак?',
		        'answers': [
		            'это взлом персональных данных с помощью CSS',
		            'это использование синтаксически некорректных CSS команд для старых браузеров',
		            'это использование javascript внутри CSS'
		        ],
		        'check': 1,
		        'oneAnser': true
		    },
		    '2': {
		        'title': 'Что такое условные комментарии?',
		        'answers': [
		            'это специальна технология определения валидности HTML для данного браузера',
		            'это вставка кода на javascript для поддержания кроссбраузерности',
		            'это специальна технология определения версии для IE'
		        ],
		        'check': 2,
		        'oneAnser': true
		    },
		    '3': {
		        'title': 'Какие подходы считаются лучшими с точки зрения качества?',
		        'answers': [
		            'все подходы одинаково хороши',
		            'Graceful Degradation и Mobile First',
		            'Progressive Enhancement и Mobile First'
		        ],
		        'check': 1,
		        'oneAnser': true
		    },

		}

		var tmp = {
			textTitle: 'Тест по фронтенду',
			questions,
			nameForInput: 0,
			buttonOn: 'Показать результаты'
		}
		localStorage.setItem('questions', JSON.stringify(tmp))
	}

	function getObject(){
		return localStorage.getItem('questions');
	}

	$('#buttonOn').on('click', function(){
		createModalform();
		showResult();
	})

	function showResult(){
		var elements = $('input:radio');
		var indexElement = 0;

		for(var index in my_test.questions)
		{
			
				my_test.questions[index].answers.forEach(function(item, i){
				if(elements[indexElement].checked)
				{
					$('.answered')[indexElement].style.color = "black";
					$('.answered')[indexElement].style.fontWeight = "bold";
				}

				if(i === my_test.questions[index].check){
					if(elements[indexElement].checked)
					{
						$(".list__item")[index-1].style.background = "rgb(223,240,216)";
						$('.answered')[indexElement].style.color = "#000";
					}
				}
				indexElement++;
				})

		}
		indexElement = 0;
	}	

	function createModalform(){
		var modal = $('<div class = "background"></div>');
		var container = $('<div class = "container"></div>');
		modal.append(container);
		var list = $('<ol class = "list"></ol>');
		container.append(list);
		for(var index in my_test.questions)
		{
			var item = $('<li class = "list__item"></li>');
			list.append(item);
			var quest = $('<h4 class = "list__quest"></h4>');
			item.append(quest);
			quest.text(my_test.questions[index].title);
			var answer = $('<ul class = "list__answer"></ul>');
			item.append(answer);
			my_test.questions[index].answers.forEach(function(item){
					var answerItem = $('<li class = "answered"></li>');
				answer.append(answerItem);
				answerItem.text(item);
			})
		}
		var button = $('<input type = "submit" value = "OK" id = "buttonOff" class="btn btn-info">');
		button.click(deleteModalform);
		container.append(button);
		$('body').append(modal);
	}
		
	function deleteModalform(){
		$("input").attr("checked", false);
		$('.background').remove();
	}
});

