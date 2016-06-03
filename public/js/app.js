"use strict";

(function(){
  angular
  .module("sushiAvenue", [
    "ui.router"

  ])
  .config(Router);

  Router.$inject = ["$stateProvider", "$locationProvider", "$urlRouterProvider"];
  function Router($stateProvider, $locationProvider,$urlRouterProvider){
    $locationProvider.html5Mode(true);
    $stateProvider
    .state("main",{
      url: "/",
      template: "<h2>This is working<h2>"
    })
    .state("test", {
      url: "/test",
      template: "<h2> How can we help you?</h2>"
    });
    $urlRouterProvider.otherwise("/");
  }

})();
