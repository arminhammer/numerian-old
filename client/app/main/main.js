'use strict';

angular.module('numerianApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.nav', {
        templateUrl: '../components/navbar/navbar.html',
        controller: '../components/navbar/navbar.controller.js'
      });

  });
