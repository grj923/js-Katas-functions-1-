console.log("Working Greg");

// Kata 1 add

console.log("Add Kata Function");
function add(a, b) {
  return a + b;
}
console.log(add(5, 9));
console.log(add(5, 4));

// Kata Number Two Average of Three Numbers

console.log("Average Kata Function");

function avg(a, b, c) {
  return (a + b + c) / 3;
}
console.log(avg(1, 5, 9));
console.log(avg(4, 4, 4));
console.log(avg(10, 4, 1));

// Kata Number Three Greater Than

console.log("Greater Than Kata");

function greaterThan(a, b) {
  if (a < b) {
    return "True";
  } else {
    return "False";
  }
}
console.log(greaterThan(5, 6));
console.log(greaterThan(4, 1));

// Kata Number Four Second Largest

console.log("Second Largest Kata");

function secondLargestNumber(a) {
  let largest = a[0];
  let secondLargest = null;
  for (let count = 0; count < a.length; count++) {
    if (a[count] > largest) {
      secondLargest = largest;
      largest = a[count];
    } else if (a[count] > secondLargest) {
      secondLargest = a[count];
    }
  }
  return secondLargest;
}
console.log(secondLargestNumber([1, 4, 5, 8]));
console.log(secondLargestNumber([8, 3, 5, 1, 9, 10]));

// Kata Number 5 Find the vowels

console.log("Does It Have A Vowel Kata");

let vowels = ["a", "e", "i", "o", "u"];
let index = 0;
function containsVowel(wordString, vowels) {
  return vowels;
}
containsVowel("alpha");
containsVowel("hmph");

//  Kata Number 6 Tip

console.log("Calulate a tip");

function findTheTip(tip) {}
// tip(57);
// tip(32);
