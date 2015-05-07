'use strict';

angular.module('numerianApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('file', {
        url: '/file',
        templateUrl: 'app/file/file.html',
        controller: 'FileCtrl'
      });
  });