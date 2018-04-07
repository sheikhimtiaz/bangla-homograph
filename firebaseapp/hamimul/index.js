var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
    messagingSenderId: "<SENDER_ID>",
  };
  firebase.initializeApp(config);

  // Initialize the default app
firebase.initializeApp(defaultAppConfig);

// Initialize another app with a different config
var otherApp = firebase.initializeApp(otherAppConfig, "other");

console.log(firebase.app().name);  // "[DEFAULT]"
console.log(otherApp.name);        // "other"

// Use the shorthand notation to retrieve the default app's services
var defaultStorage = firebase.storage();
var defaultDatabase = firebase.database();

// Use the otherApp variable to retrieve the other app's services
var otherStorage = otherApp.storage();
var otherDatabase = otherApp.database();
