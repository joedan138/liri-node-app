// allows me to pull from env file
require("dotenv").config();

// twitter variables
var twitterKey = process.env.TWITTER_CONSUMER_KEY;
var twitterSecret = process.env.TWITTER_CONSUMER_SECRET;
var twitterTokenKey = process.env.TWITTER_ACCESS_TOKEN_KEY;
var twitterTokenSecret = process.env.TWITTER_ACCESS_TOKEN_SECRET;
// spotify variables
var spotifyId = process.env.SPOTIFY_ID;
var spotifySecret = process.env.SPOTIFY_SECRET;

// twitter call through twitter NPM
function twitterCall() {

    const Twitter = require('twitter');

    var client = new Twitter({
        consumer_key: twitterKey,
        consumer_secret: twitterSecret,
        access_token_key: twitterTokenKey,
        access_token_secret: twitterTokenSecret
    });

    var params = {
        user_id: '@call_E_flower',
        count: 20
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log("Total Number of tweets: " + tweets.length);
            console.log("*******************************************************")
            for (let i = 0; i < tweets.length; i++) {
                console.log("Tweet Number " + [i + 1]);
                console.log(tweets[i].text)
                console.log("*******************************************************")
            }
        }
    })
};

// spotify function
function spotifyCall() {
    var songTitle = process.argv[3];
    const Spotify = require('node-spotify-api');

    var spotify = new Spotify({
        id: spotifyId,
        secret: spotifySecret
    });

    spotify.search({ type: 'track', query: songTitle, limit: 1 }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        // artist name
        console.log("");
        console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
        console.log("");
        // Song Title
        console.log("Song Title: " + data.tracks.items[0].name);
        console.log("");
        // Spotify Link
        console.log("Spotify Link: " + data.tracks.items[0].artists[0].external_urls.spotify);
        console.log("");
        // Album Name
        console.log("Album Name: " + data.tracks.items[0].album.name);
        console.log("");
    });
}

// OMDB Function
function omdbCall() {
    const request = require('request');
    var movieTitle = process.argv[3];

    request('http://www.omdbapi.com/?apikey=8ed9a449&t=' + movieTitle, function (error, response, body) {
        body = JSON.parse(body);
        //   Movie Title
        console.log("");
        console.log("Film Title: " + body.Title);
        console.log("");
        // Year
        console.log("Year Released: " + body.Year);
        console.log("");
        // IMDB Rating
        console.log("IMDB Rating: " + body.Ratings[0].Value);
        console.log("");
        // Rotten Tomatoes Rating
        console.log("Rotten Tomatoes Rating: " + body.Ratings[1].Value);
        console.log("");
        // Country that produced the movie
        console.log("Country that produced the movie: " + body.Country);
        console.log("");
        // Language
        console.log("Language: " + body.Language);
        console.log("");
        // Plot
        console.log("Plot: " + body.Plot);
        console.log("");
        // Actors
        console.log("Actors and Actresses: " + body.Actors);
        console.log("");
    });
}

// Do what it says function
function doWhatItSays() {

    const fs = require('fs');
    var filename = "random.txt"
    var cmlInput = "";
    // console.log(113);

    function fileReader() {
        fs.readFile("./random.txt", 'utf8', function (err, data) {
            // if (err) throw err;
            cmlInput = data
            console.log(120 + cmlInput);
            console.log(121 + data);
        });
    }
    fileReader();
    console.log(126);
    console.log(127 + cmlInput);
    theHandler(cmlInput);
}


// cml input
var cmlInput = process.argv[2];

function theHandler(dataInput) {
    dataInput ? null : dataInput = cmlInput;
    console.log(136 + dataInput);

    // functions called by cml
    if (dataInput === "my-tweets") {
        twitterCall();
        return
    }
    else if (dataInput === "spotify-this-song") {
        spotifyCall();
        return
    }
    else if (dataInput === "movie-this") {
        omdbCall();
        return
    }
    else if (dataInput === "do-what-it-says") {
        doWhatItSays();
        return
    }
    else
        console.log("");
    console.log("Code not valid. Valid commands are: ");
    // console.log("");
    // console.log("my-tweets");
    // console.log("spotify-this-song <song title>");
    // console.log("movie-this <movie title>");
    // console.log("do-what-it-says");
}

theHandler();

