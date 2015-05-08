/* global io */
'use strict';

angular.module('numerianApp')
  .factory('DefinitionService', ['$http', 'socket', function($http) {

    var definitions = [];

    return {

      getDefinitions: function() {

        var promise = $http.get('/api/definitions').success(function(getDefs) {

          definitions = getDefs;

          console.log('Got files...');
          console.log(getDefs);

        });

        return promise;

      },

      buildResultForFile: function(file) {



      }

    };

  }]);
