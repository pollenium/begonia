const SignalingServer = require('pollenium-anemone/node/classes/SignalingServer').SignalingServer
new SignalingServer(process.env.PORT || 5000, false)
