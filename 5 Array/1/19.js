/*
Дан массив, содержащий положительные и отрицательные числа. Заменить все элементы массива на противоположные по знаку.
Например, задан массив [1, -5, 0, 3, -4]. После преобразования должно получиться [-1, 5, 0, -3, 4].

Unamlı hám teris nomerlerdi óz ishine alǵan massiv berilgen. Barlıq massiv elementlerin keri belgiler menen almastırıń.
Mısalı,[1,-5, 0, 3,-4] massiv berilgen. Ótkeriwden keyin ol [-1, 5, 0,-3, 4] bolıwı kerek.
*/

let arr = [1,-5,0,3,-4] , result=[]
for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]*-1)    
}
console.log(result);
