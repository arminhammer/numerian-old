/**
 * Created by arminhammer on 5/19/15.
 */
'use strict';

angular.module('numerianApp')
  .filter('fileFilter', ['$log', function($log) {
    return function(input, definitions) {

      $log.debug('Filter Log');
      $log.debug(input);

      //$log.debug('part:');
      //$log.debug(part);

      var output = {};

      output.title = 'Filtered ' + input.title;
      output.testVal = 500;
      output.currentFilter = definitions[0];
      output.content = input.content;

      output.result = {
        count: {
          labels: [],
          series: [],
          data: []
        },
        timeseries: {
          labels: [],
          series: [],
          data: [[]]
        }
      };

      $log.debug('Definitions within filter:');

      var patternKey = 0;

      angular.forEach(input.definitions, function(definition) {

        $log.debug(definition);

        $log.debug('Patterns:');
        angular.forEach(definitions[definition].patterns, function(pattern) {

          $log.debug(pattern);

          if(pattern.defType === 'count') {

            $log.debug('Pattern is a count');

            var regex = new RegExp(pattern.pattern, 'g');

            var matches = output.content.match(regex);
            var matchCount = 0;

            if(matches) {
              matchCount = matches.length;

              output.content = output.content.replace(regex, '<span class="matchText">' + '$&' + '</span>');
              $log.debug('Replaced!');
            }

            //var hitKey = patternKey;

            /*
            if((hitKey > 0) && (!$scope.results[file.definition].count.hits[0])) {
              hitKey = 0;
            }

            if (!$scope.results[file.definition].count.hits[hitKey]) {
              $scope.results[file.definition].count.hits[hitKey] = [];
            }

            $scope.results[file.definition].count.hits[hitKey].push(matchCount);
            */

            var dataArray = [];
            for(var i = 0; i < patternKey; i++) {
              dataArray.push(null);
            }
            dataArray.push(5);

            $log.debug('dataArray');
            $log.debug(dataArray);

            output.result.count.labels.push(pattern.name);
            output.result.count.series.push(pattern.name);

            $log.debug('key: ' + patternKey);

            if(patternKey == 0) {
              output.result.count.data.push([matchCount]);
            }
            else {
              output.result.count.data[0].push(matchCount);
            }

            //output.result.count.data = [
              //[1,2,3]
            //]
          }

          if (pattern.defType == 'count') {

            $log.debug('counting...');

          }

          patternKey++;

        });

      });

      $log.debug('Result:');
      $log.debug(output.result);

      /*
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
      */

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
