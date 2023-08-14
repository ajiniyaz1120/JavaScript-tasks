// Что будет выведено после выполнения кода?

let zero = 0;
let ng = -zero;

if (zero === ng) {
    let result = 1/zero === 1/ng;
    let isValid = result && 1;
    console.log(isValid);
}else{
    console.log('0' + true);
}

