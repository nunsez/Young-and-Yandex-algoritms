const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

const solution = (room, cond, mode) => {
    switch (mode) {
        case 'freeze':
            return room > cond ? cond : room;

        case 'heat':
            return room < cond ? cond : room;

        case 'auto':
            return cond;

        case 'fan':
            return room;
    }
};

rl.question('', (data) => {
    const [troom, tcond] = data.split(' ');

    rl.question('', (mode) => {
        const result = solution(Number(troom), Number(tcond), mode);
        console.log(result);
    
        rl.close();
    });
});
