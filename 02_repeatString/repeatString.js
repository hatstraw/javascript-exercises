const repeatString = function(string='', num=1) {
    let repeatedString = '';
    if (num < 0) return 'ERROR';

    while(num){
        repeatedString += string;
        num--;
    }
    return repeatedString;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
