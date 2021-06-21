const fs = require('fs');

const ascComparator = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
};

const solution = ([sizesStr, ...colorsStr]) => {
    const [size1, size2] = sizesStr.split(' ').map(Number);
    const colors = colorsStr.map(Number);

    const set1 = new Set(colors.slice(0, size1));
    const set2 = new Set(colors.slice(size1, size1 + size2));
    const intersection = new Set();

    for (const color of set1) {
        if (set1.has(color) && set2.has(color)) {
            intersection.add(color);
            set1.delete(color);
            set2.delete(color);
        }
    }

    const coll0 = Array.from(intersection).sort(ascComparator);
    const coll1 = Array.from(set1).sort(ascComparator);
    const coll2 = Array.from(set2).sort(ascComparator);

    return `${coll0.length}\n${coll0.join(' ')}
${coll1.length}\n${coll1.join(' ')}\n${coll2.length}\n${coll2.join(' ')}`;
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split('\n');
const result = solution(data);

fs.writeFileSync('output.txt', result, 'utf-8');
