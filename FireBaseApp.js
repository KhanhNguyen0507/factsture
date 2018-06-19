
var firebase = require("firebase-admin");

var config = {
  apiKey: "AIzaSyCEezmcvfLsnDqU2irtdLbdcFIqo_FOwQo",
  authDomain: "truefacts-d8593.firebaseapp.com",
  databaseURL: "https://truefacts-d8593.firebaseio.com",
  projectId: "truefacts-d8593",
  storageBucket: "truefacts-d8593.appspot.com",
  messagingSenderId: "465520681587"
};
firebase.initializeApp(config);

var db = null;

FireBaseApp = function(){
  this.db = firebase.database();
  console.log("FireBaseApp init DONE");
};

FireBaseApp.prototype.addData = function(twitters) {
  console.log("FireBaseApp addData DONE");
  // console.log(twitters);
  var ref = this.db.ref("textsentiment-service/sentiment/TWITTER");
  var list = [];

  var usersRef = ref.child("neutral");

  twitters.forEach(function(twitter){
    var postData = twitter.postData;
    console.log("text:" + postData.text);
    list.push(postData);
  })
  console.log("Done 1");
  usersRef.push();
  usersRef.set(list);
  console.log("Done 2");
};

// FireBaseApp.prototype.addData = function(twitter) {
//   // A post entry.
//   var postData = {
//     createdAt: twitter.createdAt,
//     text: twitter.text,
//     id: twitter.id
//   };

//   // Get a key for a new Post.
//   var ref = this.db.ref("textsentiment-service/sentiment/TWITTER");
//   var usersRef = ref.child("neutral");
//   var newPostKey = usersRef.push().key;

//   // Write the new post's data simultaneously in the posts list and the user's post list.
//   var updates = {};
//   updates['/posts/' + newPostKey] = postData;
//   updates['/user-posts/' + twitter.id + '/' + newPostKey] = postData;

//   return firebase.database().ref().update(updates);
// }

module.exports = FireBaseApp;
