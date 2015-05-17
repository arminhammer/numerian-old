'use strict';

angular.module('numerianApp')
  .controller('FileCtrl', [
    '$scope',
    '$log',
    '$stateParams',
    'socket',
    'FileService',
    'DefinitionService',
    function ($scope, $log, $stateParams, socket, FileService, DefinitionService) {

    $scope.message = 'Hello';

    FileService.getFile($stateParams.fileId).then(function(file) {

      $log.debug('Raw files:');
      $log.debug(file);
      $scope.file = file.data;

      $scope.files = [];
      $scope.files.push(file.data);

      $log.debug('Initial file:');
      $log.debug($scope.file);

      $log.debug('files:');
      $log.debug($scope.files);

      socket.syncUpdates('file', $scope.file);

      DefinitionService.getDefinition($scope.file._id).then(function(definition) {

        //$scope.file.result = result;

        $log.debug('File definition:');
        //$log.debug($scope.file.result);

        $log.debug(definition);

      });

      /*
      $scope.testFilter = function(text) {

        return '<b><i>' + text + '</i></b>';

      };
      */

      /*

      socket.syncUpdates('file', $scope.files);

      DefinitionService.getDefinitions().then(function(defs) {

        $scope.definitions = defs.data;

        socket.syncUpdates('definitions', $scope.definitions);

        buildResultLabels(function() {

          processFiles(function() {

            $log.debug('Finished processing...');
            $log.debug($scope.results);

          });

        });

      });

      */

    });

      $scope.currentFilter='filter1';

      $scope.testCount = FileService.getTestCount();


  }])
  .filter('fileFilter', ['$log', function($log) {
    return function(input, filterName) {

      $log.debug('Filter Log');
      $log.debug(input);

      var filteredArray = [];

      /*
      var newFile = {
        testVal: 500,
        title: 'Filtered File'
      };

      filteredArray.push(newFile);

      */

      //input.testVal = 500;

      filteredArray.push(input);

      return filteredArray;

      //$log.debug('Using ' + filterName);


      //FileService.setTestCount(500);

    }
  }]);
