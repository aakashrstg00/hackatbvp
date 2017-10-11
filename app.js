var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

var regression = require('regression');
//
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
/*app.get('/stream', function (req, res) {
    var arr = ['red', 'yellow', 'green'];
    res.writeHead(200, {
        'content-type': 'text/event-stream',
        'connection': 'keep-alive',
        'Access-Control-Allow-Origin': '*'
    });
    const result = regression.linear([[45, 20], [63, 30], [91, 46], [84, 46], [48, 25], [79, 49], [66, 38], [79, 44]]);
    const m = result.equation[0];
    const c = result.equation[1];
    let y;
    var data = '';
    var readStream = fs.createReadStream('file.txt', 'utf8');

    readStream.on('data', function (chunk) {
        data += chunk;
    }).on('end', function () {
        data = parseInt(data);
        y = m * data + c;
    });


    fs.watchFile('file.txt', function () {
        res.write('event: timeChange\n');
        res.write('data: ' + Math.round(y) + '\n\n');
    });
    setInterval(function () {
        res.write('event: timeChange\n');
        res.write('data: ' + Math.round(y) + '\n\n');
    }, 3000);
});*/
app.get('/naam', function (req, res) {
    const result = regression.linear([[45, 20], [63, 30], [91, 46], [84, 46], [48, 25], [79, 49], [66, 38], [79, 44]]);
    const m = result.equation[0];
    const c = result.equation[1];
    let y;
    var data = '';
    var readStream = fs.createReadStream('file.txt', 'utf8');

    readStream.on('data', function (chunk) {
        data += chunk;
    }).on('end', function () {
        data = parseInt(data);
        y = m * data + c;
    });
    res.send();
});
//
app.listen(1234, function () {
    console.log("started at 1234");
});
