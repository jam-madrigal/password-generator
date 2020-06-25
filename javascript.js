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

    if (pLength < 8 || pLength > 128 || isNaN(pLength) === true)
    return alert("Password length must be a number between 8 and 128")


    // Ask the user if they want special characters
    special = confirm("Will the password contain special characters?");

    // Ask the user if they want numbers
    numbers = confirm("Numbers?");

    // Ask the user if they want capital letters
    caps = confirm("Capital letters?");

    // Ask the user if they want lowercase letters
    lower = confirm("Lowercase letters?");

    // Prompt the user to select at least one variable if none are selected
    if (special == false && numbers == false && caps == false)
        return alert("Please choose at least one type of character to include.");


// Generate the password

// The generated password variables to call for the final string
var passwordArray = [];
var password = "";
var pSpec;
var pNums;
var pCharCaps;
var pChar;

    // If special characters were selected, choose a random special character to add to the resulting password, storing the result of each selected function in an array to pull from later
    if (special === true) {
        for (i = 0; i < pLength; i++) {
            pSpec = options.spec[Math.floor(Math.random() * options.spec.length)];
            passwordArray += pSpec;
        }       
    }

    // If the user chose to include numbers, add random numbers
    if (numbers === true) {
        for (i = 0; i < pLength; i++) {
            pNums = options.nums[Math.floor(Math.random() * options.nums.length)];
            passwordArray += pNums;
        }  
    }

    // If the user chose to add random capital letters, add random capital letters
    if (caps === true) {
        for (i = 0; i < pLength; i++) {
            pCharCaps = options.charCaps[Math.floor(Math.random() * options.charCaps.length)];
            passwordArray += pCharCaps;
        }  
    }

    // If the user chose to add random lowercase letters, add random lowercase letters
    if (lower === true) {
        for (i = 0; i < pLength; i++) {
            pChar = options.char[Math.floor(Math.random() * options.char.length)];
            passwordArray += pChar;
        }  
    }

    
    // Randomize the password from pLength characters after storing it an array
    if (pLength > 0) {
        for (i = 0; i < pLength; i++) {
            password += passwordArray[Math.floor(Math.random() * passwordArray.length + pLength)];
        } 
    }

    // Display, in the "your new password" card on the html page, a string pulling from the selected variable indexes, always including the char index
    var pbox = document.getElementById("pbox");
    pbox.innerHTML = password;
}

