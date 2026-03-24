// const euclidean = fuction(num1, num2) {
//     return (num2 === 0) ? num1 : euclid(num2, num1 % num2);
// }

// const euclidean = (num1, num2) => {
//     return (num2 === 0) ? num1 : euclid(num2, num1 % num2);
// }

const euclidean = (num1, num2) => (num2 === 0) ? num1 : euclid(num2, num1 % num2);

console.log(euclidean(78, 66));