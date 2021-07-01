const fs = require('fs');

const solution = ([meta, cars]) => {
    const [n, k] = meta.split(' ').map(Number);
    const numbers = cars.split(' ').map(Number);
    const prefixSum = [0];

    for (let i = 1; i < n + 1; i += 1) {
        prefixSum[i] = prefixSum[i - 1] + numbers[i - 1];
    }

    let counter = 0;
    const len = prefixSum.length;

    for (let i = 0; i < len - 1; i += 1) {
        const current = prefixSum[i];
        let pointer = i + 1;

        while (pointer < len) {
            const diff = prefixSum[pointer] - current;
            console.log(diff);

            if (diff > k) {
                break;
            }

            if (diff === k) {
                counter += 1;
            }

            pointer += 1;
        }
    }

    console.log(counter);
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\r?\n/);

solution(data);