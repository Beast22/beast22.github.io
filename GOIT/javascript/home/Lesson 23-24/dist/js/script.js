
function Model (data) {
  var self = this;

  self.data = data;

  self.addItem = function (item) {

    if (item.length === 0) {
      return;
    }

    self.data.push(item);

    return self.data
  }  

  self.removeItem = function (item) {
    var index = self.data.indexOf(item);

    if (index === -1) {
      return;
    };

    self.data.splice(index, 1);

    return self.data
  }

  self.editItem = function (item, newItem) {
    var index = self.data.indexOf(item);

    if (index === -1) {
      return;
    };

    self.data.splice(index, 1, newItem );

    return self.data
  }

}

function View (model) {
  var self = this;

  function init () {
    var wrapper = tmpl($('#wrapper-template').html());

    $('body').append(wrapper);

    self.elements = {
      input: $('.todo__value'),
      addBtn: $('.todo__add'),
      listContainer: $('.todo__page__list')
    };
    self.renderList(model.data);
  };


  self.renderList = function (data) {
    var list = tmpl($('#list-template').html(), {data: data});
    self.elements.listContainer.html(list);
  }

  init();

 
  self.elements.listContainer.on('focus', '.todo__page__list__item', function () {
    $(this).siblings('.fa-times-circle').fadeOut( 'fast', function () {
      $(this).siblings('.fa-save').fadeIn('fast').css({'visibility' : 'visible'});
    });
    
  });
  self.elements.listContainer.on('focusout', '.todo__page__list__item', function () {
    $(this).siblings('.fa-save').fadeOut( 'fast', function () {
      $(this).siblings('.fa-times-circle').fadeIn('fast');
    });
  });

}

function Controller (model, view) {
  var self = this;

  view.elements.addBtn.on('click', addItem);
  view.elements.listContainer.on('click', '.fa-times-circle', removeItem);
  view.elements.listContainer.on('focus', '.todo__page__list__item', takeItem);
  view.elements.listContainer.on('click', '.fa-save', editItem);

  function addItem () {
    var newItem = view.elements.input.val();
    model.addItem(newItem);
    view.renderList(model.data);
    view.elements.input.val('');
  }

  function removeItem () {
    var item = $(this).attr('data-value');
    model.removeItem(item);
    view.renderList(model.data);
  }

  function takeItem () {
    var itemVal = $(this).val();
  }

  function editItem () {
    var itemNewVal = $(this).siblings('input').val();
    model.editItem(itemVal, itemNewVal);
    view.renderList(model.data);
  }
}

$(document).ready(function() {
  var defaultToDoList = ['learn Javascript', 'learn Angular', 'become middle developer'];
  var model = new Model(defaultToDoList);
  var view = new View(model);
  var controller = new Controller(model, view);
 
});

