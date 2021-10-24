// Password character variables as selected by user:

var howLong;
var confirmNumber;
var confirmSymbol;
var confirmUppercase;
var confirmLowercase;

// Password Character variables 

// symbols
randomSymbol = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "=", "+", "/"];

// numbers
randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// lowercase letters
randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// uppercase letters
randomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    passwordText = generatePassword();
    document.getElementById("password").placeholder = passwordText;
});

// Write password to the #password input
function generatePassword() {

    // Ask the user how long they would like thier password
    howLong = parseInt(prompt("How many characters would you like your password to conatain? Please choose between 8-128 characters"));

    // Validates the user entry for password length
    if (!howLong) {
        alert("Please enter a number between 8-128");
    } else if (howLong < 8 || howLong > 128) {
        howLong = parseInt(prompt("Please enter a number between 8-128"));

    } else {
        // Once the length is valid, ask the user about numbers, symbols, upper & lower case letters
        confirmNumber = confirm("Would you like your password to contain numbers? \n Click ok for yes or cancel for no");
        confirmSymbol = confirm("Would you like your password to contain special symbols? \n Click ok for yes or cancel for no");
        confirmUppercase = confirm("Would you like your password to contain uppercase letters? \n Click ok for yes or cancel for no");
        confirmLowercase = confirm("Would you like your password to contain lowercase letters? \n Click ok for yes or cancel for no");
    };

    // If user exits out of all 4 additional options, notify them they need to select at least one of the options to generate a password
    if (!confirmSymbol && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        characterSelections = alert("Please choose at least one option to generate a password");

    }
    // Take the information from the user's selections to determine which characters to include in the password 

    // If the user selects all four options
    else if (confirmSymbol && confirmNumber && confirmUppercase && confirmLowercase) {

        characterSelections = randomSymbol.concat(randomNumber, randomLower, randomUpper);
    }
    // If the user selects three options
    else if (confirmSymbol && confirmNumber && confirmUppercase) {
        characterSelections = randomSymbol.concat(randomNumber, randomUpper);
    }
    else if (confirmSymbol && confirmNumber && confirmLowercase) {
        characterSelections = randomSymbol.concat(randomNumber, randomLower);
    }
    else if (confirmSymbol && confirmLowercase && confirmUppercase) {
        characterSelections = randomSymbol.concat(randomLower, randomUpper);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        characterSelections = randomNumber.concat(randomLower, randomUpper);
    }
    // If the user selects two options
    else if (confirmSymbol && confirmNumber) {
        characterSelections = randomSymbol.concat(randomNumber);

    } else if (confirmSymbol && confirmLowercase) {
        characterSelections = randomSymbol.concat(randomLower);

    } else if (confirmSymbol && confirmUppercase) {
        characterSelections = randomSymbol.concat(randomUpper);
    }
    else if (confirmLowercase && confirmNumber) {
        characterSelections = randomLower.concat(randomNumber);

    } else if (confirmLowercase && confirmUppercase) {
        characterSelections = randomLower.concat(randomUpper);

    } else if (confirmNumber && confirmUppercase) {
        characterSelections = randomNumber.concat(randomUpper);
    }
    // If the user selects one option
    else if (confirmSymbol) {
        characterSelections = randomSymbol;
    }
    else if (confirmNumber) {
        characterSelections = randomNumber;
    }
    else if (confirmLowercase) {
        characterSelections = randomLower;
    }

    // variable for password length
    var passwordLength = [];

    // Math to pull variables randomly
    for (var i = 0; i < howLong; i++) {
        var selections = characterSelections[Math.floor(Math.random() * characterSelections.length)];
        passwordLength.push(selections);
    }
    // Join the password array and convert to a string so that the value returned is not undefined
    var passwordText = passwordLength.join("");
    UserInput(passwordText);
    return passwordText;

}
// This function places the created password into the textbox for the user to view
function UserInput(passwordText) {
    document.getElementById("password").textContent = passwordText;

}
