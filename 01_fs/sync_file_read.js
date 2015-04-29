var fs       = require('fs');
var fileName = '../LICENSE';

var data = fs.readFileSync(fileName);
console.log(data.toString());
