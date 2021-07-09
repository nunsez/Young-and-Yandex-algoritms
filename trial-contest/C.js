const rl = require('readline').createInterface(process.stdin);

let previous = null;
let n = null;

rl.on('line', (line) => {
    if (!n) {
        n = line;
        return;
    }

    if (previous !== line) {
        previous = line;
        process.stdout.write(`${line}\n`);
    }

    previous = line;
});
