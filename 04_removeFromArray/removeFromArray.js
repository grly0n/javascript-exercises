const removeFromArray = function(array) {
    let itemsToRemove = Array.from(arguments).slice(1, arguments.length);
    for (let i = 0; i < array.length; i++) {
        if (itemsToRemove.includes(array[i])) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
