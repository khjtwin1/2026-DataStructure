// function myFunction(number) {
//     console.log(number);
//     myFunction(number+1);
// }
// myFunction(1);


function myFunction(number) {
    if(number>3) return;       // 기저 조건
    console.log(number);
    myFunction(number+1);
}

myFunction(1);

// for(let i=1; i<11; i++) {
//     console.log(i);
// }