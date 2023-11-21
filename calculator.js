const sum = function(a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};

const multiply = function(a, b){
    return a * b;
};

const divide = function(a, b){
    return a / b;
};

const modulus = function(a, b){
    return a % b;
};

const even = function isEven(n){
    return n % 2 === 0;
};

const odd = function isOdd(n){
    return Math.abs(n % 2) == 1;
};

module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
