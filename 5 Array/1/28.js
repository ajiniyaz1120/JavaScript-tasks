/*
Двумерный массив 5х5 заполнен нулями. Написать скрипт которая заполняет центральную колонку всеми единицами (1), а центральную строку — двойками (2). На пересечении строки и колонки стоит число 3.

Eki ólshemli 5x5 massiv nollar menen toldırılǵan. Oraylıq ústindi hámmesi (1) hám oraylıq qatardı eki (2) menen toldıratuǵın skript jazıń. Qatar hám ústinniń kesilispesinde 3 nomeri jaylasqan.
*/
let myArray = []
for (let i = 0; i < 5; i++) {
    myArray.push([])
    for (let j = 0; j < 5; j++) {
        myArray[i][j] = 0
    }
}
myArray
for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray.length; j++) {
        if (j<3 && j>1) {
            myArray[i][j]=1
        }
        if (i<3&&i>1) {
            myArray[i][j]=2
        }        
        if (i<3&&i>1&&j<3&&j>1) {
            myArray[i][j]=3
        }
    }    
}
console.log(myArray);

// for (let k = 0; k < myArray.length; k++) {
//     for (let l = 2; l < myArray.length-2; l++) {
//         myArray[k][l] = 1
//     }
// }
// for (let  i = 2;  i < myArray.length-2;  i++) {
//     for (let j = 0; j <= 4; j++) {
//         myArray[i][j]=2  
              
//     }    
// }
// for (let  i = 2;  i < myArray.length-2;  i++) {
//     for (let j = 0; j <= 4; j++) {
//         myArray[i][j]=2  
              
//     }    
// }
// myArray
// for (let  i = 2;  i < myArray.length-2;  i++) {
//     for (let j = 2; j < myArray[i].length-2; j++) {
//         myArray[i][j]=3  
              
//     }    
// }

// myArray

