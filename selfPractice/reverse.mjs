// 문제 3: 문자열 뒤집기
// 재귀함수를 이용해서 문자열을 뒤집으세요.

function reverse(str) {
    if (str.length == 1) return str.charAt(0);
    return str.charAt(str.length - 1) + reverse(str.slice(0, -1));
}

console.log(reverse("hello"));  // "olleh"
console.log(reverse("abcd"));   // "dcba"