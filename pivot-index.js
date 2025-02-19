// add whatever parameters you deem necessary
function pivotIndex(arr) {
    let totalSum = arr.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (leftSum === totalSum - leftSum - arr[i]) {
            return i;
        }
        leftSum += arr[i];
    }

    return -1;
}

module.exports = pivotIndex;
