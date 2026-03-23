// 문제 2: 팩토리얼
// 재귀함수를 이용해서 n!을 구하세요.

function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));  // 120  (5*4*3*2*1)
console.log(factorial(3));  // 6