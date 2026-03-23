// for문을 이용해서 팩토리얼 구현하기
// function factorial(number) {
//     let n = 1;
//     for (let i = 1; i <= number; i++) {
//         n *= i;
//     }
//     return n;
// }


// 재귀함수를 이용해서 팩토리얼 구하기 - 하향식 방법
function factorial(number) {
    if (number === 1) return 1;
    return number * factorial(number - 1);
}

console.log(factorial(5));