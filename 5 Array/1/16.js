/*
Вывести элементы числового массива, которые больше, чем элементы, стоящие перед ними.
Например, дан массив [3, 9, 8, 4, 5, 1]. Следует вывести числа 9 и 5, так как перед ними стоят соответственно числа 3 и 4, которые меньше их.

Sanlı massivtiń aldınǵı elementlerden úlkenlew elementlerin shıǵarıń.
Mısalı,[3, 9, 8, 4, 5, 1] ​​massiv berilgen. 9 hám 5 nomerlerin baspadan shıǵarıwıńız kerek, sebebi olar aldında uyqas túrde 3 hám 4 nomerleri ámeldegi, olar olardan kemrek.
*/

let arr = []
for (let i = 0; i < 6; i++) {
    arr.push(Math.floor(Math.random()*6))    
}
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i]>arr[i-1]) {
        console.log(arr[i]);
    }   
}