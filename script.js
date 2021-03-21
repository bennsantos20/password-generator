// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


function generatePassword() {
  var userAnswer = prompt("How many characters would you like?") 

  if (!isValidLengthOfPassword(userAnswer)){
      var message = 'Please provide an integer between 8-128';
      console.log(message);
      alert(message);
      return;
  }

  // generate password
  var lengthOfPassword = parseInt(userAnswer);

  var isNumberRequired = confirm("Will this password contain numbers?");
  var isSpecRequired = confirm("Will this password contain special characters?");
  var isUpperCaseRequired = confirm("Will this contain uppercase letters?");
  var isLowerCaseRequired = confirm("Will this contain lowercase letters?");

  if (!(isNumberRequired || isSpecRequired || isUpperCaseRequired || isLowerCaseRequired)) {
     alert('need to require at least one type of character');
     return;
  }

  var password = ""

  var countOfCharTypes = 0;

  if (isNumberRequired ) {
    countOfCharTypes ++ 
  }

  if (isSpecRequired) {
    countOfCharTypes ++
  }

  if (isUpperCaseRequired) {
    countOfCharTypes ++
  }

  if (isLowerCaseRequired) {
    countOfCharTypes ++
  }

  for(var i = 0; i < Math.ceil(lengthOfPassword/countOfCharTypes); i++) {
    if (isLowerCaseRequired) {
      password += generateRandomLowerCaseLetter(); 
    }
    if (isUpperCaseRequired) {
        password += generateRandomUpperCaseLetter(); 
    }
    if (isNumberRequired) {
        password += generateRandomNumber();
    }
    if (isSpecRequired) {
        password += generateRandomSpec();
    }
  }

  password = password.substring(0,lengthOfPassword);
  
  console.log(password)
  var passwordText  = document.querySelector("#password");
  passwordText.value = password;
}


function isValidLengthOfPassword(userAnswer) {
  var res = true;
  if (isNaN(userAnswer)) {
      console.log("Answer is not a number. Please provide an integer between 8-128.");
      res = false;
  }
  var int = parseInt(userAnswer)
  if (int < 8 || int > 128) {
      console.log("Number is not within range. Please provide an integer between 8-128");
      res = false;
  }

  return res;   
}

function generateRandomLowerCaseLetter() {
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];    
  var arraySize = lowerCase.length;
  var randomInt = getRandomInt(arraySize);
  var randomLowerCase = lowerCase[randomInt]
  return randomLowerCase
}

function generateRandomUpperCaseLetter() {
  var caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var arraySize = caps.length;
  var randomInt = getRandomInt(arraySize);
  var randomUpperCase = caps[randomInt]
  return randomUpperCase
}

function generateRandomNumber() {
  var int = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var arraySize = int.length;
  var randomInt = getRandomInt(arraySize)
  var randomNumber = int[randomInt]
  return randomNumber
}

function generateRandomSpec () {
  var spec = ["!", "@", "#", "$", "%", "&"]
  var arraySize = spec.length;
  var randomInt = getRandomInt(arraySize);
  var randomSpec = spec[randomInt]
  return randomSpec
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
