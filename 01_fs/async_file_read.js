var fs       = require('fs');
var fileName = '../LICENSE';

fs.readFile(fileName, function (error, data) {
    if (error) {
        throw error;
    }

    console.log('✓ Callback');
    console.log(data.toString());
});

console.log('✓ Bottom line');
