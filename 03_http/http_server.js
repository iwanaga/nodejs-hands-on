var http = require('http');
var addr = '127.0.0.1';
var port = 3000;

/** 'request' イベントのハンドラを登録 */
var httpServer = http.createServer(function (req, res) {
    /** リクエストヘッダを表示 */
    console.log(req.method, req.url);
    console.log(req.headers);

    /** リクエストボディを表示 */
    req.on('data', function (data) {
        console.log(data.toString());
    });

    /** レスポンスを送信 */
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Node\n' + 'Your Request: ' + req.method + ' ' + req.url + '\n');
});

/** 接続受付スタート */
httpServer.listen(port, addr);
console.log(['Server running at http://', addr, ':', port, '/'].join(''));

/*
リクエストコマンド例
  curl http://localhost:3000/index.html
  curl http://localhost:3000/ -d '{a: 1}'
*/