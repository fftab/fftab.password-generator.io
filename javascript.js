// =================================================================================================
// Password Choices Arrays
// =================================================================================================

// Lowercase Letter Array
let lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Using the console to confirm lowercase letter array works.
console.log(lowerCaseLetters);

// Special Character Array
let specialCharacters = ['!','@','#','$','%','^','&','*','~','.','/','<','>','?',';',':','+','=','-','_'];

// Using the console to confirm special character array works.
console.log(specialCharacters);

// Number Array
let numbersCharacters = ['1','2','3','4','5','6','7','8','9','0'];

// Using the console to confirm numbers array works.
console.log(numbersCharacters);

// Uppercase Letter Array --- used code from https://stackoverflow.com/questions/29719329/convert-array-into-upper-case
let upperCaseLetters = String.prototype.toUpperCase.apply(lowerCaseLetters).split(",");

// Using the console to confirm upperCaseLetters array works.
console.log(upperCaseLetters);

// ===================================================================================================
// User's Password Choices
// ===================================================================================================

// Confirm Lowercase Letters - Asking user to confirm inclusion of Lowercase Letters in Password Generating Criterion(a).
let wantsLowerCaseLetters = confirm("Include lowercase letters in your password? 'OK' for Yes or 'Cancel' for No");

// Alerting the user of choice.
if (wantsLowerCaseLetters) {
    alert("Your password will include lowercase letters.");
}
else { 
    alert("Your password will not have lowercase letters.");
}

// Confirm Uppercase Letters - Asking user to confirm inclusion of Uppercase Letters in Password Generating Criterion(a).
let wantsUpperCaseLetters = confirm("Include uppercase letters in your password? 'OK' for Yes or 'Cancel' for No");

// Alerting the user of choice.
if (wantsUpperCaseLetters) {
    alert("Your password will include uppercase letters.");
}
else { 
    alert("Your password will not have uppercase letters.");
}

// Confirm Special Characters - Asking user to confirm inclusion of Special Characters in Password Generating Criterion(a).
let wantsSpecialCharacters = confirm("Include special characters in your password? 'OK' for Yes or 'Cancel' for No");

// Alerting the user of choice.
if (wantsSpecialCharacters) {
    alert("Your password will include special characters.");
}
else { 
    alert("Your password will not have special characters.");
}

// Confirm Numbers - Asking user to confirm inclusion of Numbers in Password Generating Criterion(a).
let wantsNumbers = confirm("Include numbers in your password? 'Ok' for Yes or 'Cancel' for No");

// Alerting the user of choice.
if (wantsNumbers) {
    alert("Your password will include numbers.");
}
else { 
    alert("Your password will not have numbers.");
}

// Password Length Value - Prompts the User to Input a Number between eight (8) and one hundred twenty-eight (128) to determine the Length of the Generated Password.
let passwordLength = prompt("Choose a whole number from eigth (8) to one hundred twenty-eight (128) to determine the length of your password.");

// Alerts the user of choice of password length.
alert("Your password will be " + passwordLength + " characters long.");

// ====================================================================================================
// Methods to Generate Password
// ====================================================================================================

// This empty array will be used to collect the User's Password Generating Criterion(a).
let passwordGeneratingCriteria = [];

// Pushing Lowercase Letters Array into Password Generating Criteria Array if selected by user.
if (wantsLowerCaseLetters) {
    let joinedLowerCaseLetters = lowerCaseLetters.join('');
    passwordGeneratingCriteria.push(joinedLowerCaseLetters);
}

// Pushing Uppercase Letters Array into Password Generating Criteria Array if selected by user.
if (wantsUpperCaseLetters) {
    let joinedUpperCaseLetters = upperCaseLetters.join('');
    passwordGeneratingCriteria.push(joinedUpperCaseLetters);
}

// Pushing Special Characters Array into Password Generating Criteria Array if selected by user.
if (wantsSpecialCharacters) {
    let joinedSpecialCharacters = specialCharacters.join('');
    passwordGeneratingCriteria.push(joinedSpecialCharacters);
}

// Pushing Numbers Array into Password Generating Criteria Array if selected by user.
if (wantsNumbers) {
    let joinedNumbers = numbersCharacters.join('');
    passwordGeneratingCriteria.push(joinedNumbers);
}

// Join Selected Array Characters - Joining all of the Characters in the User's Password Generating Criteria
let passwordGeneratingCharacters = passwordGeneratingCriteria.join('');

// Using console to confirm the the arrays joined into an actionable string.
console.log(passwordGeneratingCharacters);

// ====================================================================================================
// Where I left Off...
// ====================================================================================================

// function generatePassword() {
// Math.floor(Math.random() * passwordGeneratingCharacters.length);
// (i = 0; i < passwordLength; i = i + 1);
// }
// passwordLength

// ====================================================================================================
// Assignment Code
// ====================================================================================================
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

