'use strict';

angular.module('numerianApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('file', {
        url: '/file/:fileId',
        templateUrl: 'app/file/file.html',
        controller: 'FileCtrl'
      });
  });
