// Assignment code here
let userChoice = " ";

let numbers;
let lettersLower;
let lettersUpper;
let specialCharacters;

let number =[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let upperLetters = ['A', 'B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let character =['!', '"', '#', '$','%','&','(',')', '*','+', ',' ,'-','.','/',':',';','<','=','>','?','@','[',']','^','_','`', '{', '|','}','~'];

function generatePassword() {
 userChoice = (prompt("Choose the length of your password. Minimum 8 characters, Maximum 128 characters."));
if(userChoice < 8 || userChoice > 128){
  window.alert("Invalid Length");
  userChoice= (prompt("Choose the length of your password. Minimum 8 characters, Maximum 128 characters."));
  };
  numbers = confirm('Should your password contain numbers?');
  lettersLower = confirm('Should your password contain Lowercase letters?');
  lettersUpper = confirm('Should your password contain Uppercase letters?');
  specialCharacters= confirm('Should your password contain special characters?');
 
 if(lettersLower !== true && lettersUpper !== true && numbers !== true && specialCharacters !==true){
  window.alert("Must meet at least ONE of the criteria listed");
  numbers = confirm('Should your password contain numbers?');
  lettersLower = confirm('Should your password contain Lowercase letters?');
  lettersUpper = confirm('Should your password contain Uppercase letters?');
  specialCharacters= confirm('Should your password contain special characters?');
 }

 let passCriteria = [];

if(numbers === true){
  passCriteria.push(number);
}
if (lettersLower === true){
  passCriteria.push(lowerLetters);
}
if (lettersUpper === true){
  passCriteria.push(upperLetters);
}
if(specialCharacters === true){
  passCriteria.push(character);
}
console.log(passCriteria);


  let passCode = [];
  for(let i = 0; i < userChoice; i++) {
    let choosearray = passCriteria[Math.floor(Math.random()*passCriteria.length)];
    console.log(choosearray);
    let code = choosearray[Math.floor(Math.random()*choosearray.length)];
    
    console.log(code);
   passCode.push(code);
   console.log(passCode);
   
  }
  return passCode.join('');
  
  /*let code = "";
  const generateCode = () => {
    for(let i = 0; i < userChoice; i++) {
      let choosearray = passCriteria[Math.floor(Math.random()*passCriteria.length)];
    console.log(choosearray);
    let code = choosearray[Math.floor(Math.random()*choosearray.length)];
    console.log(code);
    
  }
  return code;
}
  generateCode();
*/
}









// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);