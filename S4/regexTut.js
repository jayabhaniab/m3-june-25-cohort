// regex
// ----------------
// what is regex    ✅
// how to create    ✅
// commom methods   ✅
// flags    ✅
// anchors  ✅
// quantifiers  ✅
// sets and ranges  ✅
// dot character    ✅
// lookahead    ✅
// lookbehind   ✅




// 1. what is regex
// a pattern used to match characters in strings.
// search
// match
// manipulate
// validation



// 2. how to create?
// literal syntax
// let pattern = /hello/;

// constructor
// let pattern = new RegExp("hello");




// common methods
// test()
// let text = "hello world";
// let pattern = /hello/;
// console.log(pattern.test(text));

// match()
// let text = "hello hello";
// let pattern = /hello/g;
// console.log(text.match(pattern));

// exec()
// let text = "hellohh";
// let pattern = /h/g;
// console.log(text.match(pattern));
// console.log(text.match(pattern));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));

// replace()
// let text = "hello hello world";
// console.log(text.replace("hello", "hi"));
// console.log(text.replaceAll("hello", "hi"));
// console.log(text.replace(/hello/g, "hi"));
// console.log(text.replaceAll(/hello/, "hi"));

// replaceAll()

// split()
// let text = "apple,banana,grapes";
// console.log(text.split(/,/));

// search()
// let text = "hello world";
// console.log(text.search(/world/));






// flags
// g

// i
// let text = "HELLO";
// console.log(/hello/i.test(text));

// m
// let text = "hello\nworld";
// console.log(/^world/m.test(text));





// anchors
// ^
// let text = "hello world";
// let pattern = /^hello/;
// console.log(pattern.test(text));

// $
// let text = "hello world";
// let pattern = /world$/;
// console.log(pattern.test(text));

// \b (word boundary)
// let text = "hello there";
// let pattern = /\bhello\b/;
// console.log(pattern.test(text));

// \B (non-word boundary)
// let text = "hello";
// let pattern = /\Bo/;
// let pattern = /o\B/;
// console.log(pattern.test(text));




// quantifiers
// * : matches 0 or more items
// + : matches 1 or more items
// ? : 0 or 1 item

// let text = "aaab";
// let pattern = /a*/;
// let pattern = /a+/;
// let text = "aab";
// let pattern = /a?/;
// console.log(pattern.exec(text));


// {n} : matches exactly n times
// let text = "aaaab";
// let pattern = /a{2}/;
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));

// {n, } : matches n or more items
// {n,m} : matches between n and m times





// sets and ranges
// character set [abc]
// let text = "cat";
// let pattern = /c[aeiou]t/;
// console.log(pattern.test(text));

// negative character set [^abc]
// let text = "cat";
// let pattern = /c[^aeiou]t/;
// console.log(pattern.test(text));


// ranges
// [a-z]
// let text = "g";
// console.log(/[a-z]/.test(text));

// [0-9]


// predefined character classes
// \d : any digit
// \w : any word character (letter, digit, underscore)
// \s : any whitespace character

// let text = "123abc";
// let pattern = /\d/g;
// console.log(/\d/.test(text));
// console.log(pattern.exec(text));
// console.log(pattern.exec(text));
// console.log(/\d/g.exec(text));
// console.log(/\d/g.exec(text));




// dot character
// matches any character except newline(\n)
// let text = "cat";
// console.log(/c.t/.test(text));




// lookahead
// positive lookahead (?=...)
// let text = "hello123";
// let pattern = /hello(?=\d)/;
// console.log(pattern.test(text));

// negative lookahead (?!...)
// let text = "hello123";
// let pattern = /hello(?!\d)/;
// console.log(pattern.test(text));


// lookbehind
// positive lookbehind (?<=...)
// let text = "123hello";
// let pattern = /(?<=\d)hello/;
// console.log(pattern.test(text));

// negative lookbehind (?<!...)
// let text = "123hello";
// let pattern = /(?<!\d)hello/;
// console.log(pattern.test(text));

