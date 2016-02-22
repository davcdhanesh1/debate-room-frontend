
define([
  'jquery',
  'underscore',
  'backbone'
],function($, _, Backbone) {

  var KeypressEventHandlerMixin = {

    events: {
      "keypress input" : "enterKeyPressHandler"
    },

    enterKeyPressHandler: function(event) {
      if ( event.which == 13 ) {
        this.submit();
      }
    }
  };

  return KeypressEventHandlerMixin;
});
