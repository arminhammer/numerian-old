/* global io */
'use strict';

angular.module('numerianApp')
  .factory('FileService', ['$http', 'socket', function($http, socket) {

    var files = [];

    var testCount = 0;

    function buildResults(file) {

      var defer = $q.defer();

      var result = {};

      result.count = {
        series: [],
        labels: [],
        hits: []
      };

      angular.forEach(definition.patterns, function(pattern) {

        $log.debug('Pattern:');
        $log.debug(pattern);
        if(pattern.defType === 'count') {

          $scope.results[definition.name].count.labels.push(pattern.name);

        }

      });

      defer.resolve(result);

      return defer.promise;

    }

    return {

      /**
       * Return all of the files as a promise
       * @returns {*}
       */
      getFiles: function() {

        var promise = $http.get('/api/files').success(function(getFiles) {
          files = getFiles;
          console.log('Got files...');
          console.log(getFiles);
        });

        return promise;

      },

      /**
       * Returns a single file as a promise
       * @param fileId
       * @returns {*}
       */
      getFile: function(fileId) {

        var promise = $http.get('/api/files/' + fileId).success(function(getFile) {

          console.log('Got file...');
          console.log(getFile);

        });

        return promise;

      },

      getTestCount: function() {

        return testCount;

      },

      setTestCount: function(newValue) {

        testCount = newValue;

      }

    };

  }]);
