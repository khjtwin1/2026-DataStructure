// 문제 5: 배열에서 최대값 찾기
// 재귀함수를 이용해서 배열에서 가장 큰 값을 찾으세요.

function findMax(arr) {
    if (arr.length == 1) return arr[0];
    return Math.max(findMax(arr.slice(0, -1)), arr[arr.length - 1]);
}

console.log(findMax([3, 7, 2, 9, 5]));  // 9
console.log(findMax([10, 1, 8, 4]));    // 10