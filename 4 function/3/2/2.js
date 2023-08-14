/*
Напиши функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать один или несколько аргументов функции. Пример:
function add(a, b) { return a + b; }
function mult(a, b, c, d) { return a * b * c *8; }

var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5

console.log(add5(2)); // 7
console.log(add5(10)); // 15
console.log(add5(8)); // 13

var mult23 = partial(mult, 2, 3); // мы зафиксировали первые 2 аргумента mult() как 2 и 3

console.log(mult23(4, 5)); // 2*3*4*5 = 120
console.log(mult23(1, 1)); // 2*3*1*1 = 6

*/

function add(param){
    console.log(param.reduce((acc, item)=>{ return acc+item}, 0));
    // let addP = 0
    // for(let i=0; i<param.length; i++){
    //     addP = addP + param[i]
    // }
    // console.log(addP)
}

function mult(param){
    // console.log(param.reduce((acc, item)=>{ return acc*item}, 1));
    let prod = 1
    for(let i = 0; i<param.length; i++){
        prod = prod * param[i]
    }
    console.log(prod);
}

function* partial(fn, ...args){
    yield fn(args)
}



let addFunc = partial(add, 1,2,3,4,5,6)
let multFunc = partial(mult, 1,2,3)

addFunc.next()
multFunc.next()

