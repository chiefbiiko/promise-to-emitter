var tape = require('tape')
var toEventEmitter = require('./index')

tape('resolving', function (t) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(resolve, 1500, 36)
  })
  var emitter = toEventEmitter(promise)
  emitter.once('resolved', function (num) {
    t.is(num, 36, 'even got args')
    t.end()
  })
})

tape('rejecting', function (t) {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(reject, 1500, Error('fail'))
  })
  var emitter = toEventEmitter(promise)
  emitter.once('rejected', function (err) {
    t.is(err.constructor, Error, 'got the error')
    t.end()
  })
})
