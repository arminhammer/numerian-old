/**
 * Created by arminhammer on 5/19/15.
 */
'use strict';

angular.module('numerianApp')
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
