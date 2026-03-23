function euclid (num1, num2) {
    while (num2 != 0) {
        let r = num1 % num2;
        num1 = num2;
        num2 = r;
    }
    return num1;
}

console.log(euclid(78, 66));