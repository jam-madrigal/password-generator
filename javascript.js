// All of the possible characters in a password

var options = {

    nums: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    char: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    charCaps: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    spec: ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "`", "{", "|", "}", "~"],
}


function pword() {
    // Prompt the user to pick character count, do not allow < 8 or > 128, then ask about other criteria

    length = prompt("Enter password length from 8 to 128");
// display a random index the number of times of the input, only accepting 8-128
    if (length < 8 || length > 128)
    return alert("Password length must be between 8 and 128 characters")


    special = confirm("Will the password contain special characters?");
// if this is confirmed include random indexes from spec variable

    numbers = confirm("Numbers?");
// if this is confirmed include random indexes from the nums variable

    caps = confirm("Capital letters?");
    // if this is confirmed include random indexes from the charCaps variable

    // display a string pulling from the selected variable indexes, always including the char index

    // Prompt the user to select at least one variable if none are selected
    if ( special == false && numbers == false && caps == false)
        return alert("Please choose at least one type of character to include.");
    
    

}
