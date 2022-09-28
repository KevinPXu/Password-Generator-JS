// Assignment Code
var generateBtn = document.querySelector("#generate");
// initializes boolean variables all set initially to false.
var upper = false;
var lower = false;
var numeric = false;
var symbol = false;
var passLength = 0;

// prompt the criteria of each choice: Uppercase letter, Lowercase letter, numeric, or/and symbols.

// Write password to the #password input
function writePassword() {
  //Prompt user the instructions of following prompts
  //Asks if they want an uppercase letter in the password with error protection.
  var upperPrompt = prompt(
    "Do you want uppercase letters in your password? (y/n)"
  );
  //if the answer to prompt is not valid, it will ask them to choose a new answer.
  while (
    upperPrompt != "y" &&
    upperPrompt != "Y" &&
    upperPrompt != "n" &&
    upperPrompt != "N"
  ) {
    upperPrompt = prompt(
      "That is not a valid option, please choose again(y/n)"
    );
  }

  if (upperPrompt === "y" || upperPrompt === "Y") {
    upper = true;
  }

  console.log(upper);

  //Asks if they want a lowercase letter in the password with error protection.
  var lowerPrompt = prompt(
    "Do you want lowercase letters in your password? (y/n)"
  );
  //if the answer to prompt is not valid, it will ask them to choose a new answer.
  while (
    lowerPrompt !== "y" &&
    lowerPrompt !== "Y" &&
    lowerPrompt !== "n" &&
    lowerPrompt !== "N"
  ) {
    lowerPrompt = prompt(
      "That is not a valid option, please choose again(y/n)"
    );
  }

  if (lowerPrompt === "y" || lowerPrompt === "Y") {
    lower = true;
  }

  console.log(lower);

  //Asks if they want a numeric in the password with error protection.
  var numPrompt = prompt("Do you want numeric in your password? (y/n)");
  //if the answer to prompt is not valid, it will ask them to choose a new answer.
  while (
    numPrompt !== "y" &&
    numPrompt !== "Y" &&
    numPrompt !== "n" &&
    numPrompt !== "N"
  ) {
    numPrompt = prompt("That is not a valid option, please choose again(y/n)");
  }

  if (numPrompt === "y" || numPrompt === "Y") {
    numeric = true;
  }

  console.log(numeric);

  //Asks if they want a symbol in the password with error protection.
  var symPrompt = prompt("Do you want symbols in your password? (y/n)");
  //if the answer to prompt is not valid, it will ask them to choose a new answer.
  while (
    symPrompt !== "y" &&
    symPrompt !== "Y" &&
    symPrompt !== "n" &&
    symPrompt !== "N"
  ) {
    symPrompt = prompt("That is not a valid option, please choose again (y/n)");
  }

  if (symPrompt === "y" || symPrompt === "Y") {
    symbol = true;
  }

  console.log(symbol);

  //Asks user how many characters they want their password to be.
  var lenPrompt = prompt(
    "How long do you want your password? Between 8 and 128."
  );

  var type = isNaN(lenPrompt);
  console.log("Type is " + type);
  //if the answer to prompt is not valid, it will ask them to choose a new answer.
  while (lenPrompt < 8 || lenPrompt > 128 || type) {
    lenPrompt = prompt(
      "That is not a valid option, please choose again (Between 8 and 128)"
    );
    type = isNaN(lenPrompt);
    console.log("Type is " + type);
  }
  //sets passLength to number of characters the password needs to be
  passLength = lenPrompt;

  console.log(passLength);

  //creates a function to generate the password based on the prompted answers
  function generatePassword(upperVal, lowerVal, numVal, symVal, passVal) {
    // Creates array of uppercase letters
    var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    upperCaseLetters = upperCaseLetters.split("");
    console.log(upperCaseLetters);

    //Creates array of lowercase letters
    var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    lowerCaseLetters = lowerCaseLetters.split("");
    console.log(lowerCaseLetters);

    //Creates array of numbers
    var numArray = "1234567890";
    numArray = numArray.split("");
    console.log(numArray);

    //Creates array of special Characters
    var specChar = ".*&!@#$^_-=+";
    specChar = specChar.split("");
    console.log(specChar);

    //create a concatenated array of values if prompt case was true.
    var finalArray = [];

    if (upperVal) {
      finalArray = finalArray.concat(upperCaseLetters);
      console.log(finalArray);
    }

    if (lowerVal) {
      finalArray = finalArray.concat(lowerCaseLetters);
      console.log(finalArray);
    }

    if (numVal) {
      finalArray = finalArray.concat(numArray);
      console.log(finalArray);
    }

    if (symVal) {
      finalArray = finalArray.concat(specChar);
      console.log(finalArray);

      return finalArray;
    }
  }

  var password = generatePassword(upper, lower, numeric, symbol, passLength);
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
