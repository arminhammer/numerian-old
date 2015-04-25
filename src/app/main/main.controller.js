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

    $scope.files = [
      {
        title: 'Log 1',
        content: 'Line 1 Object\n' +
        'Line 2 Object\n' +
        'Line 3\n',
        definition: 'test1',
        results: {
          count: {
            hits: [[]],
            series: [],
            labels: []
          }
        }
      },
      {
        title: 'Log 2',
        content: 'Line 4 Object\n' +
        'Line 5 \n' +
        'Line 6 Object\n' +
        'Line 7 Object\n',
        definition: 'test1',
        results: {
          count: {
            hits: [[]],
            series: [],
            labels: []
          }
        }
      },
      {
        title: 'WebStorm GC Log',
        content:'Java HotSpot(TM) 64-Bit Server VM (25.45-b02) for bsd-amd64 JRE (1.8.0_45-b14), ' +
        'built on Apr 10 2015 10:46:38 by "java_re" with gcc 4.2.1 (Based on Apple Inc. build 5658) ' +
        '(LLVM build 2336.11.00)' +
        'Memory: 4k page, physical 8388608k(1157568k free) ' +
        '' +
        '/proc/meminfo:' +
        'CommandLine flags: -XX:-BytecodeVerificationLocal -XX:-BytecodeVerificationRemote ' +
        '-XX:InitialHeapSize=134217728 -XX:MaxHeapSize=786432000 -XX:MaxNewSize=262144000 -XX:MaxTenuringThreshold=6 ' +
        '-XX:OldPLABSize=16 -XX:+PrintGC -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+PrintGCTimeStamps ' +
        '-XX:ReservedCodeCacheSize=235929600 -XX:SoftRefLRUPolicyMSPerMB=50 -XX:+UseCompressedClassPointers ' +
        '-XX:+UseCompressedOops -XX:+UseConcMarkSweepGC -XX:+UseParNewGC2015-04-25T11:55:44.643+0500: 0.470: ' +
        '[GC (Allocation Failure) 0.470: [ParNew: 34944K->3461K(39296K), 0.0061662 secs] 34944K->3461K(126720K), ' +
        '0.0062744 secs] [Times: user=0.02 sys=0.00, real=0.01 secs]' +
        '2015-04-25T11:55:45.098+0500: 0.925: [GC (Allocation Failure) 0.925: [ParNew: 38405K->3614K(39296K), ' +
        '0.0170937 secs] 38405K->5824K(126720K), 0.0171571 secs] [Times: user=0.05 sys=0.00, real=0.02 secs]' +
        '2015-04-25T11:55:46.795+0500: 2.622: [GC (Allocation Failure) 2.622: [ParNew: 38558K->4352K(39296K), 0.0164762 secs] 40768K->12987K(126720K), 0.0165246 secs] [Times: user=0.04 sys=0.00, real=0.02 secs]' +
        '2015-04-25T11:55:47.863+0500: 3.690: [GC (Allocation Failure) 3.690: [ParNew: 39296K->4352K(39296K), 0.0159205 secs] 47931K->17691K(126720K), 0.0159799 secs] [Times: user=0.05 sys=0.00, real=0.01 secs]' +
        '2015-04-25T11:55:48.443+0500: 4.270: [GC (Allocation Failure) 4.270: [ParNew: 39296K->4352K(39296K), 0.0137326 secs] 52635K->22928K(126720K), 0.0137810 secs] [Times: user=0.04 sys=0.01, real=0.01 secs]' +
        '2015-04-25T11:55:48.457+0500: 4.284: [GC (CMS Initial Mark) [1 CMS-initial-mark: 18576K(87424K)] 22944K(126720K), 0.0010841 secs] [Times: user=0.00 sys=0.00, real=0.00 secs]' +
        '2015-04-25T11:55:48.458+0500: 4.285: [CMS-concurrent-mark-start]' +
        '2015-04-25T11:55:48.487+0500: 4.314: [CMS-concurrent-mark: 0.026/0.029 secs] [Times: user=0.09 sys=0.01, real=0.03 secs]' +
        '2015-04-25T11:55:48.488+0500: 4.314: [CMS-concurrent-preclean-start]' +
        '2015-04-25T11:55:48.488+0500: 4.315: [CMS-concurrent-preclean: 0.001/0.001 secs] [Times: user=0.00 sys=0.00, real=0.00 secs]' +
        '2015-04-25T11:55:48.489+0500: 4.316: [GC (CMS Final Remark) [YG occupancy: 5334 K (39296 K)]4.316: [Rescan (parallel) , 0.0016344 secs]4.318: [weak refs processing, 0.0000438 secs]4.318: [class unloading, 0.0042891 secs]4.322: [scrub symbol table, 0.0025579 secs]4.325: [scrub string table, 0.0002900 secs][1 CMS-remark: 18576K(87424K)] 23911K(126720K), 0.0096116 secs] [Times: user=0.02 sys=0.00, real=0.01 secs]' +
        '2015-04-25T11:55:48.499+0500: 4.326: [CMS-concurrent-sweep-start]' +
        '2015-04-25T11:55:48.507+0500: 4.334: [CMS-concurrent-sweep: 0.008/0.008 secs] [Times: user=0.02 sys=0.00, real=0.01 secs]' +
        '2015-04-25T11:55:48.507+0500: 4.334: [CMS-concurrent-reset-start]' +
        '2015-04-25T11:55:48.508+0500: 4.335: [CMS-concurrent-reset: 0.001/0.001 secs] [Times: user=0.00 sys=0.00, real=0.00 secs]' +
        '2015-04-25T11:55:49.204+0500: 5.031: [GC (Allocation Failure) 5.031: [ParNew: 39296K->4352K(39296K), 0.0069660 secs] 51638K->20000K(126720K), 0.0070254 secs] [Times: user=0.02 sys=0.00, real=0.01 secs]' +
        '2015-04-25T11:55:50.005+0500: 5.832: [GC (Allocation Failure) 5.832: [ParNew: 39296K->4352K(39296K), 0.0196901 secs] 54944K->28819K(126720K), 0.0197474 secs] [Times: user=0.06 sys=0.00, real=0.02 secs]',
        definition: 'Java GC',
        results: {
          count: {
            hits: [[]],
            series: [],
            labels: []
          }
        }
      }
    ];

    $scope.definition = {
      test1: {
        patterns: [
          {
            name: 'Lines',
            type: 'count',
            match: 'Line'
          },
          {
            name: 'Objects',
            type: 'count',
            match: 'Object'
          }
        ]
      },
      'Java GC': {
        patterns: [
          {
            name: 'Java GC',
            type: 'count',
            match: '(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}\\+\\d{4})'
          }
        ]
      }
    };

    angular.forEach($scope.files, function(file) {

      var def = $scope.definition[file.definition];

      angular.forEach(def.patterns, function(pattern) {

        $log.debug(pattern);

        var regex = new RegExp(pattern.match, 'g');

        if(pattern.type == 'count') {

          $log.debug('counting...');
          $log.debug(file.results.count);

          var matches = file.content.match(regex);
          $log.debug(matches);
          $log.debug(matches.length);
          var matchCount = matches.length;

          file.results.count.series.push(pattern.name);
          file.results.count.labels.push(pattern.name);
          file.results.count.hits[0].push(matchCount);
          /*{
            name: pattern.name,
            match: file.content.match(regex)
          };*/
          $log.debug('Now:');
          $log.debug(file.results.count);

        }

        $log.debug(file);

      })

    });

    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });

  }]);
