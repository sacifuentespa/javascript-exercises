const getTheTitles = function(obArray) {
    returnArray = [];
    for(let i=0;i<obArray.length;i++){
        returnArray.push(obArray[i].title);
    }
    return returnArray
};

// Do not edit below this line
module.exports = getTheTitles;
