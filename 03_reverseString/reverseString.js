const reverseString = function(word) {
    let output = '';
    for (let i = word.length-1; i >= 0; i--) {
        output += word[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
