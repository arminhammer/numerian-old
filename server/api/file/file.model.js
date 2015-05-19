'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Definition = require('../definition/definition.model');

var FileSchema = new Schema({
  title: String,
  content: String,
  definitions: [{ type: String, ref: 'Definition' }]
});

module.exports = mongoose.model('File', FileSchema);
