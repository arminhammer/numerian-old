'use strict';

angular.module('numerianApp')
  .controller('FileCtrl', ['$scope', '$log', '$stateParams', 'FileService', function ($scope, $log, $stateParams, FileService) {

    $scope.message = 'Hello';

    $scope.fileId = $stateParams.fileId;

    FileService.getFile($scope.fileId).then(function(file) {

      $log.debug('Raw files:');
      $log.debug(file);
      $scope.file = file.data;

      $log.debug('Initial file:');
      $log.debug($scope.file);

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


  }]);
