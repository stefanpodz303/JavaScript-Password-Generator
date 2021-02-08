// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "s", "r", "t", "u", "v", "w", "x", "y", "z"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "S", "R", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "+"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
 
var numberOfChar; 
var clientChoiceOne; 
var clientChoiceTwo; 
var clientChoiceThree; 
var clientChoiceFour; 
var totalChar = [];
var choices = [];

// Create a new password prompt, if yes continue to next prompt
// create prompt asking number of characters, input number b/w 8-20, when answer continue to next prompt
// create propmt asking if you would like to use lowercase letters 
// 

// Write password to the #password input
function launchPasswordConfirm() {
 console.log("button is clicked");
 var clientChoice = confirm("Would you like to create a new password?");
 if (clientChoice === true) {
   launchNumberOfChar();
 }
}
function isNumberValid(valueToTest) {
var parsedValue = parseInt(valueToTest);
if (isNaN(parsedValue)){
  return false;
}
else {
  return parsedValue <=20 && parsedValue >=8;
}
 
}
function launchNumberOfChar(message="Pick a number of characters between 8 and 20") {
  console.log("Number of Characters Launched");
  numberOfChar = prompt(message);
if (isNumberValid(numberOfChar)) {
  launchLowerLetters();
} 
else { launchNumberOfChar("Sorry! Invalid Character: Please pick a number between 8 and 20")

}
}

function launchLowerLetters() {
  console.log("Would you like lowercase letters?")

}
// // // Add event listener to generate button
generateBtn.addEventListener("click", launchPasswordConfirm);
  

