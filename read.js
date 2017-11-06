const firebase = require('firebase')

const config = {
    apiKey: "AIzaSyD4l0Hs08-a_JFreItk3ra-Oemzh_LmqcQ",
    authDomain: "crud-api-8982b.firebaseapp.com",
    databaseURL: "https://crud-api-8982b.firebaseio.com",
    projectId: "crud-api-8982b",
    storageBucket: "crud-api-8982b.appspot.com",
    messagingSenderId: "324055221807"
  };


firebase.initializeApp(config)

// Unique key of child which is to be read
const ukey = '-KyHRLOO0YYnYk7uzUWe'

const dbRef = firebase.database().ref('users/' + ukey)

dbRef.once('value').then(function(snapshot) {
  
  // Get all data at child 
  console.log(snapshot.val())

  // You can also get specific data at child such as
  console.log(snapshot.val().name)
  console.log(snapshot.val().age)
  console.log(snapshot.val().email)
});