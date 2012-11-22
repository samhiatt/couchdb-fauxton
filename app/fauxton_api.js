define([
  "app",

  // Modules
  "modules/dashboard"
],

function(app, Dashboard) {
  var FauxtonAPI = app.module();

  FauxtonAPI.moduleExtensions = {
    Routes: {
    }
  };

  FauxtonAPI.View = Backbone.View.extend({
    // This should return an array of promises, an empty array, or null
    establish: function() {
      return null;
    }
  });

  FauxtonAPI.addHeaderLink = function(link) {
    app.dashboard.navBar.addLink(link);
  };

  FauxtonAPI.Deferred = function() {
    return $.Deferred();
  };

  FauxtonAPI.addRoute = function(route) {
    app.router.route(route.route, route.name, route.callback);
  };

  FauxtonAPI.module = function() {
    return app.module();
  };

  return app.fauxtonAPI = FauxtonAPI;
});