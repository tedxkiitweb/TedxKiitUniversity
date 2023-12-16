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

var Ref = firebase.database().ref('registration_data_2021');

$('#registrationform').submit(function (e) {
	e.preventDefault();

	if (check()) {
		var newMessageRef = Ref.push();
		newMessageRef.set({
			name: $('.name').val(),
			email: $('.email').val(),
			phone: $('.phone').val(),
			institution: $("#collegename :selected").text(),
			roll: $('.roll').val(),
			stream: $('.stream').val(),
			year: $("#year :selected").text(),
			Q1: $('.q1').val(),
			Q2: $('.q2').val(),
			Q3: $('.q3').val(),
			Q4: $('.q4').val(),
			Q5: $('.q5').val(),
			Q6: $('.q6').val(),
			Q7: $('.q7').val(),
			Q8: $('.q8').val(),
			Q9: $('.q9').val(),
			hearaboutus: $("#hearaboutus :selected").text()
		});

		$('#myModal').modal('show');

		$('#registrationform')[0].reset();
	} else {
		$('#myModal1').modal('show');
	}
});

function check() {

	var pass1 = document.getElementById('mobile');

	var message = document.getElementById('message');

	var badColor = "#FF9B37";

	if (mobile.value.length != 10) {

		$("#message").show();
		message.style.color = badColor;
		message.innerHTML = "must contain 10 digits"
		return false;
	} else {
		$("#message").hide();
		return true;
	}
}