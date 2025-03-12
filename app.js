const value1 = '';
const value2 = '';
const operator = '';

const add = (a, b) => {
    return a + b;
};
/*const addArrays = (arr) => {
    let value = arr.reduce((sum, current) => sum + current, 0);
    return value;
};*/

const subtract = (a, b) => {
    return a - b;
};
/*const subtractArrays = (arr) => {
    let value = arr.reduce((sum, current) => sum - current,);
    return value;
};*/

const multiply = (a, b) => {
    return a * b;
};
/*const multiplyArrays = (arr) => {
    let value = arr.reduce((sum, current) => sum * current, 1);
    return value;
};*/

const divide = (a, b) => {
    return a / b;
};
/*const divideArray = (arr) => {
    let value = arr.reduce((sum, current) => sum / current, );
    return value;
};*/

const operate = (num1, op, num2) => {
    if (op === '+') {
        return add(num1, num2);
    } else if (op === '-') {
        return subtract(num1, num2);
    } else if (op ==='*') {
        return multiply(num1, num2);
    }else if (op === '/') {
        return divide(num1, num2);
    };
};

console.log(operate(12, '/', 4))