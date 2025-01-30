const sumAll = function(num1, num2) {
    if(!Number.isInteger(num1) || num1 < 0 || !Number.isInteger(num2) || num2 < 0)
        return 'ERROR';

    max = Math.max(num1, num2);
    min = Math.min(num1, num2);

    // Gauss childhood story, n(n+1) / 2
    return max*(max+1) / 2;
};

// Do not edit below this line
module.exports = sumAll;
