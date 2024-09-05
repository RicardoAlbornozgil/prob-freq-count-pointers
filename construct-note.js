// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (message.length === 0) return true;
    if (letters.length === 0) return false;

    const letterCount = {};
    for (let letter of letters) {
        letterCount[letter] = (letterCount[letter] || 0) + 1;
    }

    for (let char of message) {
        if (!letterCount[char]) return false;
        letterCount[char]--;
    }

    return true;
}

module.exports = constructNote;
