define([
  'jquery',
  'underscore',
  'backbone',
  'app-router'
], function($, _, Backbone, AppRouter) {
  describe('AppRouter', function() {

    it('should have route to homePage for landing page', function() {
      var appRouter = new AppRouter();

      expect(appRouter.routes[""]).toEqual("homePage");
    });
    
    it("should redirect to homePage for any other url which doesn't have matching route", function() {
      var appRouter = new AppRouter();

      expect(appRouter.routes["*actions"]).toEqual("redirectToHomePage");

    });

    it("should call pageController's renderHomePage method to render HomePageView", function() {
      var spyPageController = jasmine.createSpyObj('pageController', ['renderHomePage']);
      var appRouter = new AppRouter();
      appRouter.pageController = spyPageController;

      appRouter.homePage();

      expect(spyPageController.renderHomePage).toHaveBeenCalled();

    });

  });
});
