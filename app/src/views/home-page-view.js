define([
  'jquery',
  'underscore',
  'backbone'
],function($, _, Backbone) {
  var HomePageView = Backbone.View.extend({
    el: "#main-container",
    
    render: function() {
      this.$el.html("<h2>Welcome to Homepage !!!</h2>");
    }
  });

  return HomePageView;
});
