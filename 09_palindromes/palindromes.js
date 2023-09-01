const reverseString = function (string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]; 
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;


const palindromes = function (word) {
    word = word.toLowerCase().replaceAll(' ','').replaceAll('.', '').replaceAll(',','').replaceAll('!','');
    reversedString = reverseString(word);
    if (word === reversedString){
        return true;
    }
    return false;
};


// Do not edit below this line
module.exports = palindromes;
