/* global io */
'use strict';

angular.module('numerianApp')
  .factory('FileService', ['$http', 'socket', function($http, socket) {

    var files = [];

    return {

      getFiles: function() {

        var promise = $http.get('/api/files').success(function(getFiles) {
          files = getFiles;
          console.log('Got files...');
          console.log(getFiles);
        });

        return promise;

      },

      getFile: function(fileId) {

        var promise = $http.get('/api/files/' + fileId).success(function(getFile) {

          console.log('Got file...');
          console.log(getFile);

        });

        return promise;

      }

    };

  }]);
