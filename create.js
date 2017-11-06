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

const dbRef = firebase.database().ref('users')

// New data to be pushed
dbRef.push({
    name: "Rajbir",
    age: 27,
    email : "raj@gmail.com"
  });

console.log("Data added successfully")
console.log("Fetching data from database...")

setTimeout(function() { showData(); }, 5000)


function showData(){
		const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
		const xmlHttp = new XMLHttpRequest()
    	xmlHttp.open( "GET", 'https://crud-api-8982b.firebaseio.com/users.json', false )
    	xmlHttp.send( null )
    	console.log("Output:")
    	console.log(xmlHttp.responseText)
}
