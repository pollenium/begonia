const SignalingServer = require('pollenium-anemone/node/classes/SignalingServer').SignalingServer
new SignalingServer(process.env.PORT || 5000)

const restartFuzz = 10000 * Math.random()
setTimeout(() => {
  console.log('restart')
  process.exit()
}, 60000 + restartFuzz)
