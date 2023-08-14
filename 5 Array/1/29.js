/*
Двумерный массив 5х5 заполнен нулями. Написать скипт которая заполняет левую диагональ всеми единицами (1), а правую — двойками (2). На пересечении диагоналей стоит число 3.

Eki ólshemli 5x5 massiv nollar menen toldırılǵan. Shep diaganaldi barlıq 1 ler (1) hám oń diaganaldi 2 ler (2) menen toldıratuǵın skript jazıń. Diaganaldiń kesilispesinde 3 nomeri jaylasqan.
*/

let arr = []
for (let i = 0; i < 5; i++) {
    arr.push([])
    for (let j = 0; j < 5; j++) {
        arr[i][j] = 0         
    }
}
arr
for(let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++) {
        if (i == j) {
            arr[i][j] = 1
        }
            arr[i][4-i] = 2
    }
}
arr[2][2] = 3
console.log(arr);