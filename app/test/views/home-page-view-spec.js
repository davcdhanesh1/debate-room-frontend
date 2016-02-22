define([
  'jquery',
  'underscore',
  'backbone',
  'jasmineJquery',
  'views/home-page-view'
], function($, _, Backbone, jasmineJquery, HomePageView) {

  describe("HomePageView", function() {

    var homePageView;

    beforeEach(function() {
      homePageView = new HomePageView({el: $("<div id=\"spy-div\"></div>")});
    });

    it("should submit form when 'enterkey' is clicked", function() {
      spyOn(homePageView, 'submit');
      var event = $.Event("keypress");
      event.which = 13;

      homePageView.render().$el.find("#welcome-input").trigger(event);

      expect(homePageView.submit).toHaveBeenCalled();
    });

  });

});

