const { text } = require('express')
const TweetModel = require('../model/tweet')

module.exports = class TweetFactory{
    create(tweet) {
        let text = ''
        let userName = ''
        let userLocation = ''
        if(tweet.extended_tweet != null){
            text = tweet.extended_tweet.full_text
        } else if(tweet.retweeted_status != null && tweet.retweeted_status.extended_tweet != null)  {
            text = tweet.retweeted_status.extended_tweet.full_text
        } else{
            text = tweet.text
        }
        text = textCleaner(text)


        if(tweet.user.name != null){
            userName = textCleaner(tweet.user.name)
        }

        if(tweet.user.location != null){
            userLocation = textCleaner(tweet.user.location)
        }

        return new TweetModel(
            tweet.created_at,
            tweet.id,
            text,
            tweet.source,
            tweet.user.id,
            userName,
            userLocation,
            tweet.coordinates,
            tweet.user.url,
            tweet.user.followers_count,
            tweet.user.favourites_count,
            tweet.user.statuses_count,
            tweet.user.created_at,
            tweet.reply_count,
            tweet.retweet_count,
            tweet.favorite_count, 
            tweet.entities.hashtags
        )
    }
}

let textCleaner = (text) => {
    text = clearRT(text)
    text = clearEmojis(text)
    text = clearLineBreaker(text)
    return text
}

let clearRT = (text) => {
    return text.replace(/RT\s*@\S+/g, '')
}

let clearEmojis = (text) => {
    return text
    .replace(/([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g, '')
    .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '')
}

let clearLineBreaker = (text) => {
    return text.replace(/\n|\r/g, '')
}