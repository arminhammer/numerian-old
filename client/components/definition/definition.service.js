/* global io */
'use strict';

angular.module('numerianApp')
  .factory('DefinitionService', ['$http', 'socket', function($http) {


    /*
    var Pattern = function Pattern(name, type, match) {

      this.name = name;
      this.type = type;
      this.match = match;

    };

    var Definition = function Definition() {

      this.patterns = [];

    };
    */

    var definitions = [];

    /*
    definitions['test1'] = new Definition();

    definitions['test1'].patterns.push(new Pattern('Lines', 'count', 'Line'));
    definitions['test1'].patterns.push(new Pattern('Objects', 'count', 'Object'));

    definitions['Java GC'] = new Definition();
    definitions['Java GC'].patterns.push(new Pattern('Java GC', 'count', '(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}\\+\\d{4})'));
    */

    /*
    var File = function File(title, content, definition) {

      this.title = title;
      this.content = content;
      this.definition = definition;

    };
    */

    return {

      /*
      getDefinitions: function() {
        //Replace with defs
        var promise = $http.get('/api/files').success(function(getFiles) {
          files = getFiles;
          socket.syncUpdates('file', files);
          console.log('Got files...');
          console.log(getFiles);
        });

        return promise;

      }
      */
      getDefinitions: function() {

        var promise = $http.get('/api/definitions').success(function(getDefs) {

          definitions = getDefs;

          console.log('Got files...');
          console.log(getDefs);

        });

        return promise;

      }

    };

    /*
    // socket.io now auto-configures its connection when we ommit a connection url
    var ioSocket = io('', {
      // Send auth token on connection, you will need to DI the Auth service above
      // 'query': 'token=' + Auth.getToken()
      path: '/socket.io-client'
    });

    var socket = socketFactory({
      ioSocket: ioSocket
    });

    return {
      socket: socket,
     */

    /**
       * Register listeners to sync an array with updates on a model
       *
       * Takes the array we want to sync, the model name that socket updates are sent from,
       * and an optional callback function after new items are updated.
       *
       * @param {String} modelName
       * @param {Array} array
       * @param {Function} cb
       */

    /*
    syncUpdates: function (modelName, array, cb) {
        cb = cb || angular.noop;
  */
        /**
         * Syncs item creation/updates on 'model:save'
         */
    /*
        socket.on(modelName + ':save', function (item) {
          var oldItem = _.find(array, {_id: item._id});
          var index = array.indexOf(oldItem);
          var event = 'created';

          // replace oldItem if it exists
          // otherwise just add item to the collection
          if (oldItem) {
            array.splice(index, 1, item);
            event = 'updated';
          } else {
            array.push(item);
          }

          cb(event, item, array);
        });
*/
        /**
         * Syncs removed items on 'model:remove'
         */

        /*
        socket.on(modelName + ':remove', function (item) {
          var event = 'deleted';
          _.remove(array, {_id: item._id});
          cb(event, item, array);
        });
      },
      */

      /**
       * Removes listeners for a models updates on the socket
       *
       * @param modelName
       */

    /*
    unsyncUpdates: function (modelName) {
        socket.removeAllListeners(modelName + ':save');
        socket.removeAllListeners(modelName + ':remove');
      }
    };
*/
  }]);
