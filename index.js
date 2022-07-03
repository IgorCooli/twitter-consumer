const express = require('express')
const app = express()
const TweetController = require('./controller/tweetController')

let controller = new TweetController()

app.get('/run', function (req, res) {
    res.send('Starting stream!')
    controller.runStream()
})

app.listen(process.env.PORT || 3000)