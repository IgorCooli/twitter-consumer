const TweetService = require('../service/tweetService')
const TweetFactory = require('../factory/tweetFactory')
const TweetDao = require('../dao/tweetDao')
const fs = require('fs')

// 10 minutes
const TIMER = process.env.TIMER || 10000 ;//* 60 * 10;

let service = new TweetService()
let dao = new TweetDao()
let tweetFactory = new TweetFactory()

module.exports = class TweerController {
    constructor() {

    }

    addToList(list, tweet) {
        list.push(this.stringfyTweet(tweetFactory.create(tweet)))
    }

    runStream() {
        let list = []
        let stream = service.streamCovid()
        stream.on('tweet', (tweet) => {
            //TODO Retirar salvamento em arquivo.
            fs.writeFileSync('./data/raw.json', JSON.stringify(tweet))
            console.log("(TweetService) -> Tweet found!");
            this.addToList(list, tweet)
        })
        this.stopStreamAndSave(stream, list)
    }

    stopStreamAndSave(stream, list) {
        setTimeout(function () {
            stream.stop()
            dao.saveData(list)
        }, TIMER)
    }

    stringfyTweet(tweet) {
        return JSON.stringify(tweet);
    }
}