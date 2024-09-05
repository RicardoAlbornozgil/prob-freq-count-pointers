// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) return false;

    const freqCounter = {};

    for (let char of str1) {
        freqCounter[char] = (freqCounter[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!freqCounter[char]) return false;
        freqCounter[char]--;
    }

    return true;
}

module.exports = sameFrequency;
