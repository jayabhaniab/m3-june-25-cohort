// 1. reverse a string
// write a function to reverse a string.

// function reverseString(str) {
//     // let arr = str.split('');    // ['h', 'e', ..]
//     // arr.reverse();
//     // return arr.join('');

//     let reversed = "";
//     for(let i=str.length-1; i>=0; i--) {
//         reversed = reversed + str[i];
//     }
//     return reversed;
// }

// console.log(reverseString("hello"));
// O(n)
// O(n)




// 2. check if a given string is a palindrome
// mam
// nitin

// function isPalindrome(str) {
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(isPalindrome("nitin"));
// O(n)
// O(n)




// 3. write a function to count the number of vowels in a string
// function countVowels(str) {
//     let vowels = new Set(['a', 'e', 'i', 'o', 'u']);

//     str = str.toLowerCase();

//     let count = 0;

//     for(let char of str) {
//         if(vowels.has(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Hello World"));

// O(n)
// O(1)




// 4. return first non-repeating character in a string

// function firstNonRepeatingChar(str) {
//     const freq = {};

//     for(let char of str) {
//         freq[char] = (freq[char] || 0) + 1;
//     }

//     for(let char of str) {
//         if(freq[char] === 1) {
//             return char;
//         }
//     }

//     return null;    // for no non-repeating character
// }

// console.log(firstNonRepeatingChar("aabbcdde"));     //c

// O(n)
// O(1)




// 5. check if two strings are anagrams of each other
// silent
// listen

// function areAnagrams(str1, str2) {
//     if(str1.length !== str2.length) {
//         return false;
//     }

//     const count1 = {};
//     const count2 = {};

//     for(let char of str1) {
//         count1[char] = (count1[char] || 0) + 1;
//     }

//     for(let char of str2) {
//         count2[char] = (count2[char] || 0) + 1;
//     }

//     for(let char in count1) {
//         if(count1[char] !== count2[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(areAnagrams("listen", "silent"));


// O(n)
// O(1)



// 6. count how many times a given character appears in a string
// function countChar(str, targetChar) {
//     str = str.toLowerCase();
//     targetChar = targetChar.toLowerCase();

//     let count = 0;

//     for(let char of str) {
//         if(char === targetChar) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countChar("Mississippi", "s"));     //4




// 7. check if a given string is a valid email address
// jay@gmail.com
// a to z, A to Z, 0 to 9, ., _, %, +, -  (before @)
// a to z, 0 to 9, ., - (before .)
// a to z (after .)

// function isValidEmail(email) {
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
//     return regex.test(email);
// }

// console.log(isValidEmail("test@example.com"));





// 8. validatte a 10-digit mobile number
// first digit 6-9

// function isValidPhoneNumber(number) {
//     const regex = /^[6-9]\d{9}$/;

//     return regex.test(number);
// }

// console.log(isValidPhoneNumber("9876543210"));