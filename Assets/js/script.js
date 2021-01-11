// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// variable configuration for creating password
var upperCase = ('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z')

var lowerCase = ('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')

var numeric = ('1','2','3','4','5','6','7','8','9','0')

var specialChar = ('!','@','#','$','%','^','&','*','_','+','=','~')

// user prompts
var userInput = [];


function generatePassword() {
  
  // Asks what length user wants the passwords and adds to userInput
  var userLength = prompt("Please choose desired length of your password (must be between 8 and 128).");

  console.log(userLength);

  // Turns userLength into an integer so we can run a validation check to see if it is a valid number
  var userLePar = parseInt(userLength);

  // Validation to check if user presses cancel. Will alert a different message then if user inputs invalid number
  if (userLength === null) {

    alert("Must enter valid number and press OK to continue.")
      return userPassword = "";

  }

  // Validation check to make sure user input is a valid number and between 8 and 128
  else if (Number.isNaN(userLePar) || userLength < 8 || userLength > 128) {

    alert("I said NUMBER between 8 and 128")
    return userPassword = "";

  }
 
  // Following block of codes confirms what characters user wants to include in password, and if confirms concatenates it to the variable userInput
  else {

    var userInputUpper = confirm("Would you like your password to contain upper case letter?");

    if (userInputUpper) {

      userInput = userInput.concat(upperCase);
      console.log(userInputUpper);

    }
  
    var userInputLower = confirm("Would you like your password to contain lower case letters?");

    if (userInputLower) {

      userInput = userInput.concat(lowerCase);
      console.log(userInputLower);
      
    }
  
    var userInputNum = confirm("Would you like your password to contain numbers?");

    if (userInputNum) {

      userInput = userInput.concat(numeric);
      console.log(userInputNum);
      
    }
  
    var userInputSpec = confirm("Would you like your password to contain special characters?");

    if (userInputSpec) {

      userInput = userInput.concat(specialChar);
      console.log(userInputSpec);

    }
  
    // Validates that user chose at least one character type
    if (userInputUpper === false && userInputLower === false && userInputNum === false && userInputSpec === false) {

      alert("must choose at least one character type")
      return userPassword = ""

    }
  }






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
