function Model(data){
	var self = this;

	self.data = data;

	self.addItem = function(item){
		if(item.length === 0){
			return;
		}
		self.data.push(item);

		return self.data;
	};	

	self.removeItem = function(item){
		var index = self.data.indexOf(item);
		if(index === -1){
			return;
		}
		self.data.splice(index, 1);

		return self.data;
	};

  	self.editItem = function (item, editedItem) {
	    var index = self.data.indexOf(item);

	    if (index === -1) {
	      return;
	    };

	    self.data[index] = editedItem;

	    return self.data
 	}
}


function View(model){
	var self = this;
	function init(){
		var wrapper = tmpl($('#wrapper-template').html());

		$('body').append(wrapper);
		self.elements = {
			input: $('.todo__value'),
			addBtn: $('.todo__add'),
			ListContainer: $('.todo__page__list'),
			inputItem: $('.todo__page__list__item'),
			editIcon: $('.fa-edit')
		};

		self.renderList(model.data);
	};

	self.renderList = function(data){
		var list = tmpl($('#list-template').html(), {data: data});
		self.elements.ListContainer.html(list);
	};

	init();
}


function Controller(model, view){
	var self = this;

	// var Enter = 13;

	$('.todo__value').keydown(function (e){
		if (e.which == 13){
			$(addItem).click();
		}

	});
	view.elements.addBtn.on('click', addItem);
	view.elements.ListContainer.on('click', '.fa-times-circle', removeItem);
	view.elements.ListContainer.on('click', '.fa-edit', editItem);

	function addItem(){
		var newItem = view.elements.input.val();
		//  добавляем представление в модель
		model.addItem(newItem);
		// обновляем список
		view.renderList(model.data);
		// обнуляем значение инпута
		view.elements.input.val('');

	}

	function removeItem(){
		var item = $(this).attr('data-value');

		model.removeItem(item);
		view.renderList(model.data);
	}	

	function editItem(){
		var currentInput = view.elements.inputItem;
		model.editItem(currentInput);
		// model.editItem(editedItem) = view.elements.inputItem.attr('readonly', false);
		view.renderList(model.data);
		// $('.todo__page__list__item').attr('readonly', false);
		// $('.todo__page__list__item').removeAttr('readonly');
		// var currentInput = $(this).removeAttr('readonly');
		// var item = $(this).attr('data-value');

		// model.editItem();
		// view.renderList(model.data);
	}
	
}

$(function (){
	var defaultToDoList = ['learn Javascript', 'learn Angular', 'become middle developer'];
	var model = new Model(defaultToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
});

