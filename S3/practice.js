// 1. sum of all elements

// function sumOfElems(arr) {
//     let sum = 0;
//     for(let elem of arr) {
//         sum += elem;
//     }
//     return sum;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(sumOfElems(arr));

// 2. array sum, average and maximum
// sum
// average
// max elem
// print - sum average maxElem

// function threeOps(arr) {
//     let sum = 0;
//     let max = arr[0];

//     for(let i=0; i<arr.length; i++) {
//         sum += arr[i];
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }

//     let avg = Math.floor(sum / arr.length);

//     console.log(`${sum} ${avg} ${max}`);
// }

// threeOps([1, 2, 3, 4, 5, 5]);

// 3. Find Index of Largest Number in Array

// function indexOfLargest(arr) {
//     let max = arr[0];
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return arr.indexOf(max);
// }

// console.log(indexOfLargest([2, 4, 5, 7, 6, 1]));

// 4. Last occurrence in unsorted array
// arr
// key

// function findLastIndex(arr, key) {
//     let lastIndex = -1;

//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] === key) {
//             lastIndex = i;
//         }
//     }
//     return lastIndex;
// }

// let arr = [2, 5, 4, 2, 7, 5, 1, 5, 8];
// let key = 5;

// console.log(findLastIndex(arr, key));

// 5. Maximum difference between two elements in an Array
// Write a program to find out the maximum difference between any two element in an array. Elements will always be positive integers.

// 6. Given an array arr of N integers, Calculate the ratios of its elements that are positive, negative, and zero to the array size N. Print the decimal value of each fraction in a new line up to 6 decimal places.

// function printRatios(arr) {
//     let positives = 0;
//     let negatives = 0;
//     let zeros = 0;
//     let n = arr.length;

//     for(let i=0; i<n; i++) {
//         if(arr[i] > 0) {
//             positives++;
//         } else if(arr[i] < 0) {
//             negatives++;
//         } else {
//             zeros++;
//         }
//     }

//     console.log((positives/n).toFixed(6));
//     console.log((negatives/n).toFixed(6));
//     console.log((zeros/n).toFixed(6));
// }

// let arr = [1, 2, 0, 0, -1, -2, -3];

// printRatios(arr);

// 7. Raj has an array arr and an integer k. He wants to find out the number of consecutive pairs of array elements whose sum will be k.

// function consecutivePairs(arr, k) {
//     let count = 0;
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] + arr[i+1] === k) {
//             count++
//         }
//     }
//     return count;
// }

// let arr = [1, 2, 3, 4, 5]       //(1, 2) (2, 3) (3, 4)  (4, 5)
// let k = 3;

// console.log(consecutivePairs(arr, k));

// 8. Filter Numbers Greater Than 5
// Return a new array containing only numbers greater than 5.

// function filterGreaterThanFive(arr) {
//   let result = [];
//   for(let elem of arr) {
//     if(elem > 5) {
//         result.push(elem);
//     }
//   }
//   return result;
// }

// console.log(filterGreaterThanFive([2, 6, 8, 3]));


// 9. Reverse an Array
// Return a new array with the elements in reverse order.

// function reverseArray(arr) {
//     let reversed = [];
//     for(let i=arr.length-1; i>=0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// console.log(reverseArray([1, 2, 3, 4, 5]));




// 10. Given an array of N integers, find how many pairs of integers have a difference of K.

// arr = [32, 0, 63, 8]
// k = 1;
// output = 0

// arr = [1, 5, 3, 4, 2]
// k = 2;
// output = 3