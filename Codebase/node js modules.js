

let fs = require("fs");
let ton = fs.readFileSync("coding.txt", "utf-8");
ton = ton.replace("book", "self help book");
console.log("The content of the folder is :-");
console.log(ton);

console.log("Newly made file is :-");
fs.writeFileSync("wordings.txt", ton);


// In order to use Node.js core or NPM modules, you first need to import it using require() function as shown below :-
// var module = require('module_name'); 

// Core Module	Description :-
// http	        : http module includes classes, methods and events to create Node.js http server.
// url	        : url module includes methods for URL resolution and parsing.
// querystring	: querystring module includes methods to deal with query string.
// path	        : path module includes methods to deal with file paths.
// fs	        : fs module includes classes, methods, and events to work with file I / O.
// util	        : util module includes utility functions useful for programmers.