
//1. Given an array. Determine whether it consists only from unique elements or not.

function areElementsUnique(givenArray) {
    let containDuplicates = false;
    while (givenArray.length > 0 && containDuplicates === false) {
 // pop last element of array and check whether it contains in array or not
        let temp = givenArray.pop();
        containDuplicates = givenArray.includes(temp);
    }
    return (containDuplicates === false ? "Array elements is unique" : "Array contains duplicates");
}

console.log(areElementsUnique([3, 1, 6, "a", 16, "a"]));

//2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.

function sumOfNums(arr, sum = 0 ) {
    for (let i = 0; i < arr.length; i++) {
        if (Math.sqrt(arr[i]) % 2 === 0) {
            sum = sum + arr[i]
        }
    }
    return sum
}
console.log(sumOfNums([4, 5, 9, 16]));

//3. Check whether string is palindrome, or not.

function isStringPolindrom(myString) {
    //split string with spaces, then join, then split every char, first split needs in case of white spaces on string.
    let strToArray = myString.split(' ').join('').split('');
    let count = 0;
    for (let i = 0, j = strToArray.length - 1; i <= strToArray.length / 2, j >= strToArray.length / 2; i++, j--) {
        if (strToArray[i] === strToArray[j]) {
            count++;
        }
    }
    return (count === Math.trunc((strToArray.length) / 2) ? "yes" : "no")
}

console.log(isStringPolindrom("* % $ $% *"));

//4. Given a word and a list of possible anagrams, select the correct sublist.

 function selectSubList(word, anagramsArray) {
     //convert string to array, sort it, then convert sorted array to string
     let wordTemp = word.split('').sort().join('');
     let arrayTemp = [];
     for (let i = 0; i < anagramsArray.length; i++) {
        arrayTemp.push(anagramsArray[i].split('').sort().join(''))
     }
     let subList = [];
     for (let i = 0; i < arrayTemp.length; i++) {
       if(wordTemp === arrayTemp[i]) {
           subList.push(anagramsArray[i])
       }
     }
     return (subList.length !== 0 ? subList : "There are no any anagrams")
 }
console.log(selectSubList("pil", [""]));
