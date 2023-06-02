// What is happening in the following code snippet?  Assume the following:

// first.txt exists in the content folder and contains: “Hello, I am the first file”.

// second.txt exists in the content folder and contains: “Hello, I am the second file”.

const { readFile, writeFile } = require("fs");
console.log("start"); // logs the start of the of the code
readFile("./content/first.txt", "utf8", (err, result) => {
  // readFile is used to read the information in the first.txtx folder asynchronously
  if (err) {
    // Uses a conditional stating if there is an error reading the file, it is logged
    console.log(err);
    return;
  }
  const first = result; // if there is no error, the information from the first.txt folder will be stored in the first variable
  console.log(result); // the information inside the first.txt folder is then logged to the console
  readFile("./content/second.txt", "utf8", (err, result) => {
    // Another readFile is used to read the information from second.txt asyncronously
    if (err) {
      // another conditional is created; if there is an error while reading the file, console logg error
      console.log(err);
      return;
    }
    const second = result; // if there is no error, the information from the second.txt folder will be stored in the second variable
    console.log(result); // the result is then logged to the console
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        // writeFile is then used to write a new file into the result-async.txt folder. writeFile writes the string `Here is the result : Hello, I am the first file , Hello, I am the second file` using template literals
        if (err) {
          // a conditional is placed if there is an error while writing the string, if there is an error, it is logged to the console
          console.log(err);
          return;
        }
        console.log("done with the task"); // if eveything goes well and there is no erros, 'done with the task' is logged to the console
      }
    );
  });
});

console.log("starting next task");

// this piece of code is used to read 2 txt files and write a new file asyncronously
