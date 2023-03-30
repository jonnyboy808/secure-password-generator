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

//function that creates password
function generatePassword () {
    // adds the created password to the above "writePassword" and "generatePassword" functions
    var outputPassword = "";

    // Prevents nothing less than 8 or no more than 128 characters
    var passwordLength = prompt ("Select a Length between 8 to 128 characters");
        if (passwordLength >=8 && passwordLength <= 128) {

            //  alert box letting user know of the criteria
            alert("Note: A minimum of one uppercase, lowercase, number, and/ or special character must be selected");

            // generates error message if user doesn't select any option
            var selection = false;
            // keeping a place for selected character options
            var options = "";

            // If above criteria is met then the prompt continues with the user options
            var lowerCase = confirm("Should password contain lowercase characters?");
            if (lowerCase === true) {
                selection = true;
                // added the "+=" operator to join the character choices with the next options gets added to the "options" variable above
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

            // error alert box if user doesn't choose a single charater type
            if (selection === false) {
                alert("Error: Minimum one type of character must be selected to use this generator.");
            } else {

                // creates random characters for the above options
                for (i = 0; i < passwordLength ; i++) {
                    outputPassword += options [Math.floor(Math.random()*options.length)];
                };
            };
        // alert box if numbers do not match requirement 
        } else {
            alert("Please enter a number between 8 to 128")
};

// adds created password to the above "outputPassword" variable
return outputPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







