'use strict';

angular.module('numerian')
  .controller('MainCtrl', ['$scope', '$log', function ($scope, $log) {

    var File = function File(title, content, definition) {

      this.title = title;
      this.content = content;
      this.definition = definition;

    };

    var Pattern = function Pattern(name, type, match) {

      this.name = name;
      this.type = type;
      this.match = match;

    };

    var Definition = function Definition() {

      this.patterns = [];

    };

    $scope.files = [];

    $scope.files.push(new File(
      'Log 1',
      'Line 1 Object\n' +
      'Line 2 Object\n' +
      'Line 3\n',
      'test1'
    ));

    $scope.files.push(new File(
      'Log 1',
      'Line 4 Object\n' +
      'Line 5 \n' +
      'Line 6 Object\n' +
      'Line 7 Object\n',
      'test1'));

    $scope.files.push(new File(
      'WebStorm GC Log',
      'Java HotSpot(TM) 64-Bit Server VM (25.45-b02) for bsd-amd64 JRE (1.8.0_45-b14), \n' +
      'built on Apr 10 2015 10:46:38 by "java_re" with gcc 4.2.1 (Based on Apple Inc. build 5658) \n' +
      '(LLVM build 2336.11.00)\n' +
      'Memory: 4k page, physical 8388608k(1157568k free) \n' +
      '\n' +
      '/proc/meminfo:\n' +
      'CommandLine flags: -XX:-BytecodeVerificationLocal -XX:-BytecodeVerificationRemote \n' +
      '-XX:InitialHeapSize=134217728 -XX:MaxHeapSize=786432000 -XX:MaxNewSize=262144000 -XX:MaxTenuringThreshold=6 \n' +
      '-XX:OldPLABSize=16 -XX:+PrintGC -XX:+PrintGCDateStamps -XX:+PrintGCDetails -XX:+PrintGCTimeStamps \n' +
      '-XX:ReservedCodeCacheSize=235929600 -XX:SoftRefLRUPolicyMSPerMB=50 -XX:+UseCompressedClassPointers \n' +
      '-XX:+UseCompressedOops -XX:+UseConcMarkSweepGC -XX:+UseParNewGC2015-04-25T11:55:44.643+0500: 0.470: \n' +
      '[GC (Allocation Failure) 0.470: [ParNew: 34944K->3461K(39296K), 0.0061662 secs] 34944K->3461K(126720K), \n' +
      '0.0062744 secs] [Times: user=0.02 sys=0.00, real=0.01 secs]\n' +
      '2015-04-25T11:55:45.098+0500: 0.925: [GC (Allocation Failure) 0.925: [ParNew: 38405K->3614K(39296K), \n' +
      '0.0170937 secs] 38405K->5824K(126720K), 0.0171571 secs] [Times: user=0.05 sys=0.00, real=0.02 secs]\n' +
      '2015-04-25T11:55:46.795+0500: 2.622: [GC (Allocation Failure) 2.622: [ParNew: 38558K->4352K(39296K), 0.0164762 secs] 40768K->12987K(126720K), 0.0165246 secs] [Times: user=0.04 sys=0.00, real=0.02 secs]\n' +
      '2015-04-25T11:55:47.863+0500: 3.690: [GC (Allocation Failure) 3.690: [ParNew: 39296K->4352K(39296K), 0.0159205 secs] 47931K->17691K(126720K), 0.0159799 secs] [Times: user=0.05 sys=0.00, real=0.01 secs]\n' +
      '2015-04-25T11:55:48.443+0500: 4.270: [GC (Allocation Failure) 4.270: [ParNew: 39296K->4352K(39296K), 0.0137326 secs] 52635K->22928K(126720K), 0.0137810 secs] [Times: user=0.04 sys=0.01, real=0.01 secs]\n' +
      '2015-04-25T11:55:48.457+0500: 4.284: [GC (CMS Initial Mark) [1 CMS-initial-mark: 18576K(87424K)] 22944K(126720K), 0.0010841 secs] [Times: user=0.00 sys=0.00, real=0.00 secs]\n' +
      '2015-04-25T11:55:48.458+0500: 4.285: [CMS-concurrent-mark-start]\n' +
      '2015-04-25T11:55:48.487+0500: 4.314: [CMS-concurrent-mark: 0.026/0.029 secs] [Times: user=0.09 sys=0.01, real=0.03 secs]\n' +
      '2015-04-25T11:55:48.488+0500: 4.314: [CMS-concurrent-preclean-start]\n' +
      '2015-04-25T11:55:48.488+0500: 4.315: [CMS-concurrent-preclean: 0.001/0.001 secs] [Times: user=0.00 sys=0.00, real=0.00 secs]\n' +
      '2015-04-25T11:55:48.489+0500: 4.316: [GC (CMS Final Remark) [YG occupancy: 5334 K (39296 K)]4.316: [Rescan (parallel) , 0.0016344 secs]4.318: [weak refs processing, 0.0000438 secs]4.318: [class unloading, 0.0042891 secs]4.322: [scrub symbol table, 0.0025579 secs]4.325: [scrub string table, 0.0002900 secs][1 CMS-remark: 18576K(87424K)] 23911K(126720K), 0.0096116 secs] [Times: user=0.02 sys=0.00, real=0.01 secs]\n' +
      '2015-04-25T11:55:48.499+0500: 4.326: [CMS-concurrent-sweep-start]\n' +
      '2015-04-25T11:55:48.507+0500: 4.334: [CMS-concurrent-sweep: 0.008/0.008 secs] [Times: user=0.02 sys=0.00, real=0.01 secs]\n' +
      '2015-04-25T11:55:48.507+0500: 4.334: [CMS-concurrent-reset-start]\n' +
      '2015-04-25T11:55:48.508+0500: 4.335: [CMS-concurrent-reset: 0.001/0.001 secs] [Times: user=0.00 sys=0.00, real=0.00 secs]\n' +
      '2015-04-25T11:55:49.204+0500: 5.031: [GC (Allocation Failure) 5.031: [ParNew: 39296K->4352K(39296K), 0.0069660 secs] 51638K->20000K(126720K), 0.0070254 secs] [Times: user=0.02 sys=0.00, real=0.01 secs]\n' +
      '2015-04-25T11:55:50.005+0500: 5.832: [GC (Allocation Failure) 5.832: [ParNew: 39296K->4352K(39296K), 0.0196901 secs] 54944K->28819K(126720K), 0.0197474 secs] [Times: user=0.06 sys=0.00, real=0.02 secs]\n',
      'Java GC'
    ));

    $scope.definitions = {};

    $scope.definitions['test1'] = new Definition();

    $scope.definitions['test1'].patterns.push(new Pattern('Lines', 'count', 'Line'));
    $scope.definitions['test1'].patterns.push(new Pattern('Objects', 'count', 'Object'));

    $scope.definitions['Java GC'] = new Definition();
    $scope.definitions['Java GC'].patterns.push(new Pattern('Java GC', 'count', '(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}\\+\\d{4})'));

    $scope.results = {};

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

  }]);
