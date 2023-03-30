// Assignment Code
var generateBtn = document.querySelector("#generate");

// List of character options
var lowerCaseAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseAplh = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "~", ",", ".", ";", "=", "<", ">", "/", "?", "+"];

var lowerCaseAlph = [];
var upperCaseAplh = [];
var numbers = [];
var specialCharacter = [];


// Write password to the #password input
function writePassword() {
  var password = prompt('Enter password length between 8 and 126');
  var passwordLengthConfirmation = confirm(
    'You selected ' + password + ', is this correct?'
  );
  





  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
for (var i = 0; i < numbers.length; i++) {
    numbers.push(numbers[i]);
}

for (var i = 0; i < specialCharacter.length; i++) {
    specialCharacter.push(specialCharacter[i]);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







