// ***** PASSWORD GENERATOR SCRIPT *****

// ====================================================================================
// ***** Possible Character Choices Arrays *****
// ====================================================================================

// Lowercase Letter Array
let lowerCaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Using the console to confirm lowercase letter array works.
console.log(lowerCaseLetters);

// Special Character Array
let specialCharacters = ['!','@','#','$','%','^','&','*','~','.','/','<','>','?',';',':','+','=','-','_'];

// Using the console to confirm special character array works.
console.log(specialCharacters);

// Number Array
let numbers = ['1','2','3','4','5','6','7','8','9','0'];

// Using the console to confirm numbers array works.
console.log(numbers);

// Uppercase Letter Array --- used code from https://stackoverflow.com/questions/29719329/convert-array-into-upper-case
let upperCaseLetters = String.prototype.toUpperCase.apply(lowerCaseLetters).split(",");

// Using the console to confirm upperCaseLetters array works.
console.log(upperCaseLetters);

// Initializing passwordLength Variable.
let passwordLength;

// =====================================================================================
// ***** User's Password Characters and Length Selection *****
// =====================================================================================
// // Received Help from Ikemous in making this section of code more DRY. 
// // (Previously had two sets of the same conditional statements and he pointed out the repetition.)
// =====================================================================================

// This empty array will be used to collect the User's Password Generating Criterion(a).
let passwordGeneratingCriteria = [];

// ===============================================================================
// ***** Conditional in Case of Lack of Character Selection *****
// ===============================================================================
// // Referenced sample of Stephen Oveson's code for this input validation conditional statement for a case in which the user has not selected any of the possible character choices for the passwordGeneratingCriteria.
// ===============================================================================

// Declaring the userLacksChoices Function
function userChoices() {

    // Confirm Lowercase Letters - Asking user to confirm inclusion of Lowercase Letters in Password Generating Criterion(a).
    let wantsLowerCaseLetters = confirm("Include lowercase letters in your password? 'OK' for Yes or 'Cancel' for No");

    // Adding to passwordGeneratingCriteria Array if confirmed, and alerting the user of choice.
    if (wantsLowerCaseLetters) {
        passwordGeneratingCriteria.push(lowerCaseLetters);
        alert("Your password will include lowercase letters.");
    }
    else { 
        alert("Your password will not have lowercase letters.");
    }

    // Confirm Uppercase Letters - Asking user to confirm inclusion of Uppercase Letters in Password Generating Criterion(a).
    let wantsUpperCaseLetters = confirm("Include uppercase letters in your password? 'OK' for Yes or 'Cancel' for No");

    // Adding to passwordGeneratingCriteria Array if confirmed, and alerting the user of choice.
    if (wantsUpperCaseLetters) {
        passwordGeneratingCriteria.push(upperCaseLetters);
        alert("Your password will include uppercase letters.");
    }
    else { 
        alert("Your password will not have uppercase letters.");
    }

    // Confirm Special Characters - Asking user to confirm inclusion of Special Characters in Password Generating Criterion(a).
    let wantsSpecialCharacters = confirm("Include special characters in your password? 'OK' for Yes or 'Cancel' for No");

    // Adding to passwordGeneratingCriteria Array if confirmed, and alerting the user of choice.
    if (wantsSpecialCharacters) {
        passwordGeneratingCriteria.push(specialCharacters);
        alert("Your password will include special characters.");
    }
    else { 
        alert("Your password will not have special characters.");
    }

    // Confirm Numbers - Asking user to confirm inclusion of Numbers in Password Generating Criterion(a).
    let wantsNumbers = confirm("Include numbers in your password? 'Ok' for Yes or 'Cancel' for No");

    // Adding to passwordGeneratingCriteria Array if confirmed, and alerting the user of choice.
    if (wantsNumbers) {
        passwordGeneratingCriteria.push(numbers);
        alert("Your password will include numbers.");
    }
    else { 
        alert("Your password will not have numbers.");
    }
    // Conditional Statement Indicating User does not want any of the possible character selections.
    if (!wantsLowerCaseLetters && !wantsUpperCaseLetters && !wantsSpecialCharacters && !wantsNumbers) {
        // Alerts the user of password generation parameters.
        alert("Must choose at least one character type to generate password.");
    
        // Recursion
        userChoices();
    }

    // Using console to check functionality of passwordGeneratingCriteria array.
    console.log(passwordGeneratingCriteria);
}

//Calling the userLacksChoices Function
userChoices();

// ================================================================================
// ***** Password Length Prompt & Recursion with Conditional *****
// ================================================================================
// // Received help from Dylan and Stephen on this portion.
// // Dylan pointed out the issue with scope since I previously initialized passwordLength declared inside the function.
// // (See Line 32 for new init.)
// ================================================================================

// Declaring the promptPasswordLength Function
function promptPasswordLength() {

    // Password Length Value - Prompts the User to Input a Number between eight (8) and one hundred twenty-eight (128) to determine the Length of the Generated Password and trims any spaces off of the input should they be 
    passwordLength = prompt("Choose a whole number from eight (8) to one hundred twenty-eight (128) to determine the length of your password.").trim();

    // Conditional Statement (IF the passwordLength prompt input is not a number OR IF passwordLength is not greater than or equal to eight OR IF passwordLength is not less than or eequal to one hundred twenty-eight)
    if (isNaN(passwordLength) || !(passwordLength >= 8) || !(passwordLength <= 128)) {

        // THEN Alerts user of invalid input and outlines correct input parameters.
        alert("Your input must be a number between eight (8) and one hundred twenty-eight (128).");

        // THEN Initiates Recursion
        promptPasswordLength();
    }

    // ELSE Alerts the user of choice of password length.
    else {
        alert("Your password will be " + passwordLength + " characters long.");
    }
}

// Calling the Function
promptPasswordLength();

// ================================================================================
// ***** Generate Password Function *****
// ================================================================================
// Received help from Stephen on this section to understand for loops.
// Receieved help from Ike on this section pointing out scope in reference to line 160.
// ================================================================================

// Declaring the Generate Password Function.
function generatePassword() {
    // Initializing randomPassword
    let randomPassword = "";
    // For Loop for Number Generation as (initial is 0; break case: initial is less then given pw length; increment initial by one)
    for (i = 0; i < passwordLength; i++) {

        // Generating Random Number for Index of Character Array 
        let randomArrayNumber = Math.floor(Math.random() * passwordGeneratingCriteria.length);
        // Generating Random Character Array
        let randomCharArr = passwordGeneratingCriteria[randomArrayNumber];
        // Generating Random Number for Index of Character
        let randomCharacterNumber = Math.floor(Math.random() * randomCharArr.length);
        // Generating random character from the array
        let randomCharacter = randomCharArr[randomCharacterNumber];
        // Incrementally adding newCharacters until break case described above.
        randomPassword = randomPassword + randomCharacter;
    }

    return randomPassword;
}

// Using console.log to confirm generatePassword function works.
console.log(generatePassword);

// =================================================================================
// Assignment Given Code
// =================================================================================
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ***** END OF PASSWORD GENERATOR SCRIPT *****


// ===================================================================================
// IGNORE - REFERENCE - IGNORE
// ===================================================================================

// ====================================================
// Previous Password Length Prompt
// ====================================================

// // Password Length Value - Prompts the User to Input a Number between eight (8) and one hundred twenty-eight (128) to determine the Length of the Generated Password.
// let passwordLength = prompt("Choose a whole number from eight (8) to one hundred twenty-eight (128) to determine the length of your password.");


// // Input validation case for passwordLength prompt requiring the passwordLength to be a number between 8 and 128.
// while (true) { 
    
//     // Password Length Value - Prompts the User to Input a Number between eight (8) and one hundred twenty-eight (128) to determine the Length of the Generated Password.
//     let passwordLength = prompt("Choose a whole number from eight (8) to one hundred twenty-eight (128) to determine the length of your password.").trim();

//     // Conditional Statement (if the passwordLength prompt input is not a number OR if passwordLength is not greater than or equal to eight OR passwordLength is not less than or eequal to one hundred twenty-eight)
//     if (isNaN(passwordLength) || !(passwordLength >= 8) || !(passwordLength <= 128)) {

//     // Alerts user of invalid input and outlines correct input parameters.
//     alert("Your input must be a number between eight (8) and one hundred twenty-eight (128).");

//     // Breaks and eturns to passwordLength prompt.
//     break;
//     }

//     // Alerts the user of choice of password length.
//     else {
//         alert("Your password will be " + passwordLength + " characters long.");
//     }
// }


// while(true)
// {
//     // Input validation case for passwordLength prompt requiring the passwordLength to be a number between 8 and 128.
//     if (isNaN(passwordLength) || !(passwordLength >= 8|| !(passwordLength <= 128)) {
//         alert("Your input must be a number between eight (8) and one hundred twenty-eight (128).");
//         return passwordLength; 
//     }
//     // Alerts the user of choice of password length.
//     else {
//         alert("Your password will be " + passwordLength + " characters long.");
//         break;
//     }
// }

// // =================================================
// // Password Generating Criteria Array + Push Methods
// // =================================================

// // This empty array will be used to collect the User's Password Generating Criterion(a).
// let passwordGeneratingCriteria = [];

// // Pushing Lowercase Letters Array into Password Generating Criteria Array if selected by user.
// if (wantsLowerCaseLetters) {
//     let joinedLowerCaseLetters = lowerCaseLetters.join('');
//     passwordGeneratingCriteria.push(joinedLowerCaseLetters);
// }

// // Pushing Uppercase Letters Array into Password Generating Criteria Array if selected by user.
// if (wantsUpperCaseLetters) {
//     let joinedUpperCaseLetters = upperCaseLetters.join('');
//     passwordGeneratingCriteria.push(joinedUpperCaseLetters);
// }

// // Pushing Special Characters Array into Password Generating Criteria Array if selected by user.
// if (wantsSpecialCharacters) {
//     let joinedSpecialCharacters = specialCharacters.join('');
//     passwordGeneratingCriteria.push(joinedSpecialCharacters);
// }

// // Pushing Numbers Array into Password Generating Criteria Array if selected by user.
// if (wantsNumbers) {
//     let joinedNumbers = numbersCharacters.join('');
//     passwordGeneratingCriteria.push(joinedNumbers);
// }

// if (!wantsLowerCaseLetters && !wantsUpperCaseLetters && !wantsSpecialCharacrters && !wantsNumbers) {
//     alert("Must choose at least one character type to generate password.");

// }

// // if the user wants an array or multiple arrays of character types (switch cases?),
// // then let randomPassword match at least one character from each of the arrays chosen by the user
// // else if there is no match
// switch () {

//     case "Lowercase":
//         if (wantsLowerCaseLetters) {
//             randomPassword.match(regexp: joinedLowerCaseLetters)// could use joinedLowerCaseLetters string or lowerCaseLetters array
//         };
//     case "Uppercase":
//         if (wantsUpperCaseLetters) {
//             randomPassword.match() // could use joinedUpperCaseLetters string or upperCaseLetters array;
//         };
//     case "Spec":
//         if (wantsSpecialCharacters) {
//             randomPassword.match() // could use joinedSpecialCharacters string or specialCharacters array;
//         };
//     case "Numbers":
//         if (wantsNumbers) {
//             randomPassword.match() // could use joinedNumbers string or numbers array;
//         };
    
// }

// // Declaring the userLacksChoices Function
// function userChoices() {

//     // Confirm Lowercase Letters - Asking user to confirm inclusion of Lowercase Letters in Password Generating Criterion(a).
//     let wantsLowerCaseLetters = confirm("Include lowercase letters in your password? 'OK' for Yes or 'Cancel' for No");

//     // Adding to passwordGeneratingCriteria Array if confirmed, and alerting the user of choice.
//     if (wantsLowerCaseLetters) {
//         let joinedLowerCaseLetters = lowerCaseLetters.join('');
//         passwordGeneratingCriteria.push(joinedLowerCaseLetters);
//         alert("Your password will include lowercase letters.");
//     }
//     else { 
//         alert("Your password will not have lowercase letters.");
//     }

//     // Confirm Uppercase Letters - Asking user to confirm inclusion of Uppercase Letters in Password Generating Criterion(a).
//     let wantsUpperCaseLetters = confirm("Include uppercase letters in your password? 'OK' for Yes or 'Cancel' for No");

//     // Adding to passwordGeneratingCriteria Array if confirmed, and alerting the user of choice.
//     if (wantsUpperCaseLetters) {
//         let joinedUpperCaseLetters = upperCaseLetters.join('');
//         passwordGeneratingCriteria.push(joinedUpperCaseLetters);
//         alert("Your password will include uppercase letters.");
//     }
//     else { 
//         alert("Your password will not have uppercase letters.");
//     }

//     // Confirm Special Characters - Asking user to confirm inclusion of Special Characters in Password Generating Criterion(a).
//     let wantsSpecialCharacters = confirm("Include special characters in your password? 'OK' for Yes or 'Cancel' for No");

//     // Adding to passwordGeneratingCriteria Array if confirmed, and alerting the user of choice.
//     if (wantsSpecialCharacters) {
//         let joinedSpecialCharacters = specialCharacters.join('');
//         passwordGeneratingCriteria.push(joinedSpecialCharacters);
//         alert("Your password will include special characters.");
//     }
//     else { 
//         alert("Your password will not have special characters.");
//     }

//     // Confirm Numbers - Asking user to confirm inclusion of Numbers in Password Generating Criterion(a).
//     let wantsNumbers = confirm("Include numbers in your password? 'Ok' for Yes or 'Cancel' for No");

//     // Adding to passwordGeneratingCriteria Array if confirmed, and alerting the user of choice.
//     if (wantsNumbers) {
//         let joinedNumbers = numbersCharacters.join('');
//         passwordGeneratingCriteria.push(joinedNumbers);
//         alert("Your password will include numbers.");
//     }
//     else { 
//         alert("Your password will not have numbers.");
//     }
//     // Conditional Statement Indicating User does not want any of the possible character selections.
//     if (!wantsLowerCaseLetters && !wantsUpperCaseLetters && !wantsSpecialCharacters && !wantsNumbers) {
//         // Alerts the user of password generation parameters.
//         alert("Must choose at least one character type to generate password.");
    
//         // Recursion
//         userChoices();
//     }

//     // Join Selected Array Characters - Joining all of the Characters in the User's Password Generating Criteria
//     passwordGeneratingCharacters = passwordGeneratingCriteria.join('');

//     // Using console to check functionality of actionable password generating string.
//     console.log(passwordGeneratingCharacters);
// }
// // Initializing passwordGeneratingCharacters;
// let passwordGeneratingCharacters;

//  // Join Selected Array Characters - Joining all of the Characters in the User's Password Generating Criteria
//  passwordGeneratingCharacters = passwordGeneratingCriteria.join('');

// // Using console to check functionality of actionable password generating string.
// console.log(passwordGeneratingCharacters);


 // let passwordGeneratingCriteria = [];
        // if user wants a character array then push that array into the passwordGeneratingCriteria
        //
        //  i
        //  first: use i to keep track of which character in the password we are generating.
        //  second: use i to get the index of the array we want to use.
        //  length = 4
        //  0, 1, 2, 3, 4, 5, 6, 7
        //  0, 1, 2, 3, 0, 1, 2, 3
        //  