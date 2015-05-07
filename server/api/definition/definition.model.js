'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var DefinitionSchema = new Schema({

  name: String,
  patterns: [{
    name: String,
    defType: String,
    match: String
  }]

});

module.exports = mongoose.model('Definition', DefinitionSchema);
