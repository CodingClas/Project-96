// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCp9UkthKf7jSX4nxcgTnc8BxL-_nFPeXo",
    authDomain: "project-95-c673f.firebaseapp.com",
    databaseURL: "https://project-95-c673f-default-rtdb.firebaseio.com",
    projectId: "project-95-c673f",
    storageBucket: "project-95-c673f.appspot.com",
    messagingSenderId: "124890111441",
    appId: "1:124890111441:web:299bf538380cd8f84714f0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
//End code
 } });  }); }
getData();

function logout() {
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
     window.location = "hello-chat.html";
}

function send(e)
{
 msg = document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
 });

 document.getElementById("msg").value = "";
}