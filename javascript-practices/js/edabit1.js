/* 1 Is it True?
In this challenge you will be given a relation between two numbers, written as a string.
Here are some example inputs:
"2 = 2", "8 < 7", "5 = 13", "15 > 4"
Write a function that determines if the relation is true or false.
Examples
isTrue("2 = 2") ➞ true
isTrue("8 < 7") ➞ false
isTrue("5 = 13") ➞ false
isTrue("15 > 4") ➞ true
Tests will only have three types of relations: =, >, and <
Many approaches work here, but the eval() function is particularly useful! */
function isTrue(str) {
    let arr = modifyCompare(str).split(' ');
    if(Number(arr[0]) === Number(arr[2]) && arr[1] === '=') {
        return true;
    } else if(Number(arr[0]) > Number(arr[2]) && arr[1] === '>') {
        return true;
    } else if(Number(arr[0]) < Number(arr[2]) && arr[1] === '<') {
        return true;
    } else {
        return false;
    }
}
function modifyCompare(str) {
    return str.split('')
        .map(ele => '>=<'.includes(ele)? ` ${ele} `: ele)
        .join('');
}
// simplify
function isTrue(str) {
    let arr = modifyCompare(str).split(' ');
    if(Number(arr[0]) === Number(arr[2]) && arr[1] === '=') {
        return true;
    } else if(Number(arr[0]) > Number(arr[2]) && arr[1] === '>') {
        return true;
    } else return Number(arr[0]) < Number(arr[2]) && arr[1] === '<';
}
function modifyCompare(str) {
    return str.split('')
        .map(ele => '>=<'.includes(ele)? ` ${ele} `: ele)
        .join('');
}
// other solutions
function isTrue(relation) {
    return eval(relation.replace('=', '==='))
}


/* 2 How Much is True?
    Create a function which returns the number of true values there are in an array.
    Examples
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0

Return 0 if given an empty array.
    All array items are of the type bool (true or false).*/
function countTrue(arr) {
    let newArr = arr.filter(function (ele) {
        return ele === true;
    })
    return newArr.length;
}
// simplify
function countTrue(arr) {
    let newArr = arr.filter(e => e === true)
    return newArr.length;
}
// other solutions
const countTrue = (arr) => arr.filter(Boolean).length; //???
function countTrue(arr) {
    return arr.filter(x => x == true).length
}

/* 3 A Redundant Function
Write a function redundant that takes in a string str and returns a function that returns str.
    Examples
const f1 = redundant("apple")
f1() ➞ "apple"
const f2 = redundant("pear")
f2() ➞ "pear"
const f3 = redundant("")
f3() ➞ ""
Your function should return a function, not a string. */
function redundant(str) {
    return function () {
        return str;
    }
}
// simplify
function redundant(str) {
    return () => str;
}
// other solutions
const redundant = str => () => str;

/* 4 Dashed Vowels
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).
Examples
dashed("Edabit") ➞ "-E-d-a-b-i-t"
dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"
dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
A string can contain uppercase and lowercase vowels.
Y is not considered a vowel. */
// failed attempt:
/* function dashed(str) {
    let vowels = 'aeiouAEIOU';
    let newStr = '';
    for(let i = 0; i < str.length; i++) {
        if(vowels.indexOf(str[i]) >= 0) {
            newStr[i] = '-' + str[i] + '-';
            //str.replace('str[i]', '-str[i]-');
            //str[i] = '-' + str[i] + '-';
            //str[i] = str[i].concat('-', str[i], '-');
        } else {
            newStr[i] = str[i];
        }
    }
    return newStr;
} */
function dashed(str) {
    return str.split('')
        .map(function (ele) {
            if ('aeiouAEIOU'.includes(ele)) {
                return `-${ele}-`;
            } else {
                return ele;
            }
        })
        .join('');
}
// simplify
function dashed(str) {
    return str.split('')
        .map(ele => {
            if ('aeiouAEIOU'.includes(ele))
                return `-${ele}-`;
            else
                return ele;
        })
        .join('');
}
function dashed(str) {
    return str.split('')
              .map(ele => 'aeiouAEIOU'.includes(ele)? `-${ele}-`: ele)
              .join('');
}
// other solutions
const dashed = str => str.replace(/([aeiou])/gi, '-$1-')
const dashed = str => str.replace(/[aeiou]/gi, '-$&-');
const dashed = str => str.replace(/[aeiou]/gi, m => `-${m}-`);
function dashed(str) {
    return [...str].map((x) => (/[aeiou]/i.test(x) ? `-${x}-` : x)).join('');
}
function dashed(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    return str.split("").map(char => vowels.includes(char.toLowerCase()) ? `-${char}-` : char).join("");
}
function dashed(str) {
    let vow = 'aeiouAEIOU'
    let s = ''
    for (let i = 0; i < str.length; i++) {
        if (vow.includes(str[i])) s += '-' + str[i] + '-'
        else s += str[i]
    }
    return s
}
function dashed(str) {
    vowels = "aiueoAIUEO"
    str2 = ""
    for (x = 0; x < str.length; x += 1)
        if (vowels.includes(str.charAt(x)))
            str2 += '-' + str.charAt(x) + '-'
        else
            str2 += str.charAt(x)
    return str2
}
function dashed(str) {
    return str.split('')
        .map(el => el.match(/[aeiou]/i) ? '-' + el + '-' : el)
        .join('');
}
function dashed(str) {
    let arr = str.split("");
    return arr.map(item => /[aeiou]/i.test(item)? `-${item}-`: item).join("");
}
function dashed(str) {
    return str
        .split("")
        .map(e => ("ouieaOUIEA".includes(e)?"-"+e+"-":e))
        .join("")
}

/* 5 Converting Objects to Arrays
Write a function that converts an object into an array, where each element represents a key-value pair.
Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
toArray({}) ➞ []
Return an empty array if the object is empty. */
function toArray(obj) {
    return Object.entries(obj);
}
// other solutions
function toArray(obj) {
    return Object.keys(obj).map(x => [x, obj[x]]);
}
function toArray(obj) {
    var a = [];
    for(var i in obj){
        a.push([i,obj[i]]);
    }
    return a;
}
function toArray(obj) {
    let keys=[];
    for(let key in obj){
        keys.push(key)
    }
    return keys.map(cur=>[cur,obj[cur]])
}
function toArray(obj) {
    var finalArr = []
    for (let [key, value] of Object.entries(obj)) {
        finalArr.push([key, value])
    }
    return finalArr
}
function toArray(obj) {
    let result = [];
    Object.keys(obj).forEach(el => result.push([el, obj[el]]));
    return result;
}
function toArray(obj) {
    let names = Object.getOwnPropertyNames(obj)
    console.log(names);
    let arr=[];
    for(let i=0;i<names.length;i++){
        arr.push([names[i], obj[names[i]]]);
    }
    return arr;
}
function toArray(obj) {
    let keys = Object.keys(obj);
    let vals = Object.values(obj);
    let ans = [];
    for(let i = 0; i < keys.length; i++){
        ans.push([keys[i], vals[i]]);
    }
    return ans;
}

/* 6 Array of Multiples
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.
Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
Notice that num is also included in the returned array. */
function arrayOfMultiples (num, length) {
    let newArr = [];
    for(let i = 0; i < length; i++) {
        newArr[i] = num * (i + 1); // newArr.push(num * (i + 1));
    }
    return newArr;
}
// other solutions
const arrayOfMultiples = (num, length) =>
    Array.from({ length }, (_, i) => num * (i + 1));
function arrayOfMultiples (num, length) {
    return [...Array(length)].map((_, i) => num * (i + 1))
}
arrayOfMultiples = (n, l)  => [...Array(l).keys()].map(x => (x + 1) * n)
const arrayOfMultiples = (num, length) =>
    Array(length)
        .fill()
        .map((_,i) => num * (i+1))
const arrayOfMultiples = (n,l) => Array(l).fill(n).map((v,i) => v*(i+1))

/* 7 Convenience Store
Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
Examples
changeEnough([2, 100, 0, 0], 14.11) ➞ false
changeEnough([0, 0, 20, 5], 0.75) ➞ true
changeEnough([30, 40, 20, 5], 12.55) ➞ true
changeEnough([10, 0, 0, 50], 3.85) ➞ false
changeEnough([1, 0, 5, 219], 19.99) ➞ false
quarter: 25 cents / $0.25
dime: 10 cents / $0.10
nickel: 5 cents / $0.05
penny: 1 cent / $0.01 */
function changeEnough(change, amountDue) {
    let amount = change[0] * 25 + change[1] * 10 + change[2] * 5 + change[3];
    return amount >= amountDue * 100;
}
// other solutions
function changeEnough(change, amountDue) {
    const v = [.25,.10,.05,.01];
    return change.reduce((acc,a,i) => { return acc + a*v[i]}, 0) >= amountDue
}
function changeEnough(change, amountDue) {
    let moneyOrder = [0.25 , 0.1 , 0.05 , 0.01];
    let money = change.map((coinCount , index) => coinCount * moneyOrder[index] ).reduce((a,b)=> a+b);
    return money >= amountDue;
}

/* 8 Number of Boomerangs
A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.
Some boomerang examples:
[3, 7, 3], [1, -1, 1], [5, 6, 5]
Create a function that returns the total number of boomerangs in an array.
To illustrate:
[3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
Be aware that boomerangs can overlap, like so:
[1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
Examples
countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0
[5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last. */
function countBoomerangs(arr) {
    let count = 0;
    for (let i = 1; i < arr.length -1; i++) {
        if(arr[i - 1] === arr[i + 1] && arr[i - 1] !== arr[i]) {
            count++;
        }
    }
    return count;
}
// other solutions
function countBoomerangs(arr) {
    return arr.reduce((acc , e , index) => acc + (e === arr[index+2] && e!== arr[index+1]) , 0);
}
const countBoomerangs = a => a.filter((_,i) => a[i] === a[i+2] && a[i+1] !== a[i]).length
const countBoomerangs = arr =>
    arr.slice(2).reduce((total, last, i) => {
        const [first, middle] = [arr[i], arr[i + 1]];
        return total + Number(first === last && first !== middle);
    }, 0);
function countBoomerangs(arr) {
    const isBoom = (a, b, c) => a === c && a !== b;
    return arr.reduce((a, v, i) => a + (arr.slice(i, i + 3).length === 3 && isBoom(...arr.slice(i, i + 3))), 0);
}

/* 9 Seven Boom!
Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".
Examples
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!" */
function sevenBoom(arr) {
    return arr.join('').includes('7') ? 'Boom!': 'there is no 7 in the array';
}
// other solutions
const sevenBoom = (arr) => {
    return arr.toString().includes('7') ? "Boom!":"there is no 7 in the array"
}
const sevenBoom = (arr) => arr.join("").indexOf('7') >= 0 ? "Boom!" : "there is no 7 in the array";
const sevenBoom = arr => /7/.test(arr) ? 'Boom!' : 'there is no 7 in the array';
function sevenBoom(arr) {
    return arr.some(e=>String(e).includes('7'))?'Boom!':'there is no 7 in the array';
}
function seven(n){
    return /7/g.test(String(n));
}
function sevenBoom(arr) {
    return arr.filter(x => seven(x)).length > 0 ?
        "Boom!" : "there is no 7 in the array";
}
const sevenBoom= arr => arr.find(e=>(""+e).includes("7"))?"Boom!":"there is no 7 in the array";
function sevenBoom(arr) {
    return arr.some(x => /7/.test(x)) ? 'Boom!' : 'there is no 7 in the array';
}

/* 10 Happy Numbers
Given any number, we can create a new number by adding the sums of squares of digits of that number. For example, given 203, our new number is 4 + 0 + 9 = 13. If we repeat this process, we get a sequence of numbers:
203 -> 13 -> 10 -> 1 -> 1
Sometimes, like with 203, the sequence reaches (and stays at) 1. Numbers like this are called happy.
Not all numbers are happy. If we started with 11, the sequence would be:
11 -> 2 -> 4 -> 16 -> ...
This sequence will never reach 1, and so the number 11 is called unhappy.
Given a positive whole number, you have to determine whether that number is happy or unhappy.
Examples
happy(203) ➞ true
happy(11) ➞ false
happy(107) ➞ false
You can assume (and it is actually true!) that all positive whole numbers are either happy or unhappy. Any happy number will have a 1 in its sequence, and every unhappy number will have a 4 in its sequence.
The only numbers passed to your function will be positive whole numbers. */
function happy(n) {
    if (n === 1) {
        return true;
    } else if(n === 4) {
        return false;
    } else {
        var newN = n.toString().split('').reduce((acc, ele) =>  acc + ele * ele, 0);
        return happy(newN);
    }
}
// other solutions
function happy(n) {
    if (n == 1) return true;
    if (n == 4) return false;
    return happy([...n.toString()]
        .reduce((sum, v) => Math.pow(Number(v), 2) + sum, 0))
}
function happy(n) {
    while (n !==4 && n !==1){
        n=[...''+n].map(e=>Math.pow(e,2)).reduce((acc, cur)=>acc+ cur,0)
    }
    return n === 1;
}
const sum = arr => arr.reduce((total, num) => total + num, 0);
const getDigits = num => String(num).split('').map(Number);
const happy = num => {
    if (num === 1) return true;
    if (num === 4) return false;
    return happy(sum(getDigits(num).map(digit => Math.pow(digit, 2))));
};
function happy(n) {
    if (n == 1) return true;
    if (n == 4) return false;
    return happy(n.toString().split("").map(w=>Math.pow(parseInt(w), 2)).reduce((a,b)=>a+b));
}
function happy(n) {
    while(true){
        if(n == 1) return true;
        if(n == 4) return false;
        n = n.toString().split("").reduce(function(accum,x){
            return accum + (x*x);
        }, 0);
    }
}
const happy=n=> {
    const work=x=>[...""+x].map((e)=>e*e).reduce((acc,next)=>acc+next);
    let rdc=work(n);
    return rdc==1?true:rdc==4?false:happy(rdc)
}
function happy(n) {
    if (n === 1) {
        return true
    } else if (n === 4) {
        return false
    }
    newN = String(n).split('').reduce((sum, curr) => sum + Math.pow(parseInt(curr), 2), 0)
    return happy(newN)
}

