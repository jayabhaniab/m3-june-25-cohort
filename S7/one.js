// linear search
// function linearSearch(arr, target) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// let arr = [5, 3, 8, 4, 9];
// let target = 7;
// console.log(linearSearch(arr, target));





// binary search
// function binarySearch(arr, target) {
//     let low = 0;
//     let high = arr.length - 1;

//     while(low <= high) {
//         let mid = Math.floor((low + high) / 2);

//         if(arr[mid] === target) {
//             return mid;
//         } else if(target > arr[mid]) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }

//     return -1;
// }

// let arr = [2, 4, 6, 8, 10, 12, 14];
// let target = 12;
// console.log(binarySearch(arr, target));