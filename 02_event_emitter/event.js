var EventEmitter = require('events').EventEmitter;
var ev = new EventEmitter();

/** イベント 'foo' に callback を登録 */
ev.on('foo', function (data) {
    console.log('[foo event]', data);
});

/** 非同期に実行させるため、タイマーを使う。*/
setTimeout(function () {
    console.log('✓ Before emit.');

    /** foo イベントを発生させる */
    ev.emit('foo', Math.random());

    console.log('✓ After emit.');
}, 1000);

console.log('✓ Bottom of code.');
