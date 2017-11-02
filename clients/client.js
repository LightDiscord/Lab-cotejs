const cote = require('cote')

const timeRequester = new cote.Requester({
  name: 'client time requester',
  namespace: 'time'
})

const pingRequester = new cote.Requester({
  name: 'client ping requester',
  namespace: 'ping'
})

setInterval(() => {
  console.log('> Sending time...')
  timeRequester.send({type: 'time'}, (time) => console.log('> Receive time : %s', time))
  console.log('> Sending ping...')
  pingRequester.send({type: 'ping'}, (ping) => console.log('> Receive ping : %s', ping))
}, 2000)
