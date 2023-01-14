module.exports = function reverse (n) {
    var numString = n.toString();
    if (numString[0] === '-') {
        var num = '';
        for (let i = numString.length - 1; i >= 1; i--) {
            num += numString[i];
        }
        return num
    }
    if (numString[numString.length-1] === '0') {
        var num = '';
        for (let i = numString.length - 2; i >= 0; i--) {
            num += numString[i];
        }
        return num
    }
    else {
        var num = '';
        for (let i = numString.length - 1; i >= 0; i--) {
            num += numString[i];
        }
        return num
    }
}