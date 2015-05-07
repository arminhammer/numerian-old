/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var File = require('../api/file/file.model');
var User = require('../api/user/user.model');
var Definition = require('../api/definition/definition.model');

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
          pattern: 'Line'
        },
        {
          name: 'Object',
          defType: 'count',
          pattern: 'Object'
        }
      ]
    },
    {
      name: 'Java GC',
      patterns: [
        {
          name: 'Java GC',
          defType: 'count',
          pattern: '(\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}\\+\\d{4})'
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
