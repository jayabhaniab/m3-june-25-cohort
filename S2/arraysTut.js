// array creation
let arr = [2, 4, 6, 8];

// accessing elements
// console.log(arr[2]);
// TC - O(1)
// SC - O(1)

// inserting elements
// at the end
// let x = arr.push(100);
// console.log(x);
// console.log(arr);
// TC - O(1)
// SC - O(1)

// at the beginning
// arr.unshift(100);
// console.log(arr);
// TC - O(n)
// SC - O(1)

// in between
// arr.splice(2, 0, 100, 200);
// console.log(arr);
// TC - O(n)
// SC - O(1)


// deleting elements
// from the end
// let x = arr.pop();
// console.log(arr);
// console.log(x);
// O(1)
// O(1)

// from the start
// arr.shift();
// console.log(arr);
// O(n)
// O(1)

// in between
// arr.splice(2, 1);
// console.log(arr);
// O(n)
// O(1)

// console.log(arr.indexOf(6));


// iterating through an array
// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }
// O(n)
// O(1)


// sorting an array
// let arr2 = [40, 10, 30, 20];
// arr2.sort((a, b) => b - a);
// console.log(arr2);
// O(n logn)
// O(n)


// reversing an array
// arr.reverse();
// console.log(arr);
// O(n)
// O(1)

// slicing
// let newArr = arr.slice(1, 3);
// console.log(arr);
// console.log(newArr);
// O(n)
// O(k) k=length of slice



// concat
// let a1 = [10, 20];
// let a2 = [30, 40];
// let res = a1.concat(a2);
// console.log(res);
// Tc - O(n+m)
// SC - O(n+m)



// cloning an array
// let clonedArr = [...arr, 100, 200];
// console.log(clonedArr);
// O(n)
// O(n)




// let a = new Array(5)

let rows = 3
let cols = 4;

let matrix = new Array(rows);

for(let i=0; i<rows; i++) {
    matrix[i] = new Array(cols);
}

let matrix2 = [
    [],
    [],
    []
]

