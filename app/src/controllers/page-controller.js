define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

  function PageController(){
  }

  PageController.prototype.renderHomePage = function() {
    console.log("rendering homepage");
  };

  return PageController;
});
  
