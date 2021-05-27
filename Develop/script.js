// Assignment Code

var generateBtn = document.querySelector("#generate");
var lowercaseLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaseLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var numericChar = ['0','1','2','3','4','5','6','7','8','9']
var specialCharacters = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ';', '<', '=', '>', '?', '@', '[', '^', '_', '{', '|', '}', '~']

// Write password to the #password input
function writePassword() {
  // declared variables locally 
  var pwd= '';
  var finalPassword = '';

  // asking the length from client 
  var length = prompt("How long does your password need to be? The password must have a minimum of 8 characters and no more than 128 characters.");

  if (isNaN(length)){
    alert("This not a valid length. Please enter a character length between 8 and 128.");
    writePassword();
  } else if (length < 8 || length > 128) {
    alert("The length must be between 8 and 128 characters!");
    writePassword(); 
  } else {

      var lowercaseConfirm = confirm("Does your password have to have lower case characters?");
      var uppercaseConfirm = confirm("Does your password have to have upper case characters?");
      var numericConfirm = confirm("Does your password have to have numeric characters?");
      var specialCharactersConfirm = confirm("Does your password have to have special characters?");

      if(lowercaseConfirm === false && uppercaseConfirm === false && numericConfirm === false && specialCharactersConfirm === false){
      // must chose one criteria 
      alert("You must choose at least one criteria to generate a password.");
      writePassword();
      } 
  
        if (lowercaseConfirm){
        pwd = pwd + lowercaseLetter.join("")
      }

        if (uppercaseConfirm){
        pwd = pwd + uppercaseLetter.join("") 
      }

        if (numericConfirm){
        pwd = pwd + numericChar.join("")
      } 

      if (specialCharactersConfirm){
      pwd = pwd + specialCharacters.join("")
      }

      for(i=0; i < parseInt(length); i++){
          var randomIndex = Math.floor(Math.random ()* pwd.length)
          finalPassword = finalPassword + pwd[randomIndex]
    }

  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword; 
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
