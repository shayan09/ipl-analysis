'use strict';

/**
 * @ngdoc overview
 * @name feApp
 * @description
 * # feApp
 *
 * Main module of the application.
 */
angular
  .module('feApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider) {

      let signaPay =  {
          name : 'signaPay',
          url : '/insights',
          templateUrl: 'views/signaPay.html',
          controller: 'AboutCtrl',
          controllerAs: 'main'
      };

      let auction =  {
          name : 'auction',
          url : '/auction',
          templateUrl: 'views/auction.html',
          controller: 'auction',
          controllerAs: 'main'
      };

    $stateProvider.state(signaPay);
    $stateProvider.state(auction);

  });
