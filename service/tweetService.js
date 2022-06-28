require('dotenv').config()
const Twit = require('twit')

const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL: true,     // optional - requires SSL certificates to be valid.
})

module.exports = class TweetService {
  streamCovid() {
    return T.stream('statuses/filter', { track: process.env.SEARCH_STRING, language: 'pt', tweet_mode: 'extended'})
    // T.get('geo/reverse_geocode', { lat:'-21.7624', long:'-43.3435', accuracy:30000}, function(err, data, response) {
    //   console.log(JSON.stringify(data))
    // })
  }
}