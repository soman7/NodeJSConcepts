const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req,res) => {
    //Old Way
    // fs.readFile('input.txt', (err, data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // })

    //New Way using Streams
    const rStream = fs.createReadStream('input.txt');

    rStream.on('data', (chunkData) => {
        res.write(chunkData)
    });

    rStream.on('end', () => {
        res.end();
    })

    rStream.on('error', (err) => {
        console.log(err);
        res.end("File not Found!")
    })

})

server.listen(8000, "127.0.0.1")