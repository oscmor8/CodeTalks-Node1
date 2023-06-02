// What is happening in the following code snippet?  Assume the following:

// first.txt exists in the content folder and contains: “Hello, I am the first file”.

// second.txt exists in the content folder and contains: “Hello, I am the second file”.

const { readFileSync, writeFileSync } = require("fs");

const fs = require("fs");

const first = readFileSync("./content/first.txt", "utf8"); // creates a variable called first that contains the sentence "Hello, I am the first file". It is read syncronously since it uses readFileSync
const second = readFileSync("./content/second.txt", "utf8"); // creates a variable called second that contains the sentence "Hello, I am the second file". It is read syncronously since it uses readFileSync

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`
);

// This writes a string to the results-sync.txt file. The string includes being written says `Here is the result : Hello, I am the first file , Hello, I am the second file`

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

// Once the first file is written a second file will begin to be written however, this time it uses { flag: "a" }. This means the computer should open the file and add the new content to the end, without deleting the previous sentence.

// this piece of code is utilized to read 2 different txt files and write new files syncronously
