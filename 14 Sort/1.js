//Пузырьковая сортировка

// let arr = filterArray(['10', true, undefined, null , 9, 15, 2]);

// console.log(bubbleSort(arr));

// function bubbleSort(arr){
//     for (let i = 0; i < arr.length-1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 swap(arr, i , j);
//             }
//         }        
//     }
//     return arr;
// }

// function swap (arr, i, j){
//     let val = arr[i];
//     arr[i] = arr[j];
//     arr[j] = val;
// }

// function filterArray(arr){
//     return arr.filter((val) => (typeof (val) != 'boolean' && val == Number(val))).map((val) => Number(val));
// }

//Пузырьковая сортировка
// function BubbleSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1 - i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 let tmp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1]=tmp
//             }            
//         }        
//     }
//     console.log(arr);
// }

// let numArray = [23,54,1,3,6,8,5,]

// BubbleSort(numArray)





//Пузырьковая сортировка
function BubbleSort(arr){
    let swapped 
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }            
        }
    } while (swapped);
}

let arr1 = [28,3,6,85,12,74,];
BubbleSort(arr1);
console.log(arr1);
