/*** exec() method ***/
// const { exec } = require('child_process');

// exec('pwd', (error, stdout, stderr) => {
//     if(error){
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if(stderr){
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// })

/*** execFile() method ***/
// const { execFile } = require('child_process');

// execFile('pwd', (error, stdout, stderr) => {
//     if(error){
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if(stderr){
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// })

/*** spawn() method ***/
const { spawn } = require('child_process');

const child = spawn('ls', ['-lh'])

child.stdout.on('data', (data) => {
    console.log(`stdout: ${stdout}`);
})

child.stderr.on('data', (data) => {
    console.log(`stderr: ${stdout}`);
})

child.on('error', (error) => {
    console.log(`error: ${error}`);
})

child.on('exit', (code,signal) => {
    if(code) console.log(`Process exit with code: ${code}`);
    if(signal) console.log(`Process killed with signal: ${signal}`);
    console.log('Done');
})
