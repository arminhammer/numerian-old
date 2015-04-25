'use strict';

angular.module('numerian')
  .controller('MainCtrl', ['$scope', '$log', function ($scope, $log) {

    $scope.awesomeThings = [
      {
        'title': 'AngularJS',
        'url': 'https://angularjs.org/',
        'description': 'HTML enhanced for web apps!',
        'logo': 'angular.png'
      },
      {
        'title': 'BrowserSync',
        'url': 'http://browsersync.io/',
        'description': 'Time-saving synchronised browser testing.',
        'logo': 'browsersync.png'
      },
      {
        'title': 'GulpJS',
        'url': 'http://gulpjs.com/',
        'description': 'The streaming build system.',
        'logo': 'gulp.png'
      },
      {
        'title': 'Jasmine',
        'url': 'http://jasmine.github.io/',
        'description': 'Behavior-Driven JavaScript.',
        'logo': 'jasmine.png'
      },
      {
        'title': 'Karma',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'karma.png'
      },
      {
        'title': 'Protractor',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'protractor.png'
      },
      {
        'title': 'Bootstrap',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'bootstrap.png'
      },
      {
        'title': 'Angular UI Bootstrap',
        'url': 'http://angular-ui.github.io/bootstrap/',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'logo': 'ui-bootstrap.png'
      }
    ];

    $scope.files = [{
      title: 'Log 1',
      content: 'Line 1\n' +
      'Line 2 \n' +
      'Line 3\n',
      definition: 'test1',
      result: ''
    }];

    $scope.definition = {
      test1: {
        patterns: {
          lineCount: {
            name: 'Lines',
            type: 'count',
            match: 'Line'
          }
        }
      }
    };

    angular.forEach($scope.files, function(file) {

      var def = $scope.definition[file.definition];

      angular.forEach(def.patterns, function(pattern) {

        var regex = new RegExp(pattern.match, 'g');

        file.result[pattern] = file.content.match(regex);

        console.log(file);
      })

    });

    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });

  }]);
