
// Dependencies =========================
var twit = require('twit');
var config = require('./config');

var Twitter = new twit(config);

var Sentiment = require('./model/Sentiment.js');

var FireBaseApp = require('./FireBaseApp.js');

var fireapp = new FireBaseApp();

// RETWEET BOT ==========================

// find latest tweet according the query 'q' in params
var searchTweet = function() {
    var params = {
        q: '#DIRECTVNOW, #directvnow',  // REQUIRED
        result_type: 'recent',
        count: 100,
        lang: 'en',
        include_entities: false
    }
    Twitter.get('search/tweets', params, function(err, data) {
      // if there no errors
        if (!err) {
            var tweets = [];
            data.statuses.forEach(function (result) {
              // console.log(result);
              var tweet = new Sentiment(result);
              tweets.push(tweet);
          });
          fireapp.addData(tweets);
        }
        // if unable to Search a tweet
        else {
          console.log('Something went wrong while SEARCHING...');
        }
    });
}
// grab & retweet as soon as program is running...
searchTweet();
// searchTweet in every 50 minutes
setInterval(searchTweet, 10000);