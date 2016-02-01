define([
  'jquery',
  'underscore',
  'backbone',
  'controllers/page-controller'
], function($, _, Backbone, PageController) {

  describe("PageController", function() {

    it("should renderHomePageView", function() {
      var spyHomePageView = jasmine.createSpyObj('homePageView', ['render']);
      var pageController = new PageController();
      pageController.homePageView = spyHomePageView;

      pageController.renderHomePage();

      expect(spyHomePageView.render).toHaveBeenCalled();
    });

  });
});
