const cote = require('cote')

const pingResponder = new cote.Responder({
  name: 'ping responder',
  namespace: 'ping',
  respondsTo: ['ping']
})

pingResponder.on('ping', (request, callback) => {
  console.log('> Received "ping", Respond "pong"...')
  callback('pong')
})
