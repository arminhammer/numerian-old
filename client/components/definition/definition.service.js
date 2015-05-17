/* global io */
'use strict';

angular.module('numerianApp')
  .factory('DefinitionService', [
    '$http',
    '$q',
    'socket',
    function($http, $q, socket) {

    var definitions = {};

    return {

      getDefinitions: function() {

        var promise = $http.get('/api/definitions').success(function(getDefs) {

          definitions = getDefs;

          console.log('Got files...');
          console.log(getDefs);

        });

        return promise;

      },

      /**
       * Returns a single file as a promise
       * @param fileId
       * @returns {*}
       */
      getDefinition: function(definitionId) {

        var promise = $http.get('/api/definitions/' + definitionId).success(function(getDefinition) {

          console.log('Got definition...');
          console.log(getDefinition);

        });

        return promise;

      }

    };

  }]);
