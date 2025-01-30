const removeFromArray = function(arr, ...removeElement) {
    for(let i = removeElement.length - 1; i>=0; i--){
        while(arr.indexOf(removeElement[i]) != -1)
            arr.splice(arr.indexOf(removeElement[i]), 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
