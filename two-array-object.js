// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
    let obj = {};

    keys.forEach((key, idx) => {
        obj[key] = idx < values.length ? values[idx] : null;
    });

    return obj;
}

module.exports = twoArrayObject;
