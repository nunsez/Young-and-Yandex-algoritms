const fs = require('fs');

const solution = ([meta, distancesStr]) => {
    const [n, r] = meta.split(' ').map(Number);
    const distances = distancesStr.split(' ').map(Number);

    let right = 0;
    let counter = 0;

    for (let left = 0; left < n; left += 1) {
        const dist1 = distances[left];

        while (right < n) {
            const dist2 = distances[right];
            const diff = dist2 - dist1;

            if (diff > r) {
                counter += n - right;
                break;
            }

            right += 1;
        }
    }

    console.log(counter);
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\r?\n/);

solution(data);
