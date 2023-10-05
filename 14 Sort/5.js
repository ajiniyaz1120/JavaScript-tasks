//Сортировка расческой

let arr = filterArray(['10',true,undefined,null,252,9,15,2]);

console.log(combSort(arr));

function combSort(arr){
    let factor = 1.247;
    let gapFactor = arr.length / factor;

    while(gapFactor > 1){
        let j = Math.round(gapFactor);

        for(let i=0; j<arr.length; i++){
            if(arr[i] > arr[j]){
                swap(arr,i,j)
            }

            j++
        }
        gapFactor/=factor;
    }
    return arr;
}

function swap(arr,i,j){
    let val = arr[i];
    arr[i] = arr[j];
    arr[j] = val;
}

function filterArray(arr){
    return arr.filter((val) => (typeof (val) != 'boolean' && val == Number(val))).map((val)=>Number(val));
}