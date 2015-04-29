var fs = require('fs');

var fileName     = '../LICENSE';
var fileEncoding = 'utf8';

var data = fs.readFileSync(fileName, fileEncoding);
console.log(data.toString());
