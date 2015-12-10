var body = document.querySelector('body');

var app = {
	createElement: function(params){
		var element = document.createElement(params.tagName);

		if(params.inputType){
			element.setAttribute('type', params.inputType);
		} 
		if (params.value) {
				element.setAttribute('value', params.value);
		}
		element.innerHTML = params.info;
		element.className = params.className;

		if (params.parentElement){
			params.parentElement.appendChild(element);
		}

		return element;
	},
	generateQuestion: function(questuinsQuant, answersQuant) {
		for (var i = 0; i < questuinsQuant; i++) {
		
		this.createElement({
			tagName: 'h2',
			info: (i + 1) + '. ' + 'Вопрос №' + (i + 1),
			parentElement: form
		});
		for (var j = 0; j < answersQuant; j++) {
		
		var label = this.createElement({
			tagName: 'label',
			info: 'Вариант ответа №' + (j + 1),
			parentElement: form
		});

		var checkbox = this.createElement({
			tagName: 'input',
			inputType: 'checkbox',
			className: 'check',
			parentElement: form
		});

		label.insertAdjacentElement("afterBegin", checkbox);
		}
	 };
	}
}

// app.createElement('div', 'wrapper', 'test', body);

app.createElement({
	tagName: 'h1',
	className: 'text-center text-info',
	info: 'Тест по программированию',
	parentElement: body
});

var form = app.createElement({
  tagName: 'form',
  className: 'container',
  info: '',
  parentElement: body
});

app.generateQuestion(3, 3);

app.createElement({
	tagName: 'input',
	inputType: 'submit',
	className: 'btn btn-info btn-lg center-block bg-info',
	value: 'Проверить мои результаты',
	parentElement: form
});
