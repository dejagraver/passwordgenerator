//Assignment code here
//Write function to start password generator
var generateBtn = document.querySelector("#generate");
var numericCharacters = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
function choosePasswordOptions() {
 var passwordLength = parseInt(prompt("How many charcters long do you want?"));
    if (isNaN(passwordLength)) {
        alert ("Password Length must be between 8 and 128!");
        return;
    }
    if (passwordLength < 8)  {
        alert("Password must be atleast 8 characters")
        return;
    }
     if (passwordLength > 128)  {
        alert("Password must be less then 129 characters")
        return;
    }
var specialCharacters = [",", "?", ".", ">", "<", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "{", "}", "[", "]", "|", "œ", "∑", "´", "®", "†", "¥", "¨", "ˆ", "ø", "π", "“", "‘", "«", "å", "ß", "∂", "ƒ", "©", "˙", "˙", "∆", "˚", "˚", "¬", "…", "æ", "÷", "≥", "≤", "µ", "˜", "∫", "√", "ç", "≈" ]
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    var wantsNumericCharacters = confirm("Click Ok if you would like to include Numeric Characters.");
    var wantsSpecialCharcters = confirm("Click Ok if you would like to include Special Characters");
    var wantsUpperCaseCharacterers = confrim("Click Ok if you would like to include Upper Case Characters");
    var wantsLowerCaseCharacters = confirm("Click Ok if you would like Lower Case Characters");
        if (wantsNumericCharacters === false && wantsSpecialCharacters == false && wantsUpperCaseCharacters == false &&) {
        alert 
        return;
    }

    var passwordOptions = {
        length: passwordLength, 
        wantsNumericCharacters: wantsNumericCharacters,
        
    }
    return passwordOptions;
}


//User will load page click generate password
//User will be prompted on for password criteria 

//A selction of what criteria can be included will pop up 
//User will then be promtped for lenght from 8 minimum and 128 maximum characters 



//User will be prompted on character types 
//Character types prompt for lowercase, uppercase, numeric, and/or special characters 
//Minimum one character type selected 

function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];
    return randomElement;
}
function generatePassword() {
    var options = choosePasswordOptions();
    
}


//choose.random for the characters 

//Character types prompt for lowercase
//Character types prompt for  uppercase
//Character types prompt for numeric
//Character types prompt for special characters 
//Generate Password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }


generateBtn.addEventListener("click", writePassword);
//Answers should be validated "Password Criteria Accepted" + "Generating Password"
//Password will then be generated and displays via Alert with a copy tag