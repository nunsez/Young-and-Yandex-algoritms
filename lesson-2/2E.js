const fs = require('fs');

const getPlace = (metres, results) => results.filter((m) => m > metres).length + 1;

const solution = ([count, results]) => {
    const metres = results.split(' ');
    const metresInNumbers = metres.map(Number);
    const maxMetres = Math.max(...metres);
    const maxMetresIndex = metresInNumbers.indexOf(maxMetres);
    
    const result = metres.reduce((acc, m, i) => {
        if (m[m.length - 1] === '5' && metresInNumbers[i + 1] < +m && maxMetresIndex < i) {
            acc.push(+m);
        }

        return acc;
    }, [])

    return result.length > 0 ? getPlace(Math.max(...result), metresInNumbers) : 0;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input.split('\n'));

fs.writeFileSync('output.txt', result.toString(), 'utf-8');
