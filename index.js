var EventEmitter = require('events').EventEmitter

function promiseToEmitter (promise) {
  var emitter = new EventEmitter()
  promise
    .then(emitter.emit.bind(emitter, 'resolved'))
    .catch(emitter.emit.bind(emitter, 'rejected'))
  return emitter
}

module.exports = promiseToEmitter
