// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "s", "r", "t", "u", "v", "w", "x", "y", "z"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "S", "R", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "+"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var options = ["Lower Case Letters", "Upper Case Letters", "Symbols", "Numbers"];
var clientChoiceOne = window.prompt("Do you want to add lowercase letters?");
var clientChoiceTwo = window.prompt("Do you want to add uppercase letters?")
var clientChoiceThree = window.prompt("Do you want to add symbols?")
var clientChoiceFour = window.prompt("Do you want to add numbers?")


console.log(lowLetters)
console.log(capLetters)
console.log(symbols)
console.log(numbers)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
