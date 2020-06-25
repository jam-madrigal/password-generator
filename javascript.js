// All of the possible characters in a password

var options = {

    nums: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    char: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    charCaps: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    spec: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "`", "{", "|", "}", "~"],
}


 

function pwordCriteria() {

// Where to store the prompted variables
var pLength;
var special;
var numbers;
var caps;
var lower;

    // Prompt the user, on click, to pick character count, do not allow < 8 or > 128, then ask about other criteria

    pLength = prompt("Enter password length from 8 to 128");
    // display a random index the number of times of the input, only accepting 8-128
    if (pLength < 8 || pLength > 128 || isNaN(pLength) === true)
    return alert("Password length must be a number between 8 and 128")


    // Ask the user if they want special characters
    special = confirm("Will the password contain special characters?");
    // if this is confirmed include random indexes from spec variable

    // Ask the user if they want numbers
    numbers = confirm("Numbers?");
    // if this is confirmed include random indexes from the nums variable

    // Ask the user if they want capital letters
    caps = confirm("Capital letters?");
    // if this is confirmed include random indexes from the charCaps variable


    // Ask the user if they want lowercase letters
    lower = confirm("Lowercase letters?");
    // if this is confirmed include random indexes from the char variable

    // Prompt the user to select at least one variable if none are selected
    if (special == false && numbers == false && caps == false)
        return alert("Please choose at least one type of character to include.");

     // Generate the password

// The generated password variables to call for the final string
var password = "";
var pSpec;
var pNums;
var pCharCaps;
var pChar;

    // If special characters were selected, choose a random special character
    if (special === true) {
        for (i = 0; i < pLength; i++) {
            pSpec = options.spec[Math.floor(Math.random() * options.spec.length)];
            password += pSpec;
        }       
    }

    // IF the user chose to include numbers, add random numbers
    if (numbers === true) {
        for (i = 0; i < pLength; i++) {
            pNums = options.nums[Math.floor(Math.random() * options.nums.length)];
            password += pNums;
        }  
    }

    // If the user chose to add random capital letters, add random capital letters
    if (caps === true) {
        for (i = 0; i < pLength; i++) {
            pCharCaps = options.charCaps[Math.floor(Math.random() * options.charCaps.length)];
            password += pCharCaps;
        }  
    }

    // Add random lower case letters
    if (lower === true) {
        for (i = 0; i < pLength; i++) {
            pChar = options.char[Math.floor(Math.random() * options.char.length)];
            password += pChar;
        }  
    }
    
 
    // display a string pulling from the selected variable indexes, always including the char index
    var pbox = document.getElementById("pbox");
    pbox.innerHTML = password;

}

