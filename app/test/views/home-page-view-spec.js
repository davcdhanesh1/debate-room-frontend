define([
  'jquery',
  'underscore',
  'backbone',
  'jasmineJquery',
  'views/home-page-view'
], function($, _, Backbone, jasmineJquery, HomePageView) {

  describe("HomePageView", function() {

    it("should display the Welcome banner, when render method is called", function() {
      var homePageView = new HomePageView({el: $("<div id=\"spy-div\"></div>")});
      
      homePageView.render();

      expect(homePageView.$el.text()).toEqual("Welcome to Homepage !!!");
    });

  });

});

