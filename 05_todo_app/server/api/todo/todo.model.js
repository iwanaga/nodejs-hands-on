'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TodoSchema = new Schema({
  task: String,
  done: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
