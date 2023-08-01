const fs = require('fs');

const readableStream = fs.createReadStream('input.txt');
const writableStream = fs.createWriteStream('output.txt');

readableStream.on('data', (chunk) => {
  writableStream.write(chunk);
});

readableStream.on('end', () => {
  writableStream.end();
});

writableStream.on('finish', () => {
  console.log('Data has been copied successfully.');
});

readableStream.on('error', (err) => {
  console.error('Error reading the file:', err);
});

writableStream.on('error', (err) => {
  console.error('Error writing to the file:', err);
});
