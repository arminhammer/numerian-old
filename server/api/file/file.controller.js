'use strict';

var _ = require('lodash');
var File = require('./file.model');
var fs = require('fs');

// Get list of files
exports.index = function(req, res) {
  File.find(function (err, files) {
    if(err) { return handleError(res, err); }
    return res.json(200, files);
  });
};

// Get a single file
exports.show = function(req, res) {
  File.findById(req.params.id, function (err, file) {
    if(err) { return handleError(res, err); }
    if(!file) { return res.send(404); }
    return res.json(file);
  });
};

// Creates a new file in the DB.
exports.create = function(req, res) {
  File.create(req.body, function(err, file) {
    if(err) { return handleError(res, err); }
    return res.json(201, file);
  });
};

// Updates an existing file in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  File.findById(req.params.id, function (err, file) {
    if (err) { return handleError(res, err); }
    if(!file) { return res.send(404); }
    var updated = _.merge(file, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, file);
    });
  });
};

// Deletes a file from the DB.
exports.destroy = function(req, res) {
  File.findById(req.params.id, function (err, file) {
    if(err) { return handleError(res, err); }
    if(!file) { return res.send(404); }
    file.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

// Creates a new file in the DB.
exports.upload = function(req, res) {
  console.log('Upload file...');

  console.log(req.body);
  console.log(req.params);
  console.log(req.data);
  console.log(req.files.file);

  fs.readFile(req.files.file.path, function(err, fileData) {

    if(err) throw err;

    File.create({
      title: req.files.file.name,
      content: fileData,
      definition: 'test1'
    }, function(err, file) {
      if(err) { return handleError(res, err); }
      return res.json(201, file);
    });

  });


};

function handleError(res, err) {
  return res.send(500, err);
}
