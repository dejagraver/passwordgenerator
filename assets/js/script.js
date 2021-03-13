//Assignment code here
//Write function to start password generator
//User will load page click generate password
//User will be prompted on for password criteria 
//A selction of what criteria can be included will pop up 
//User will then be promtped for lenght from 8 minimum and 128 maximum characters 
//User will be prompted on character types 
//Character types prompt for lowercase, uppercase, numeric, and/or special characters 
//Minimum one character type selected 
//Character types prompt for lowercase
//Character types prompt for  uppercase
//Character types prompt for numeric
//Character types prompt for special characters 
//Generate Password 


//Create Arrays alongside possibilies IF criteria asked for isnt selected. 
var generateBtn = document.querySelector("#generate");

var numericCharacters = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialCharacters = [",", "?", ".", ">", "<", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "{", "}", "[", "]", "|", "œ", "∑", "´", "®", "†", "¥", "¨", "ˆ", "ø", "π", "“", "‘", "«", "å", "ß", "∂", "ƒ", "©", "˙", "˙", "∆", "˚", "˚", "¬", "…", "æ", "÷", "≥", "≤", "µ", "˜", "∫", "√", "ç", "≈" ]
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

function choosePasswordOptions() {
    criteriaPrompt = confirm("Welcome to the Password Generator! You have the option of including Numeric characters, Special Characters, Uppercase letters, and Lowercase letters. You must choose a mininmum of one character type. You can only choose a password length between 8 and 128! ")
 var passwordLength = parseInt(prompt("How many charcters long do you want?"));
    if (isNaN(passwordLength)) {
        window.alert ("Password Length must be between 8 and 128!");
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
    // invoke new prompt between conditions

    //Confirm Character Type Selection
    var wantsNumericCharacters = confirm("Click Ok if you would like to include Numeric Characters.");
    if (wantsNumericCharacters === true) {
        alert("Numeric Characters Selected");
    } else if (!wantsNumericCharacters === false) {
        alert("Numeric Characters NOT Selected");
    } 

    var wantsSpecialCharacters = confirm("Click Ok if you would like to include Special Characters");
    if (wantsSpecialCharacters === true) {
        alert("Special Characters Selected");
    } else if (!wantsSpecialCharacters === false){
        alert("Special Characters NOT Selected");
    }

    var wantsUpperCaseCharacters = confirm("Click Ok if you would like to include Upper Case Characters");
        if (wantsUpperCaseCharacters === true) {
            alert("Uppercase Characters Selected");
        } else if (!wantsUpperCaseCharacters === false) {
            alert("Uppercase Characters NOT Selected");
        }
     

    var wantsLowerCaseCharacters = confirm("Click Ok if you would like Lower Case Characters");
        if (wantsLowerCaseCharacters === true) {
            alert("Lowercase Characters Selected");
        } else if (!wantsLowerCaseCharacters === false) {
            alert("Lowercase Characters NOT Selected");
        }

        if (wantsNumericCharacters === false && wantsSpecialCharacters === false && wantsUpperCaseCharacters === false && wantsLowerCaseCharacters === false) {
        alert("Error, Please select a minimum of one Character Type.")
        }
        


    //Password Options 
    var passwordOptions = {
        length: passwordLength, 
        numbers: wantsNumericCharacters,
        specialCharacters: wantsSpecialCharacters,
        uppercase: wantsUpperCaseCharacters,
        lowercase: wantsLowerCaseCharacters,  
    }
    return passwordOptions;

}


function getRandom(arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var randomElement = arr[randomIndex];
    return randomElement;
}

function generatePassword() {
    var finalPassword = []
    var options = choosePasswordOptions(); 
    console.log(options) 
         if (options.numbers) {
            finalPassword.push(...numericCharacters)
        } if (options.specialCharacters) {
            finalPassword.push(...specialCharacters)
        } if (options.uppercase) {
            finalPassword.push(...upperCaseCharacters)
        } if (options.lowercase) {
            finalPassword.push(...lowerCaseCharacters)
        }
    var randomElement = getRandom(finalPassword)
    //youre declaring the varible but not using it anywhere 
    return finalPassword}
    


//choose.random for the characters 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
  generateBtn.addEventListener("click", writePassword); 

//Answers should be validated "Password Criteria Accepted" + "Generating Password"
//Password will then be generated and displays via Alert with a copy tag91