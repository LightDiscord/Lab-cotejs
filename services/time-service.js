const cote = require('cote')

const timeResponder = new cote.Responder({
  name: 'time responder',
  namespace: 'time',
  respondsTo: ['time']
})

timeResponder.on('time', (request, callback) => {
  console.log('> Received "time", Respond "Date.now()"...')
  callback(Date.now())
})
