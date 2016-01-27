define([
  'jquery',
  'underscore',
  'backbone',
], function($, _, Backbone) {
  var AppRouter = Backbone.Router.extend({
    
    routes: {

      //Page route
      "" : "homePage",

      "*actions": "redirectToHomePage"
    }, 

    homePage: function () {
      console.log("This should not reflect");
    },

    redirectToHomePage: function () {
      console.log("redirecting someone back to homepage");
      Backbone.history.navigate("", { trigger: true, replace: true });
    },

    start: function () {
      var appRouter = new AppRouter();
      Backbone.history.start();
    }

  });

  return AppRouter;

});
