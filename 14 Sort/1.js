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





function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                
            }
        }
    }

    console.log(arr);
}

let arr2 = [234, 43 , 55, 63, 5, 6, 235, 547];

bubbleSort(arr2)




