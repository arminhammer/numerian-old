'use strict';

angular.module('numerianApp')
  .controller('MainCtrl', ['$scope', '$http', 'socket', '$log', 'FileUploader', 'FileService', function ($scope, $http, socket, $log, FileUploader, FileService) {

    var Pattern = function Pattern(name, type, match) {

      this.name = name;
      this.type = type;
      this.match = match;

    };

    var Definition = function Definition() {

      this.patterns = [];

    };

    $scope.files = FileService.files();

    $scope.definitions = {};

    $scope.definitions['test1'] = new Definition();

    $scope.definitions['test1'].patterns.push(new Pattern('Lines', 'count', 'Line'));
    $scope.definitions['test1'].patterns.push(new Pattern('Objects', 'count', 'Object'));

    $scope.definitions['Java GC'] = new Definition();
    $scope.definitions['Java GC'].patterns.push(new Pattern('Java GC', 'count', '(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}\\+\\d{4})'));

    $scope.results = {
      timeseries: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        series: ['Series A', 'Series B'],
        data: [
          [65, 59, 80, 81, 56, 55, 40],
          [28, 48, 40, 19, 86, 27, 90]
        ]
      }
    };

    var buildResultLabels = function(callback) {

      $log.debug('Building labels...');
      $log.debug($scope.results);

      angular.forEach(Object.keys($scope.definitions), function(definition) {

        $log.debug('Building ' + definition);
        $log.debug(definition);

        $scope.results[definition] = {
          count: {
            series: [],
            labels: [],
            hits: []
          }
        };

        angular.forEach($scope.definitions[definition].patterns, function(pattern) {

          $log.debug('Pattern:');
          $log.debug(pattern);
          if(pattern.type === 'count') {

            $scope.results[definition].count.labels.push(pattern.name);

          }

        });

        $log.debug('Now:');
        $log.debug($scope.results);

      });

      $log.debug('Results after adding labels:');
      $log.debug($scope.results);

      callback();

    };

    var processFiles = function(callback) {

      $log.debug('Processing files...');

      angular.forEach($scope.files, function (file, fileKey) {

        $log.debug('Processing file ');
        $log.debug(file);

        $scope.results[file.definition].count.series.push(file.title);

        angular.forEach($scope.definitions[file.definition].patterns, function (pattern) {

          $log.debug(pattern);

          var regex = new RegExp(pattern.match, 'g');

          if (pattern.type == 'count') {

            $log.debug('counting...');

            var matches = file.content.match(regex);
            var matchCount = 0;

            if(matches) {
              matchCount = matches.length;
            }

            var hitKey = fileKey;

            if((hitKey > 0) && (!$scope.results[file.definition].count.hits[0])) {
              hitKey = 0;
            }

            if (!$scope.results[file.definition].count.hits[hitKey]) {
              $scope.results[file.definition].count.hits[hitKey] = [];
            }

            $scope.results[file.definition].count.hits[hitKey].push(matchCount);

          }

          $log.debug(file);

        })

      });

      callback();

    };


    buildResultLabels(function() {

      processFiles(function() {

        $log.debug('Finished processing...');
        $log.debug($scope.results);

      });

    });

    //$scope.uploadFiles = [];

    /*
    $scope.$watch('uploadFiles', function () {
      $log.debug('Found a file upload!');
      $scope.upload($scope.uploadFiles);
    });

    $scope.upload = function (files) {
      $log.debug('upload function started');

      if (files && files.length) {
        for (var i = 0; i < files.length; i++) {
          var file = files[i];
          Upload.upload({
            url: '/#/',
            fields: {'username': $scope.username},
            file: file
          }).progress(function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
          }).success(function (data, status, headers, config) {
            console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
          });
        }
      }
    };
    */

    $scope.uploader = new FileUploader({
      url: '/api/files/upload'
    });

    $scope.awesomeThings = [];

    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      socket.syncUpdates('thing', $scope.awesomeThings);
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('thing');
    });

  }]);
