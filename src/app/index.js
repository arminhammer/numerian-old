'use strict';

angular.module('numerian', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'chart.js', 'ngFileUpload', 'angularFileUpload'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
