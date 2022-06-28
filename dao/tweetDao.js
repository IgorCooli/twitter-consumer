const redis = require("redis");
const fs = require('fs')

module.exports = class TweetDao{
    saveData(list){
        let  publisher = redis.createClient(redisConfig());
        console.log(`(TweetDao) -> Saving Redis: ${list.length} tweets`)
        list.forEach((tweet)=>{
            publisher.RPUSH("tweet-channel", tweet);
        })
        publisher.quit();
    }
}

let redisConfig = ()=> {
    return {
        url: `${process.env.REDIS_BASE_URL}:${process.env.REDIS_PORT}`,
        password: process.env.REDIS_PASS
    }
}