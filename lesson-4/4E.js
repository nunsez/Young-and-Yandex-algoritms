const fs = require('fs');

const solution = () => {

};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\n/);
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
