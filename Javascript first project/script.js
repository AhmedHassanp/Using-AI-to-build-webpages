// Challenge: Create a variable named 'firstName' and assign it your name.
let firstName = "Guil";
var button = document.getElementById("myButton");
var messageContainer = document.getElementById("messageContainer");

button.addEventListener("click", function() {
  messageContainer.textContent = "Welcome, " + firstName + "!";
});
