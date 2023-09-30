//Чётно-нечётная сортировка

// let arr = filterArray(['10', true, undefined, null, 9, 15, 2]);

// console.log(oddEventSort(arr));

// function oddEventSort(arr){
//     let isSorted = false;

//     while (!isSorted) {
//         isSorted = true;

//         for (let i = 1; i < arr.length; i+=2) {
//             if (arr[i] > arr[i+1]) {
//                 swap(arr,i,i+1)
//                 isSorted = false;                
//             }            
//         }
//         for(let i=0 ; i<arr.length; i+=2){
//             if(arr[i]> arr[i+1]){
//                 swap(arr,i,i+1);
//                 isSorted = false;
//             }
//         }
//     }

//     return arr;
// }

// function swap(arr,i,j){
//     let val = arr[i];
//     arr[i]=arr[j];
//     arr[j]=val;
// }

// function filterArray(arr){
//     return arr.filter((val) => (typeof (val) != 'boolean' && val == Number(val))).map((val) => Number(val));
// }

const massiv = [2, 5, 2, 6, 7, 1, 8, 9];
const isEven = num => num%2 === 0;
const sorter = ((a,b) => {
    if(!isEven(a) && !isEven(b)){
        return -1;
    };
    if (!isEven(a) && isEven(b)) {
       return 1;
    }
    return a-b;
});

const oddEvenSort = massiv => {
    massiv.sort(sorter);
};

oddEvenSort(massiv);
console.log(massiv);

// const arr = [2, 5, 2, 6, 7, 1, 8, 9];
// const isEven = num => num % 2 === 0;
// const sorter = ((a, b) => {
//    if(isEven(a) && !isEven(b)){
//       return -1;
//    };
//    if(!isEven(a) && isEven(b)){
//       return 1;
//    };
//    return a - b;
// });
// const oddEvenSort = arr => {
//    arr.sort(sorter);
// };
// oddEvenSort(arr);
// console.log(arr);