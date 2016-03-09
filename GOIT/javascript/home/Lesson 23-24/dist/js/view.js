define(
  'view',
  [
    'model'

  ],
  function(){

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
    return View;
  }
);