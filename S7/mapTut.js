// let myMap = new Map();

// let myMap = new Map([
//     ["name", "Aman"],
//     ["age", 25],
//     ["isStudent", true]
// ]);

// console.log(myMap);


// let myMap = new Map();

// add or update an entry
// myMap.set("language", "JavaScript");
// myMap.set(10, "ten");
// myMap.set(true, "yes");

// console.log(myMap);


// retrive the value
// console.log(myMap.get("language"));


// to check if a key exists
// console.log(myMap.has(10));


// remove a specific element
// myMap.delete(10);
// console.log(myMap);


// remove all elements
// myMap.clear();
// console.log(myMap);


// return the number of elements
// console.log(myMap.size);




// iterating a map
let map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

// for..of
for(let [key, value] of map) {
    console.log(`${key} => ${value}`);
}

for(let key of map.keys()) {
    console.log(key);
}

for(let value of map.values()) {
    console.log(value);
}


// forEach
map.forEach((value, key) => {
    console.log(`${key}: ${value}`);
})