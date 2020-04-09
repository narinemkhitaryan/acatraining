/*
 1.	Given a number. Print “odd” if the number is odd and “even” if it’s even
 */

function oddOrEven(num) {
    if (num % 2 === 0) {
        console.log('odd');
    } else {
        console.log('even');
    }
};
oddOrEven(22);

/*
 2.	Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0
 */

function division(num1, num2) {
    num1 % num2 === 0 ? console.log(1) : console.log(0);
}

division(2, 4);

/*
3.	Given two variables, which are the angles of a triangle. Find the third angle of the triangle.
(Sum of the angles of a triangle equals 180 degrees).
*/
angle3 = (angle1, angle2) =
>
document.write(180 - angle1 - angle2);
angle3(40, 95);

/*
4.	Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).
*/
function concat(num) {
    return (String(num) + String(2 * num) + String(3 * num))
}

document.write(concat(5));

/*
5.	Given a positive integer. Bring the last digit of the number to the beginning.
Print the new number. If the last digit of the inserted number is 0, number remains the same.
*/

let number;
if (Number.isInteger(number) && (number > 0)) {
    if (number % 10 !== 0 && Math.floor(number / 10) !== 0) {
        document.write(lastDigit(number));
    } else {
        document.write(number);
    }
} else {
    document.write('Please, input the positive integer');
}

// last digit function
function lastDigit(num) {
    return (String(num % 10) + String(Math.trunc(num / 10)))
}

/*
6.	Given five numbers as input. Calculate and print the average of the numbers(without using arrays).
*/
function calcAverage(num1, num2, num3, num4, num5) {
    document.write((num1 + num2 + num3 + num4 + num5) / 5)
}

calcAverage(2, 3, 0, 0, 0)

/*
7.	Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
*/

/*
8.	Given an age, figure out whether someone is a baby(1 months - 12 months),
toddler (1 year - 2 years), child(3 years - 12 years ),
teenager(13 years - 17 years) or adult(18 years and more ). Also check that age in months is between 1 and 12.
*/

let yourAge = +prompt('PLease enter your age', 'Age should be positive number');
let type = prompt('Your age is year or month');
// Convert years to months
if (type === 'year') {
    yourAge = yourAge * 12;
}

function getAge(age) {
    if (age >= 1 && age <= 12) {
        return 'baby'
    } else if (age > 12 && age < (3 * 12)) {
        return 'toddler'
    } else if (age >= (3 * 12) && age < (13 * 12)) {
        return 'child'
    } else if (age >= (13 * 12) && age < 18 * 12) {
        return 'teenager'
    } else if (age >= 18 * 12) {
        return 'adult'
    } else {
        return 'Incorrect info'
    }
}

document.write(getAge(yourAge));

/*
9.	Given three numbers. Sort them by the ascending order.
*/

function sortAsc3(a, b, c) {
    max = Math.max(a, b, c);
    min = Math.min(a, b, c);
    let k = a + b + c;
    a = min;
    b = k - min - max;
    c = max;
    document.write(`${a}, ${b}, ${c}`)

}

sortAsc3(980, 30, 0)

/*
10.	Percentage marks obtained by a student in three exams are to be entered to a computer. An indication of Pass or Fail is given out after
the three marks are entered. The criteria for passing are as follows:
a.	A student passes if all three examinations are passed.
b.	Additionally a student may pass if only one subject is failed but the overall average is greater than or equal to 50.
The pass mark for an individual subject is 40.
*/
let exam1 = +prompt('Exam1');
let exam2 = +prompt('Exam2');
let exam3 = +prompt('Exam3');

function calcAverage(num1, num2, num3) {
    let val = (num1 + num2 + num3) / 3;
    return val;
}

function passFail(e1, e2, e3) {
    if (Math.min(e1, e2, e3) >= 40 || calcAverage(e1, e2, e3) >= 50) {
        document.write('Passed')
    } else {
        document.write('Fail')
    }
}

passFail(exam1, exam2, exam3)

/*
12.	Input three numbers a, b, c respectively, where a is a non zero number and write a program
  to solve quadratic equations: 〖ax〗^2+ bx+c=0. (Hint: use Math.pow or Math.sqrt).
*/

let p1 = +prompt('a')
let p2 = +prompt('b')
let p3 = +prompt('c')

if (p1 === 0) {
    document.write(`${p1} shold be > 0`);
} else {

    function quadratic(a, b, c) {
        let disc = Math.pow(b, 2) - 4 * a * c;
        if (disc > 0) {

            let x1 = (-b - Math.sqrt(disc)) / 2 * a;
            let x2 = (-b + Math.sqrt(disc)) / 2 * a;

            return `x1 = ${x1}, x2 = ${x2}`;

        } else if (disc = 0) {
            let x1 = (-b) / 2 * a;
            return `x1 = x2 = ${x1}`;
        } else {
            return `x1 and  x2 are imaginary`
        }
    }

    document.write(quadratic(p1, p2, p3));
}

/*
13.	Given the following code rewrite it using only two if operators. (Hint: use logical operators).

var n = +prompt();
var i = 0;
var j = 0;

if (n%2 === 0) {
  if (!Math.floor(n/10)) {
    i += 1;
  }

}
if (n%3 === 0) {
  if (n%10 === 1) {
    j+=1;
  }
}
*/

var n = +prompt();
var i = 0;
var j = 0;

if ((n % 2 === 0) && (!Math.floor(n / 10))) {
    i += 1;
}
if ((n % 3 === 0) && (n % 10 === 1)) {
    j += 1;
}

/*
14.	Insert a digit and a number. Check whether the digits contains in the number or not.
*/
let digit = prompt('Insert a digit');
let number = prompt('insert a number');
let con = number.indexOf(digit);
if (con >= 0) {
    document.write("Yes")
} else {
    document.write("No")
}

/*
15.	Enter a number. Reverse its first and last digits. Print the new number.
*/

function enteredNum(myNum) {
    let leng = String(myNum).length;
    let first = math(0, myNum);
    let last = mathReverse(0, myNum);
    let mid = myNum - (first * Math.pow(10, (leng - 1)));
    let midFinal = Math.floor(mid / 10);
    let myFinalNum = (last * Math.pow(10, (leng - 1))) + (midFinal * 10) + first;

    return (myFinalNum);

    function math(ntn, number) {
        var len = Math.floor(Math.log(number) / Math.LN10) - ntn;
        return ((number / Math.pow(10, len)) % 10) | 0;
    }

    function mathReverse(ntn, number) {
        return Math.floor((number / Math.pow(10, ntn)) % 10);
    }

}

document.write(enteredNum(34));

/*
17.	Write a program which will compute the area of a rectangular or a triangle after
prompting the user to type the name of the figure name. Also check that entered numbers are positive.
For the triangle entered numbers are height and and base.
*/

type = prompt('Enter the figure name', 'triangle or rectangle');
let v1 = 'Parametr 1';
let v2 = 'Parametr 2'
par1 = +prompt(v1);
par2 = +prompt(v2);

if (par1 <= 0 || par2 <= 0) {
    alert(`Invalid value! ${v1} and ${v2} should be greather than 0`)
} else if (type === 'triangle') {
    document.write(`Area of triangle is ${triangleArea(par1, par2)}`)
} else if (type === 'rectangle') {
    document.write(`Area of rectangle is ${rectangleArea(par1, par2)}`)
} else {
    document.write('You are soo tired, take a nap :)')
}

function rectangleArea(w, l) {
    let a = w * l;
    return a;
}

function triangleArea(b, h) {
    let a = (b * h) / 2;
    return a;
}



