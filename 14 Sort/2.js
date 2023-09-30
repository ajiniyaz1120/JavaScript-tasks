//шейкерная сортировка

let arr = filterArray(['10', true, undefined, null, 9 , 15, 2]);

console.log(cocktailSort(arr));

function cocktailSort(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        for(let i = left; i < right; i++){
            if(arr[i] > arr[i+1]){
                swap(arr,i,i+1);
            }
        }
        right--;

        for(let i = right; i > left; i--){
            if (arr[i] < arr[i-1]) {
                swap(arr,i,i-1);
            }
        }
        left++;
    }
    return arr;
}

function swap(arr, i, j){
    let val = arr[i];
    arr[i]=arr[j];
    arr[j]=val;
}

function filterArray(arr){
    return arr.filter((val) => (typeof (val) != 'boolean' && val == Number(val))).map((val) => Number(val))
}
