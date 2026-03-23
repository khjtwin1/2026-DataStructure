function strLength(str) {
    if (str.length === 1) return 1;
    return strLength(str.slice(0, -1)) + 1;
}

let str = "abcdefg";
console.log(strLength(str));