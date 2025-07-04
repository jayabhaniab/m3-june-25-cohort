// function pd(n) {
//     if(n == 0) {
//         return;
//     }

//     console.log(n);
//     pd(n-1);
// }

// pd(5);




// function pi(n) {
//     if(n == 0) {
//         return;
//     }

//     pi(n-1);
//     console.log(n);
// }

// pi(5);



// function factorial(n) {
//     if(n == 1) {
//         return 1;
//     }

//     let a = factorial(n-1);
//     let b = n * a;
//     return b;
// }

// console.log(factorial(4));




function power(x, n) {
    if(n == 0) {
        return 1;
    }

    let a = power(x, n-1);
    let b = a * x;
    return b;
}

let res = power(2, 3);
console.log(res);