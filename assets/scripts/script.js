// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function to make Generate Password
function generatePassword() {
  // Prompt for Character Length
  var length = prompt("Enter the length of the password (8-128 characters):");

  // Makes any decimal numbers into Single Digit to the Lowest
  length = Math.floor(length);

  // Validate the Character Length
  if (length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return "";
  }

  // Prompt for Character Types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate if one of these are Selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert(
      "You must select one! We cant have a password without any characters! :("
    );
    return "";
  }

  // Define Variables for Characters
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  var charPool = "";
  if (includeLowercase) {
    charPool += lowercaseChars;
  }
  if (includeUppercase) {
    charPool += uppercaseChars;
  }
  if (includeNumeric) {
    charPool += numericChars;
  }
  if (includeSpecial) {
    charPool += specialChars;
  }

  // Generate the Password
  var password = "";
  for (var i = 0; i < length; i++) {
    var rngIndex = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(rngIndex);
  }

  return password;
}
