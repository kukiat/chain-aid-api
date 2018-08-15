const firebase = require('firebase')

var config = {
  apiKey: "AIzaSyBAkhyFzOYAYkNxb9UITrpWepfvabB-GKw",
  authDomain: "chain-aid.firebaseapp.com",
  databaseURL: "https://chain-aid.firebaseio.com",
  projectId: "chain-aid",
  storageBucket: "chain-aid.appspot.com",
  messagingSenderId: "319310076620"
};
firebase.initializeApp(config);

module.exports = firebase