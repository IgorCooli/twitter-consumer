const express = require('express')
const app = express()
const TweetController = require('./controller/tweetController')
const KeepAliveService = require('./service/KeepAliveService')

let controller = new TweetController()
let keepAliveService = new KeepAliveService()

// keepAliveService.keepAlive()

app.get('/run', function (req, res) {
    res.send('Starting stream!')
    controller.runStream()
})

app.listen(process.env.PORT || 3000)