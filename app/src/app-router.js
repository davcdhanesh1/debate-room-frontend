define([
  'jquery',
  'underscore',
  'backbone',
  'controllers/page-controller'
], function($, _, Backbone, PageController) {
  var AppRouter = Backbone.Router.extend({

    pageController: new PageController(),

    routes: {

      //Page route
      "" : "homePage",

      "*actions": "redirectToHomePage"
    }, 

    homePage: function () {
      this.pageController.renderHomePage();
    },

    redirectToHomePage: function () {
      console.log("Redirecting back to homepage...");
      Backbone.history.navigate("", { trigger: true, replace: true });
    },

    start: function () {
      Backbone.history.start();
    }

  });

  return AppRouter;

});
