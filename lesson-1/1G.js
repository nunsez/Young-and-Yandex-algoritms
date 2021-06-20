const fs = require('fs');

const solution = (data) => {
    const [n, k, m] = data.split(' ').map(Number);

    if (n < k || k < m) {
        return 0;
    }

    const detailsPerBlank = Math.floor(k / m);
    const wastePerBlank = k % m;

    const iter = (n, k, m, acc = 0) => {
        let waste = 0;
        const blankCount = Math.floor(n / k);
        waste += n % k;
        const detailCount = blankCount * detailsPerBlank;
        waste += blankCount * wastePerBlank;
    
        return waste >= k ? iter(waste, k, m, acc + detailCount) : acc + detailCount;
    };

    return iter(n, k, m);
};

const input = fs.readFileSync('input.txt', 'utf-8');
const result = solution(input).toString();

fs.writeFileSync('output.txt', result, 'utf-8');
