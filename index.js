const SignalingServer = require('pollenium-client/node/classes/SingalingServer')

const SignalingServer = require('./node/classes/SignalingServer').SignalingServer
new SignalingServer(process.env.PORT)
