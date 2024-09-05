// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const seen = new Set();
    const complements = new Set();
    let count = 0;

    for (let num of arr) {
        if (complements.has(num)) {
            count++;
        }
        seen.add(num);
        complements.add(target - num);
    }

    return count;
}

module.exports = countPairs;
