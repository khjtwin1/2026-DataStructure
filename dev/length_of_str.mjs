function strLength(str) {
    if(str.length===0) return 0;
    return strLength(str.slice(0,-1)) + 1;
} //strLength

let str = "abcd";
console.log(strLength(str));
