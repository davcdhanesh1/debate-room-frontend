define([
  'jquery',
  'underscore',
  'backbone',
  '../views/home-page-view'
], function($, _, Backbone, HomePageView) {

  function PageController(){
    this.homePageView = new HomePageView();
  }

  PageController.prototype.renderHomePage = function() {
    this.homePageView.render();
  };

  return PageController;
});
  
