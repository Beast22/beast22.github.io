require(
  [
    'model',
    'view',
    'controller'
  ],

  function(Model, View, Controller){

      $(document).ready(function() {
        var defaultToDoList = ['learn Javascript', 'learn Angular', 'become middle developer'];
        var model = new Model(defaultToDoList);
        var view = new View(model);
        var controller = new Controller(model, view);
       
      });
  }
);