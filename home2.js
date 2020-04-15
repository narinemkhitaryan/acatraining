/*
1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
*/
function isPrime(n) {
  for (let i = 2; i <= Math.round(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return "no";
    } else {
      return "yes";
    }
  }
}

console.log(isPrime(127));

/*
2. Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
*/

//Missing number >= 0 check

function myFib(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}
console.log(myFib(9));

/*
3. Given a number n( n> 0 ). Print Fibonacci series up to n.
*/
let myNum = +prompt("instert a number");
if (myNum <= 0) {
  console.log("Input an integer value > 0");
} else {
  console.log(myFib(myNum));
}

function myFib(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    if (arr[i - 1] + arr[i - 2] < n) {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
  }
  return arr;
}

/*
4. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by
the sum, print the quotient, otherwise print the remainder.
*/
let quotOrRemind;
if (quotOrRemind === 0) {console.log(`Cannot calculate.`)} else {
let toStrNum = String(quotOrRemind);
// Separate each character from number (which is already converted to string)
let myArray = toStrNum.split("");
let digitsSum = 0;
let digitsProd = 1;
for (let i = 0; i < myArray.length; i++){
    digitsSum += Number(myArray[i]);
    digitsProd *= Number(myArray[i]);
}
digitsProd % digitsSum === 0 ? console.log(`Quotient is ${digitsProd / digitsSum} `) :
(`Remainder is ${digitsProd % digitsSum}`);
}

/*
5. Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num
length over the specified interval (from a to b).
*/
let randomArr = [];
let len = 7;
let start = 2;
let end = 13;

while (randomArr.length < len) {
    randomArr.push(getRndNum(start, end));
}
console.log(randomArr);
//Get random decimal number in inetrval min to maximum
//with toFixed(1) function let 1 char after point.
function getRndNum(min, max) {
    return (Math.random() * (max - min) + min).toFixed(1);
}

/*
6. Given an array of numbers. Find the index of the second maximum element.
*/
let myArray = [-23, -44445, 2, 1234];
let max1index = myArray.indexOf(Math.max(...myArray));
myArray[max1index] = null;
let max2index = myArray.indexOf(Math.max(...myArray));

console.log(max2index);


/*
7. Given an array of numbers, padding amount and repeat count. Pad the array in the following way:
the padding amount specifies how many elements should be taken from the array edges,
the repeat amount specifies how many times the pad should be repeated.
Also, you should check that padding amount <= length of array.
*/

let givenArr = [1, 2, 33, 44, 55, 6, 7];
let start = [];
let end = [];
let padAmount = 2;
let repeatAm = 2;

if (padAmount > givenArr.length) {
  console.log("Invalid padding amount");
} else {
  // padding from the start of given array
  for (let i = 0; i < padAmount; i++) {
    start.push(givenArr[i]);
  }
  // padding from the end of given array
  for (let i = givenArr.length - padAmount; i < givenArr.length; i++) {
    end.push(givenArr[i]);
  }

  for (let i = 0; i < repeatAm; i++) {
    givenArr.unshift(start);
    givenArr.push(end);
  }
  alert(givenArr);
}
