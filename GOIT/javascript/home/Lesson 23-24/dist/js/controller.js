define(
    'controller',
    [
        'model',
        'view'
    ],
    function(){

      function Controller (model, view) {
        var self = this;

        view.elements.addBtn.on('click', addItem);
        view.elements.input.on('keydown', function(e){
          if( e.keyCode === 13 ){
            addItem();         
          }
        });
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
          self.itemVal = $(this).val();
        }

        function editItem () {
          self.itemNewVal = $(this).siblings('input').val();
          model.editItem(self.itemVal, self.itemNewVal);
          view.renderList(model.data);
        }
      }

      return Controller;
    }

);  