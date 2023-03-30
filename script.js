// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  return;
};

// List of character options
var lowerCaseAlph = "abcdefghijklmnopqrstuvwxyz";
var upperCaseAplh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacter = "!@#$%^&*()_-~,.;=<>+?";

// create password function
function generatePassword () {
    var outputPassword = "";

    var passwordLength = prompt ("Select Length between 8 to 128 characters");
    if (passwordLength !=null) {
        if (passwordLength >=8 && passwordLength <= 128) {

            alert("Please choose one upper, lower, number, and special");

            var selection = false;
            var options = "";

            var lowerCase = confirm("Should password contain lowercase characters?");
            if (lowerCase === true) {
                selection = true;
                options += lowerCaseAlph;
            }

            var upperCase = confirm("Should password contain uppercase characters?");
            if (upperCase === true) {
                selection = true;
                options += upperCaseAplh;
            }

            var num = confirm("Should password contain numbers?");
            if (num === true) {
                selection = true;
                options += numbers;
            }

            var special = confirm("Should password contain special charaters?");
            if (special === true) {
                selection = true;
                options += specialCharacter
            }

            if (selection === false) {
                alert("At lease one choice of lowercase, uppercase, number, and special character must be confirmed.");
            } else {

                for (i = 1; i < passwordLength ; i++) {
                    outputPassword += options [Math.floor(Math.random()*options.length)];
                };
            };
        } else {
            alert("Please enter a number between 8 to 128")
        };
};

return outputPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







