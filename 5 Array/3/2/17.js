// Дано число n. Создайте массив int A[n][n], и заполните его по следующему правилу: числа на диагонали, идущей из правого верхнего в левый
// нижний угол равны 1; числа, стоящие выше этой диагонали, равны 0;
// числа, стоящие ниже этой диагонали, равны 2.
// 0 0 0 1
// 0 0 1 2
// 0 1 2 2
// 1 2 2 2

let array = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if (i == array.length-j-1) array[i][j]=1;
        else if (i < array.length-j) array[i][j]=0;
        else {array[i][j]=2}
    }
}
console.log(array);