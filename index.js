const fs = require("fs");

const text = fs.readFileSync("randomWords.txt", "utf8");

const factor = process.argv[2];
console.log({ factor });
if (factor === undefined)
  return console.error("you need to add a factor param =>  node index.js 4");

console.log(text.length);

let words = text.split(" ").filter((word, index) => {
  return (index + 1) % factor === 0;
});

words = words.slice(0, 24);
// console.log(words.length);

words.forEach((word, index) => console.log({ word, index: index + 1 }));

console.log(words.join(" "));
