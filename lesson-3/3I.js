const fs = require('fs');

const solution = ([n, ...array]) => {
    const studentsCount = Number.parseInt(n, 10);
    const langs = new Set();

    const data = array.reduce((acc, value) => {
        if (!isNaN(value)){
            return acc;
        }

        langs.add(value);

        const count = (acc[value] ?? 0) + 1;
        acc[value] = count;

        return acc;
    }, {});

    const most = Object.entries(data).reduce((acc, [langName, langCount]) => {
        if (langCount === studentsCount) {
            acc.push(langName);
        }

        return acc;
    }, []);

    const any = `${langs.size}\n${Array.from(langs).join('\n')}`;

    return `${most.length}\n${most.join('\n')}\n${any}`;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split('\n');
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
