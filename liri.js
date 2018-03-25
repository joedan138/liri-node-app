// allows me to pull from env file
require("dotenv").config();

// twitter variables
var twitterKey = process.env.TWITTER_CONSUMER_KEY;
var twitterSecret = process.env.TWITTER_CONSUMER_SECRET;
var twitterTokenKey = process.env.TWITTER_ACCESS_TOKEN_KEY;
var twitterTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
var spotifyId = process.env.SPOTIFY_ID;
var spotifySecret = process.env.SPOTIFY_SECRET;

// twitter call through twitter NPM
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key:twitterKey,
    consumer_secret: twitterSecret,
    access_token_key: twitterTokenKey,
    access_token_secret: twitterTokenSecret
});

var params = {
    user_id: '@call_E_flower',
    count: 20
};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log("Total Number of tweets: " + tweets.length);
      console.log("*******************************************************")  
      for (let i = 0; i < tweets.length; i++) {
          console.log("Tweet Number " + [i+1]);
          console.log(tweets[i].text)
          console.log("*******************************************************")
      }
    }
  });


// var request = require('request');

// var options = {
//     url: 'https://api.twitter.com/1.1/search/tweets.json?q=%40call_E_flower',
//     }
// };

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         var info = JSON.parse(body);
//         console.log(info + "Movie Time");
//     }
// }

// request(options, callback);


