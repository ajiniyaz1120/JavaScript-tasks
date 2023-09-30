// Глупая сортировка

let arr = filterArray(['10',true,undefined, null, 9, 15, 2]);

console.log(gnomeSort(arr));

function gnomeSort(arr){
    let i = 1;

    while (i < arr.length){
        if (arr[i-1] > arr[i] && i > 0) {
            swap(arr, i , i - 1);
            i--;
        }
        else i++;
    }

    return arr;
}

function swap(arr, i , j){
    let val = arr[i];
    arr[i]= arr[j];
    arr[j]=val;
}

function filterArray(arr){
    return arr.filter((val)=> (typeof (val) != 'boolean' && val == Number(val))).map((val) => Number(val));
}