/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var File = require('../api/file/file.model');
var User = require('../api/user/user.model');
var Definition = require('../api/definition/definition.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

File.find({}).remove(function() {
  File.create(
    {
      title: 'Log 1',
      content: 'Line 1 Object\n' +
      'Line 2 Object\n' +
      'Line 3\n',
      definition: 'test1'
    },
    {
      title: 'Log 2',
      content: 'Line 4 Object\n' +
      'Line 5 \n' +
      'Line 6 Object\n' +
      'Line 7 Object\n',
      definition: 'test1'
    });
});

Definition.find({}).remove(function() {
  Definition.create(
    {
      name: 'test1',
      patterns: [
        {
          name: 'Lines',
          defType: 'count',
          match: 'Line'
        },
        {
          name: 'Object',
          defType: 'count',
          match: 'Object'
        }
      ]
    },
    {
      name: 'Java GC',
      patterns: [
        {
          name: 'Java GC',
          defType: 'count',
          match: '(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}\\+\\d{4})'
        }
      ]
    })
});

User.find({}).remove(function() {
  User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function() {
      console.log('finished populating users');
    }
  );
});
