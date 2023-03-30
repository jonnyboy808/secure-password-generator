// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  return;

}

// List of character options
var lowerCaseAlph = "abcdefghijklmnopqrstuvwxyz";
var upperCaseAplh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacter = "!@#$%^&*()_-~,.;=<>+?";

var lowerCaseAlph = [];
var upperCaseAplh = [];
var numbers = [];
var specialCharacter = [];

// create password function
function generatePassword () {
    var outputPassword = "";

    var passwordLength = prompt ("Select Length between 8 to 128 characters");
    if (passwordLength !=null) {
        if (passwordLength >=8 && passwordLength <= 128) {

            alert("Please choose one upper, lower, number, and special");

            var
        }
    }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







