// 문제 4: 거듭제곱
// 재귀함수를 이용해서 x의 n제곱을 구하세요.

function power(x, n) {
    if (n == 0) return 1;
    return x * power(x, n - 1);
}

console.log(power(2, 3));  // 8   (2*2*2)
console.log(power(3, 4));  // 81  (3*3*3*3)