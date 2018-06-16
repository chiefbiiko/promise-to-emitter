var EventEmitter = require('events').EventEmitter

function promiseToEmitter (promise, eventName, errorName) {
  var emitter = new EventEmitter()
  promise
    .then(emitter.emit.bind(emitter, eventName || 'resolved'))
    .catch(emitter.emit.bind(emitter, errorName || 'rejected'))
  return emitter
}

module.exports = promiseToEmitter
