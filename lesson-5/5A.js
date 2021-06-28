const fs = require('fs');

const solution = ([shirtsCnt, shirts, pantsCnt, pants]) => {
    shirtsCnt = Number(shirtsCnt);
    pantsCnt = Number(pantsCnt);

    shirts = shirts.split(' ').map(Number);
    pants = pants.split(' ').map(Number);

    let shirtsIdx = pantsIdx = minShirtsIdx = minPantsIdx = 0;
    let minDiff = Math.abs(shirts[0] - pants[0]);

    while (shirtsIdx < shirtsCnt && pantsIdx < pantsCnt) {
        const currShirt = shirts[shirtsIdx];
        const currPants = pants[pantsIdx];
        const diff = Math.abs(currShirt - currPants);

        if (diff < minDiff) {
            minDiff = diff;
            minShirtsIdx = shirtsIdx;
            minPantsIdx = pantsIdx;
        }

        if (diff === 0) {
            break;
        }

        if (currShirt > currPants) {
            pantsIdx += 1;
        } else {
            shirtsIdx += 1;
        }
    }

    console.log(`${shirts[minShirtsIdx]} ${pants[minPantsIdx]}`);
};

const input = fs.readFileSync('input.txt', 'utf-8');
const data = input.split(/\r?\n/);

solution(data);