'use strict';

angular.module('numerianApp')
  .controller('FileCtrl', [
    '$scope',
    '$log',
    '$stateParams',
    'socket',
    'FileService',
    'DefinitionService',
    'fileFilterFilter',
    function ($scope, $log, $stateParams, socket, FileService, DefinitionService, fileFilterFilter) {

      $scope.message = 'Hello';
      $scope.currentFilter='filter1';

      FileService.getFile($stateParams.fileId).then(function(file) {

        $log.debug('Raw files:');
        $log.debug(file);
        $scope.file = file.data;

        //$scope.files = [];
        //$scope.files.push(file.data);

        $log.debug('Initial file:');
        $log.debug($scope.file);

        $log.debug('files:');
        $log.debug($scope.files);

        socket.syncUpdates('file', $scope.file);

        $scope.filteredFile = fileFilterFilter($scope.file, $scope.currentFilter);

        /*
         DefinitionService.getDefinition($scope.file._id).then(function(definition) {

         //$scope.file.result = result;

         $log.debug('File definition:');
         //$log.debug($scope.file.result);

         $log.debug(definition);

         });
         */

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



    }])
  .filter('fileFilter', ['$log', function($log) {
    return function(input, filterName) {

      $log.debug('Filter Log');
      $log.debug(input);

      //$log.debug('part:');
      //$log.debug(part);

      var output = {};

      output.title = 'Filtered ' + input.title;
      output.testVal = 500;
      output.currentFilter = filterName;
      output.content = input.content;
      output.result = {
        count: {
          labels: ['Label A'],
          series: ['Label A'],
          data: [[1]]
        },
        timeseries: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          series: ['Series A', 'Series B'],
          data: [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 90]
          ]
        }
      };

      $log.debug('Output');
      $log.debug(output);

      return output;

      //if(part === 'series') {
      //  return 'its a series!';
      //}
      //else {
      //  return filterName;
      //}


      /*
       var newFile = {
       testVal: 500,
       title: 'Filtered File'
       };

       filteredArray.push(newFile);

       */

      //input.testVal = 500;

      //$log.debug('Using ' + filterName);


      //FileService.setTestCount(500);

    }
  }]);
