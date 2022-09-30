// Assignment Code
var generateBtn = document.querySelector("#generate");
// initializes boolean variables all set initially to false.
var upper = false;
var lower = false;
var numeric = false;
var symbol = false;
var passLength = 0;

// prompt the criteria of each choice: Uppercase letter, Lowercase letter, numeric, and/or symbols.
function writePassword() {
  while (!(upper || lower || numeric || symbol)) {
    upper = promptUser("Do you want uppercase letters in your password? (y/n)");
    lower = promptUser("Do you want lowercase letters in your password? (y/n)");
    numeric = promptUser("Do you want numbers in your password? (y/n)");
    symbol = promptUser("Do you want symbols in your password? (y/n)");
    //checks if user inputs all no's, alerts then asks again
    if (!(upper || lower || numeric || symbol)) {
      alert("ERROR: cannot choose all no's, try again.");
    }
  }

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

  var password = generatePassword(upper, lower, numeric, symbol, passLength);

  //sends an alert with the given password before it is printed to the screen
  alert(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

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
  }

  if (lowerVal) {
    finalArray = finalArray.concat(lowerCaseLetters);
  }

  if (numVal) {
    finalArray = finalArray.concat(numArray);
  }

  if (symVal) {
    finalArray = finalArray.concat(specChar);
  }
  //initializes the finalPass variable outside the for loop so it does not get rewritten after each iteration of the for loop
  var finalPass = "";
  //iterates the random number generator that selects a random number between 0 and length of the finalArray variable, then selects a value from the finalArray array and adds it to the finalPass string
  for (var i = 0; i < passVal; i++) {
    finalPass += finalArray[Math.floor(Math.random() * finalArray.length)];
    console.log(finalPass);
  }
  // returns the final password to the password variable from the function call
  return finalPass;
}

//prompts user for specified element and checks validity of user input
function promptUser(promptText) {
  var inputPrompt = prompt(promptText);
  //if the answer to prompt is not valid, it will ask them to choose a new answer.
  var validPrompts = ["y", "Y", "n", "N"];
  while (!validPrompts.includes(inputPrompt)) {
    inputPrompt = prompt(
      "That is not a valid option, please choose again(y/n)"
    );
  }
  return inputPrompt.toUpperCase() === "Y";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
