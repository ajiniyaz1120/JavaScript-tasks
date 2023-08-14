 /*
5) Дана квадратная матрица. Проверить, является ли она симметричной относительно
главной диагонали.
*/
let statuss
let matrix = [
    [3,1,1],
    [1,5,1],
    [1,1,6]
]

for(let i = 0; i<matrix.length; i++){
    for(let j  = 0; j<matrix.length; j++){
        if ( matrix[i][j] != matrix[j][i] ){
            statuss = false
        }
    }
}
if(statuss == false){
    console.log("не симметричной");
}else{
    console.log("симметричной");
}