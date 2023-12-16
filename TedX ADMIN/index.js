// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBk1tNWFkbCLUNE4zdUNAG9XU9vsrCWlxs",
  authDomain: "tedx-kiit-2021.firebaseapp.com",
  databaseURL: "https://tedx-kiit-2021.firebaseio.com",
  projectId: "tedx-kiit-2021",
  storageBucket: "tedx-kiit-2021.appspot.com",
  messagingSenderId: "967356519397",
  appId: "1:967356519397:web:c8d8eef87369ccd6d6d50c",
  measurementId: "G-0DCC8D768J"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 


function login(){
  
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(function(firebaseUser) {
        window.location="./view.html"
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
  
      window.alert("Error : " + errorMessage);
      
      // ...
    });    
  }
  
  function logout(){
    firebase.auth().signOut();
  }

function checkdata()
{
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      var user = firebase.auth().currentUser;
      
      var email_id = "USER :- "+user.email;
        document.getElementById("user_para").innerHTML = email_id;
  
    } else {
      // No user is signed in.
  
      document.getElementById("myTable").style.display = "none";
      window.location="./index.html";
	  	  
  
    }
  });

}

var Ref = firebase.database().ref('registration_data_2021');

Ref.on('value', gotData, errData);

function gotData(data)
{    
    var getuser=data.val();    
    var keys=Object.keys(getuser);
    console.log(keys);

    var table = document.getElementById("myTable");
    for(var i=0;i<keys.length; i++)
    {
  	    var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);
        var cell8 = row.insertCell(7);
        var cell9 = row.insertCell(8);
        var cell10 = row.insertCell(9);
        var cell11 = row.insertCell(10);
        var cell12 = row.insertCell(11);
        var cell13 = row.insertCell(12);
        var cell14 = row.insertCell(13);
        var cell15 = row.insertCell(14);
        var cell16 = row.insertCell(15);
        var cell17 = row.insertCell(16);
        var cell18 = row.insertCell(17);        
        
        cell1.innerHTML = i+1;
        
        cell2.innerHTML = getuser[keys[i]].name;        
        cell3.innerHTML = getuser[keys[i]].email;
        cell4.innerHTML = getuser[keys[i]].phone;
        cell5.innerHTML = getuser[keys[i]].institution;
        cell6.innerHTML = getuser[keys[i]].roll;
        cell7.innerHTML = getuser[keys[i]].stream;
        cell8.innerHTML = getuser[keys[i]].year;
        cell9.innerHTML = getuser[keys[i]].Q1;
        cell10.innerHTML = getuser[keys[i]].Q2;
        cell11.innerHTML = getuser[keys[i]].Q3;
        cell12.innerHTML = getuser[keys[i]].Q4;
        cell13.innerHTML = getuser[keys[i]].Q5;
        cell14.innerHTML = getuser[keys[i]].Q6;
        cell15.innerHTML = getuser[keys[i]].Q7;
        cell16.innerHTML = getuser[keys[i]].Q8;
        cell17.innerHTML = getuser[keys[i]].Q9;        
        cell18.innerHTML = getuser[keys[i]].hearaboutus;
    }

        
}

function errData(data)
{
    console.log("ERROR!!");
}
