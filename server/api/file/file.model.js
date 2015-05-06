'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var FileSchema = new Schema({
  title: String,
  content: String,
  definition: String
});

module.exports = mongoose.model('File', FileSchema);
