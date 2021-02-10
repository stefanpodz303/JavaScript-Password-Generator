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
var choices = "";
var totalChar = [];

// create a new password prompt, if yes continue to next prompt
// create prompt asking number of characters, input number b/w 8-20, when answer continue to next prompt
// create prompt asking if you would like to use lowercase letters, when answered continue to capLetter prompt
// create prompt asking if you would like to use capital letters, when answered continute to symbols prompt
// create prompt asking if you would like to use symbols, when answered continue to numbers prompt 
// create prompt asking if you would like to use numbers, when answered generate random password with selected characters



function launchPasswordConfirm() {
  console.log("button is clicked");
  var clientChoice = confirm("Would you like to create a new password?");
  if (clientChoice === true) {
    launchNumberOfChar();
  }
}
function isNumberValid(valueToTest) {
  var parsedValue = parseInt(valueToTest);
  if (isNaN(parsedValue)) {
    return false;
  }
  else {
    return parsedValue <= 20 && parsedValue >= 8;
  }

}
function launchNumberOfChar(message = "Pick a number of characters between 8 and 20") {
  
  console.log("Number of Characters Launched");
  numberOfChar = prompt(message);
  if (isNumberValid(numberOfChar)) {
    promptUser();
  }
  else {
    launchNumberOfChar("Sorry! Invalid Selection: Please pick a number between 8 and 20")
  }
}

function promptUser() {
  clientChoiceOne = confirm("Would you like lowercase letters?");
  clientChoiceTwo = confirm("Would you like uppercase letters?");
  clientChoiceThree = confirm("Would you like to add symbols?");
  clientChoiceFour = confirm("Would you like to add numbers?");


  if (clientChoiceOne === true) {
    totalChar = totalChar.concat(lowLetters);
    console.log(totalChar);
  }

  if (clientChoiceTwo === true) {
    totalChar = totalChar.concat(capLetters);
    console.log(totalChar);
  }
  if (clientChoiceThree === true) {
    totalChar = totalChar.concat(symbols);
    console.log(totalChar);
  }
  if (clientChoiceFour === true) {
    totalChar = totalChar.concat(numbers);
    console.log(totalChar);
  }

  for (var i = 0; i < numberOfChar; i++) {

    var charIndex = Math.floor(Math.random() * totalChar.length);
    var randomChar = totalChar[charIndex];
    choices += randomChar;
    console.log(randomChar);
    
  } 
  window.alert(choices);
}


console.log(choices);
console.log(totalChar);

// // // Add event listener to generate button
generateBtn.addEventListener("click", launchPasswordConfirm);


