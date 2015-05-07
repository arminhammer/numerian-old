/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Definition = require('./definition.model');

exports.register = function(socket) {
  Definition.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Definition.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('definition:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('definition:remove', doc);
}