const fs = require('fs');


fs.writeFileSync('welcome.txt', 'Hello Node');

console.log(fs.readFileSync('welcome.txt', 'utf8'));