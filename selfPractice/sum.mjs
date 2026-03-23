// 문제 1: 1부터 n까지의 합
// 재귀함수를 이용해서 1부터 n까지의 합을 구하세요.

function sum(n) {
    if (n == 0) return 0;
    return n + sum(n - 1);
}

console.log(sum(5));  // 15  (1+2+3+4+5)
console.log(sum(10)); // 55