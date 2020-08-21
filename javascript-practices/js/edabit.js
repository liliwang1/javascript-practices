//square function
function squared(a) {
    return a * a;
    return Math.pow(a, 2);
    return a ** 2;
}

//To the Power of ... / exponential
function calculateExponent(num, exp) {
    return Math.pow(num, exp);
}
function calculateExponent(num, exp) {
    return exp > 1 ? num * calculateExponent(num, exp - 1) :  num;
}   ///// could you invoke a function inside itself?
function calculateExponent(num, exp) {
    return num ** exp;
}
const calculateExponent = (num, exp) => {
    let newexp = 1;
    for (let i = 0; i < exp; i++) {
        newexp = newexp * num
    }
    return newexp;
}
calculateExponent = Math.pow    //??? how did this work?
function posCom(num) {
    return 2 << (num - 1);
} ///return 2 to the power of num

//evaluate , caution!! should not be used regularlly
function evaluate(equation) {
    return eval(equation);
}

//Create variables from the given array using the ES6 destructuring assignment syntax
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
const arr = [1, 2, 3, 4, 5, 6]
let [a, b] = arr;

const arr = [1, 2, 3, 4, 5, 6]
const [a,b,...rest] = arr;
// is equal to:
// let a = arr[0];
// let b = arr[1];

//A star number is a centered figurate number a centered hexagram (six-pointed star).The nth star number is given by the formula Sn = 6n(n − 1) + 1
function starNumber(a) {
    return 6 * a * (a - 1) + 1;
}

// string concanation
function giveMeSomething(a) {
    return "something " + a;
}
function giveMeSomething(a) {
    return `something ${a}`;
}
function giveMeSomething(a) {
    let b="something ";
    return b.concat(a);
} // would it work if a is not a string?

//string concat
function concatName(firstName, lastName) {
    return lastName + ", " + firstName;
}
function concatName(firstName, lastName) {
    return `${lastName}, ${firstName}`;
}
function concatName(firstName, lastName) {
    var comma = ", ";
    return lastName.concat(comma,firstName);
}
function concatName(firstName, lastName) {
    var a = lastName.concat(', ',firstName)
    return a ;
}

// simplify an if statement
function areaShape(base, height, shape) {
    if (shape === "triangle") {
        return base * height / 2;
    } else {
        return base * height;
    }
}
function areaShape(base, height, shape) {
    return shape === "triangle" ? base * height / 2 : base * height;
}
const areaShape = (b,h,s) => /triangle/.test(s) ? b * h / 2 : b * h;
const areaShape = (base, height, shape) => base * height / (shape === "triangle" ? 2 : 1);

//function returns true if a string is empty and false otherwise
function isEmpty(s) {
    return !s;
}
function isEmpty(s) {
    return s.length === 0;
}
function isEmpty(s) {
    return s === '';
}

// function that accepts an array and returns the last item in the array
function getLastItem(arr) {
    return arr[arr.length - 1]
}
function getLastItem(arr) {
    return arr.pop();
}
const getLastItem = a => a.slice(-1)[0];

//check if a number is odd
function isOdd(num) {
    return !!(num % 2);
}
function isOdd(num) {
    return num % 2 !== 0;
}
function isOdd(num){
    return Math.abs(num % 2) === 1;
}

// string concat
const helloName = name => "Hello " + name + "!";
const helloName = name => `Hello ${name}!`;

//function that takes a word and returns the new word without the first character
function newWord(str) {
    return str.substring(1, str.length);
}
function newWord(str) {
    return str.substring(1);
}
function newWord(str){
    return str.slice(1);
}
function newWord(str) {
    return str.substr(1)
}


//Convert an Array to a String
function arrayToString(arr) {
    return arr.join('');
}
const arrayToString = arr => arr.join('');
//.toString() default comma in between?
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());
// expected output: "1,2,a,1a"

//reverse an array
function reverse(arr) {
    return arr.reverse();
}
function reverse(arr) {
    let result = [];
    for (let i = arr.length -1; i > -1; i--) {
        result.push(arr[i]);
    }
    console.log(...result);
    return result;
}
function reverse(arr) {
    let word = [];
    for(letter of arr){
        word.unshift(letter)
    }
    return word
}

// odd or even number
function isEvenOrOdd(num) {
    if (num % 2 === 0) {  //if((!num % 2))
        return "even";
    } else {
        return "odd";
    }
}
function isEvenOrOdd(num) {
    return num % 2 ? 'odd' : 'even';
}
isEvenOrOdd = (n) => [`even`, `odd`][n & 1];

//function that returns the opposite of the given boolean, as a number
//flipBool(true) ➞ 0
// flipBool(false) ➞ 1
// flipBool(1) ➞ 0
// flipBool(0) ➞ 1
function flipBool(b) {
    return Number(!b);
}
function flipBool(b) {
    return b === true || b === 1 ? 0: 1;
}
const flipBool=b=> b ? 0 : 1;
function flipBool(b) {
    return (!b)*1;
}
flipBool=b=>1-b
const flipBool = b => b ^ 1;  /// what is this???

//difference between parseInt() and Math.round()
parseInt(3.7)  // result is 3
Math.round(3.7)  //result is 4

//function to check if an array has a particular element
function check(arr, el) {
    return arr.includes(el)
}
function check(arr, el) {
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === el){
            return true;
        }
    }
    return false;
}
function check(arr, el) {
    return arr.indexOf(el) !== -1;  // >= 0;
}

//concatenate two arrays
function concat(arr1, arr2) {
    return [...arr1,...arr2]
}
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}
function concat(arr1, arr2) {
    for (item of arr2){
        arr1.push(item)
    }
    return arr1
}
function concat(arr1, arr2) {
    for(let i=0;i<= arr2.length-1;i++)
    {
        arr1.push(arr2[i]);
    }
    return arr1;
}

//reverse a string
function solution(str){
    return str.split('').reverse().join('');
}
const solution = s => [...s].reverse().join('');
function solution(s){
    var o = '';
    for (var i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}
function solution(str){
    return str.length > 0 ? solution(str.substring(1)) + str.charAt(0) : '';
}

// adding numbers from 1 to num
// recursion
function addUp(num) {
    if(num == 1) return num;
    return num + addUp(num - 1);
}




