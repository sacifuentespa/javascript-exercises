const removeFromArray = function () {
    let originArray = arguments[0];
    let toRemove = Array.from(arguments).slice(1);

    for (let i = 0; i < toRemove.length; i++) {
        if (originArray.indexOf(toRemove[i]) !== -1) {
            originArray.splice(originArray.indexOf(toRemove[i]), 1)
        }
    }
    return originArray
};


// Do not edit below this line
module.exports = removeFromArray;


