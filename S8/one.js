// almabetter  
// 4 5 6 7 8 9 0 1 2 3

// output
// tteralmabe



// function shuffleString(indices, s) {
//   // implementation here
//   let n = s.length;
//   let result = new Array(n);

//   for(let i=0; i<n; i++) {
//     result[indices[i]] = s[i];
//   }

//   console.log(result.join(""));
// }

// let s = "learning";
// let indices = [2, 5, 1, 0, 3, 7, 6, 4];
// shuffleString(indices, s);







// function reverseWords(s) {
//   let arrWords = s.split(" ");

//   let left = 0;
//   let right = arrWords.length - 1;

//   while(left < right) {
//     let temp = arrWords[left];
//     arrWords[left] = arrWords[right]
//     arrWords[right] = temp;

//     left++;
//     right--;
//   }

//   return arrWords.join(" ");

// }

// console.log(reverseWords("how are you jay learning is fun"));

// [how are you jay learning is fun]
// [fun is learning jay you are how]






// function isPalindrome(str) {
//   // implementation here
//   let cleaned = "";
//   for(let i=0; i<str.length; i++) {
//     let ch = str[i];
//     if((ch>="a" && ch<="z") || (ch>="A" && ch<="Z")) {
//         cleaned += ch.toLowerCase();
//     }
//   }

//   let left = 0;
//   let right = cleaned.length - 1;

//   while(left < right) {
//     if(cleaned[left] !== cleaned[right]) {
//         return 0;
//     }
//     left++;
//     right--;
//   }
//   return 1;
// }

// let str = "race a car";
// // cleaned = "raceacar"
// console.log(isPalindrome(str));





// function hey(str) {
//   // implementation here
//     let eCount = 0;

//     for(let i=0; i<str.length; i++) {
//         if(str[i] === "e") {
//             eCount++;
//         }
//     }

//     let response = "h" + "e".repeat(eCount*2) + "y";
//     return response;
// }

// let str = "heeeeey";
// console.log(hey(str));




// function SubString(str) {
//   // implementation here
//   let n = str.length;

//   for(let i=0; i<n; i++) {
//     for(let j=i+1; j<=n; j++) {
//         console.log(str.substring(i, j));
//     }
//   }
// }

// SubString("abcd");





// function palindromeSubStrs(s) {
//   // implementation here
//   let n = s.length;
//   let resultSet = new Set();

//   for(let i=0; i<n; i++) {
//     for(let j=i+1; j<=n; j++) {
//         let subStr = s.substring(i, j);
//         if(isPalindrome(subStr)) {
//             resultSet.add(subStr);
//         }
//     }
//   }

//   let result = Array.from(resultSet);
//   result.sort();

//   for(let word of result) {
//     console.log(word);
//   }
// }


// function isPalindrome(str) {
//   // implementation here
//   let cleaned = "";
//   for(let i=0; i<str.length; i++) {
//     let ch = str[i];
//     if((ch>="a" && ch<="z") || (ch>="A" && ch<="Z")) {
//         cleaned += ch.toLowerCase();
//     }
//   }

//   let left = 0;
//   let right = cleaned.length - 1;

//   while(left < right) {
//     if(cleaned[left] !== cleaned[right]) {
//         return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }


// palindromeSubStrs("abccbc");





function compressString(S) {
  // implementation here
  let res = "";

  let i=0;
  while(i<S.length) {
    let count = 1;
    while(i+1<S.length && S[i+1] === S[i]) {
        count++;
        i++;
    }

    if(count === 1) {
        res += S[i];
    } else {
        res += S[i] + count;
    }
    i++;
  }
  return res;
}

console.log(compressString("abbbcdd"));
