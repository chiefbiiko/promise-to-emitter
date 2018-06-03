var { EventEmitter } = require('events')

function toEventEmitter (p) {
  var ee = new EventEmitter()
  p.then(ee.emit.bind(ee, 'resolved')).catch(ee.emit.bind(ee, 'rejected'))
  return ee
}

module.exports = toEventEmitter
