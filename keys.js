// allows me to pull from env file
require("dotenv").config();

exports.twitter = {
  twitterKey: process.env.TWITTER_CONSUMER_KEY,
  twitterSecret: process.env.TWITTER_CONSUMER_SECRET,
  twitterTokenKey: process.env.TWITTER_ACCESS_TOKEN_KEY,
  twitterTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};

exports.spotify = {
  spotifyId: process.env.SPOTIFY_ID,
  spotifySecret: process.env.SPOTIFY_SECRET
};



