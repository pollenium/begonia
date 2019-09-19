const SignalingServer = require('pollenium-client/node/classes/SignalingServer').SignalingServer
new SignalingServer(process.env.PORT || 5000)
