module.exports = class Tweet{
    constructor(createdAt, tweetId, text, source, userId, userName, userLocation, coordinates, userUrl
        , userFollowersCounts, userFavouritesCount, userStatusesCount, userCreatedAt
        , replyCount, retweetCount, favoriteCount, hashtags){
            this.createdAt = createdAt;
            this.tweetId = tweetId;
            this.text = text;
            this.source = source;
            this.userId = userId;
            this.userName = userName;
            this.userLocation = userLocation;
            this.coordinates = coordinates;
            this.userUrl = userUrl;
            this.userFollowersCounts = userFollowersCounts;
            this.userFavouritesCount = userFavouritesCount;
            this.userStatusesCount = userStatusesCount;
            this.userCreatedAt = userCreatedAt;
            this.replyCount = replyCount;
            this.retweetCount = retweetCount;
            this.favoriteCount = favoriteCount;
            this.hashtags = hashtags;
    }
}