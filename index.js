const SignalingServer = require('pollenium-anemone/node/classes/SignalingServer').SignalingServer
new SignalingServer(process.env.PORT || 5000)

const restartFuzz = 600000 * Math.random()
setTimeout(() => {
  console.log('restart')
  process.exit()
}, 3600000 + restartFuzz)
