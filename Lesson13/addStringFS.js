let fs = require('fs');
let os = require('os').EOL;

let text = "Hello World!";

let content = fs.appendFileSync('example.txt', `${os}${text}`);