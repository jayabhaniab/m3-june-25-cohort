// Find the First Occurrence of a target element in a sorted array.


// function findOccurance(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;
//     let result = -1;

//     while(low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if(arr[mid] === target) {
//             result = mid;
//             high = mid - 1;
//         } else if(target < arr[mid]) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     return result;
// }

// let arr = [1, 2, 4, 4, 4, 5, 6];
// let target = 4;

// console.log(findOccurance(arr, target));




// Given two strings. The task is to check whether the given strings are anagrams of each other or not.

// function areAnagrams(str1, str2) {
//     if(str1.length !== str2.length) {
//         return false;
//     }

//     const sortedStr1 = str1.split('').sort().join('');
//     const sortedStr2 = str2.split('').sort().join('');

//     return sortedStr1 === sortedStr2;
// }

// console.log(areAnagrams('listen', 'silent'));




// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     let charCount = {};

//     for(let char of str1) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }

//     for(let char of str2) {
//         if(!charCount[char]) return false;
//         charCount[char]--;
//     }

//     return true;
// }





// Removes duplicates from an array while preserving the original order of elements.
// function removeDuplicates(arr) {
//     const uniqueArr = [];

//     for(let i=0; i<arr.length; i++) {
//         if(!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         }
//     }
//     return uniqueArr;
// }


// function removeDuplicates(arr) {
//     const uniqueArr = [...new Set(arr)];
//     return uniqueArr;
// }

// let arr = [1, 2, 3, 2, 4, 1, 5];
// console.log(removeDuplicates(arr));





// Write a function that reverses a string. The input string is given as an array of characters s and output is string.

const s = ["h", "e", "l", "l", "o"];        //olleh

// function reverseString(str) {
//     let reversed = "";

//     for(let i=str.length-1; i>=0; i--) {
//         reversed += str[i];
//     }

//     return reversed;
// }

// console.log(reverseString(s));






// Given an array of integers, find the sum of its elements.
// Input: [15, 12, 13, 10]
// Output: 50

// function sumArray(arr) {
//     if(arr.length === 0) {
//         return 0;
//     }

//     return arr[0] + sumArray(arr.slice(1));
// }
