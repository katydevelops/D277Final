const form = document.querySelector("form"); // grab the form
const email = document.getElementById("email"); // set variable for 1st email field
const confirmEmail = document.getElementById("confirm-email"); // set 2nd variable for confirm email field

// confirm if the email matches the confirm email field when the submit button is clicked via action listener
form.addEventListener("submit", function (e) {
	if (email.value !== confirmEmail.value) {
		alert("Your Email doesn't match");
		e.preventDefault(); // need preventDefault so email window won't open and makes you correct email to proceed
	}
});
