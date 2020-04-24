
/*
1. Write a recursive function to determine whether all digits of the number are odd or not.
*/
//try this in console, then change comparison operators from == to ===, you'll se stack overflow, why?

//recursive function, which defines is the given number odd or even?
function oddOrEven(num) {
  if (num == 0) {
    return "even";
  } else if (num == 1) {
    return "odd";
  } else return oddOrEven(num - 2);
}
// allDigitsOddOrEven function defines are all digits odd or even or not?
function allDigitsOddOrEven(n, oddCount = 0, evenCount = 0) {
  let arr = [];
  let message;

  // create an array from given number, where each element is a digit of number
  arr = String(n).split("");
  for (let i = 0; i < arr.length; i++) {
    if (oddOrEven(arr[i]) === "even") {
      evenCount++;
    } else {
      oddCount++;
    }
  }
  // compare oddCount and evenCount with array length (wich is my number length)
  if (oddCount == arr.length || evenCount == arr.length) {
    message = "True";
  } else {
    message = "False";
  }
  return message;
}
allDigitsOddOrEven(155);

/*
2. Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1)․
*/

function arrMin(arr) {

    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        min = arr[i + 1];
      }

    if (min > 0) {
      return min;
    } else {
      arr.splice(arr[arr.indexOf(min) - 1], 1);
      let temp = arr;
      return (min = arrMin(temp));
    }
    }
  }
   arrMin([-1, 1, -13, -10]);


/*
3. Write a recursive function which receives a number as arguments and returns the
fibonacci sequence as array.
*/
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

function fibPrint(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    if (fibonacci(i) <= num) {
      arr.push(fibonacci(i));
    }
  }
  return arr;
}
fibPrint(7);

/*
4. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays).
*/


/*
5. Given a number. Write a function that calculates its sum of the digits and if that sum
has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
return the result.
*/
function sumOfDigits(num, index = 0, sum = 0) {
    // given number convert to an array
    let array = num.toString().split("");
    if (index === array.length) {
      return sum;
    } else {
      let temp = sumOfDigits(num, index + 1, +array[index] + sum);
      // need this loop to calculate sum till one digit
      while (String(temp).length >= 2) {
        temp = sumOfDigits(temp);
      }
      return temp;
    }
  }

  console.log(sumOfDigits(2237));
