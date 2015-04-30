var _ = require('lodash');

console.log('sum:', _.sum([
    1, 2, 3, 4, 5
]));

console.log('max:', _.max([
    1, 2, 3, 4, 5
]));

console.log('flatten:', _.flatten([
    1, 2, 3, [4, 5]
]));

console.log('compact:', _.compact([
    1, undefined, 3, undefined, 5
]));
