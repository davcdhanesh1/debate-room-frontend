define([
  'jquery',
  'underscore',
  'backbone',
  '../helpers/key-press-handler'
],function($, _, Backbone, KeypressEventHandlerMixin ) {
  
  var HomePageView = Backbone.View.extend(

    $.extend(true, {}, KeypressEventHandlerMixin, { 
     
      el: "#main-container", 

      render: function() {
        this.$el.html("<input type='text' id='welcome-input'>");
        return this;
      },

      submit: function() {
        console.log("submit called for homepage view");
      }

    })
  );

  return HomePageView;
});
