// print decreasing
// print increasing

// print decreasing increasing
// 5
// 4
// 3
// 2
// 1
// 1
// 2
// 3
// 4
// 5


// function pdi(n) {
//     if(n == 0) {
//         return;
//     }

//     console.log(n);
//     pdi(n-1);
//     console.log(n);
// }

// pdi(5);





// print arr elements
// function displayArrElems(arr, index) {
//     if(index == arr.length) {
//         return;
//     }

//     console.log(arr[index]);
//     displayArrElems(arr, index+1);
// }

// let arr = [2, 4, 6, 8];
// displayArrElems(arr, 0);




// print arr elems in reverse orders 
// function displayArrElemsReverse(arr, index) {
//     if(index == arr.length) {
//         return;
//     }

//     displayArrElemsReverse(arr, index+1);
//     console.log(arr[index]);
// }

// let arr = [2, 4, 6, 8];
// displayArrElemsReverse(arr, 0);




// find max element from an array
// function max(arr, index) {
//     if(index == arr.length - 1) {
//         return arr[index];
//     }

//     let a = max(arr, index+1);
//     let b = Math.max(a, arr[index]);
//     return b;
// }

// let arr = [2, 4, 6, 7, 3, 5];
// console.log(max(arr, 0));




// given an array of integers, count the number of unique elems using a Set.

// [1, 2, 2, 3, 4, 4, 5]
// 5

// function countUniqueElems(arr) {
//     let uniqueSet = new Set();

//     for(let i=0; i<arr.length; i++) {
//         uniqueSet.add(arr[i]);
//     }

//     return uniqueSet.size;
// }

// console.log(countUniqueElems([1, 2, 2, 3, 4, 4, 5]));




// write a function to check if an array contains any duplicates using a Set.

// [1, 2, 3, 4, 2]
// true

// function hasDuplicates(arr) {
//     let seen = new Set();

//     for(let i=0; i<arr.length; i++) {
//         if(seen.has(arr[i])) {
//             return true;
//         }
//         seen.add(arr[i]);
//     }

//     return false;
// }

// console.log(hasDuplicates([1, 2, 3, 4, 2]));




// count the frequency of each character in a string using a Map.

// function charFrequency(str) {
//     let freqMap = new Map();

//     for(let i=0; i<str.length; i++) {
//         let char = str[i];
//         if(freqMap.has(char)) {
//             freqMap.set(char, freqMap.get(char) + 1);
//         } else {
//             freqMap.set(char, 1);
//         }
//     }

//     return freqMap;
// }

// console.log(charFrequency("hello"));

// hello
// map => h - 1
        //   e - 1




// return the first repeating element in an array, if none, return null.
// [4, 5, 1, 2, 5, 3]
// 5

// function firstRepeatingElem(arr) {
//     let seen = new Set();

//     for(let i=0; i<arr.length; i++) {
//         if(seen.has(arr[i])) {
//             return arr[i];
//         }
//         seen.add(arr[i]);
//     }
//     return null;
// }

// console.log(firstRepeatingElem([4, 5, 1, 2, 5, 3]));





// given an array from 1 to n with one number missing. find it using Set.
// [1, 2, 4, 5]
// 3

// function findMissingNumber(arr, n) {
//     let set = new Set(arr);

//     for(let i=1; i<=n; i++) {
//         if(!set.has(i)) {
//             return i;
//         }
//     }

//     return -1;
// }

// console.log(findMissingNumber([1, 2, 4, 5], 5));




// check if two strings are anagrams using Map.