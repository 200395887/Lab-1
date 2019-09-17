console.log('hello world');
console.log('This is Akshay. Howdy!!');

//This is the code for the second part of the class
var http = require('http');
var fs = require('fs');

function writeNumbers(res) {
    var counter = 0;

    for (var i = 0; i < 20; i++) {
        counter++;
        res.write(counter.toString() + '\n');
    }
}

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text-plain' });

    writeNumbers(res);

    var query = require('url').parse(req.url).query;
    var app = require('querystring').parse(query).file + '.txt';

    setTimeout(function () {
        console.log('opening ' + app);

        fs.readFile(app, 'utf8', function (err, data) {
            if (err) {
                res.write('Could not find');
            }
            else {
                res.write(data);
            }
        })
    })
})