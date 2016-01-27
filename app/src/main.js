require.config({
  
  paths: {
    jquery      : '../lib/jquery/dist/jquery',
    underscore  : '../lib/underscore/underscore',
    backbone    : '../lib/backbone/backbone',
    stickit     : '../lib/backbone.stickit/backbone.stickit'
  }

});

require(['app-router'], function(AppRouter) {
  new AppRouter().start();
});
