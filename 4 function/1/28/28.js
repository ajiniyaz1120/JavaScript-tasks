/*
 Составьте программу, которая принимает с клавиатуры три числа и проверяет, являются ли эти числа углами одного и того же треугольника. 
По результатам проверки следует вывести на экран соответствующее текстовое сообщение.
 ввод: 90, 30, 60 ⇒ вывод: это треугольник; ввод: 90, 0, 90 ⇒ вывод: это не треугольник)

Klaviaturadan u'sh nomer alatuǵın jáne bul sanlar birdey úshmúyeshliktiń múyeshleri ekenligin tekseretuǵın programma dúziń.
Tekseriw nátiyjelerine kóre, ekranda tiyisli tekstli xabar kórsetiliwi kerek.
kirisiw: 90, 30, 60 ⇒ shıǵıw : bul úshmúyeshlik; kirisiw: 90, 0, 90 ⇒ shıǵıw : bul úshmúyeshlik emes)
*/

// let corner
// let result = (triangle) => {
//     let count = 0
//     for (let i = 0 ; i < 3; i++) {
//         corner = +prompt("Введите число :")
//         count += corner
//     }
//     if (count == 180 ) {
//         document.write("это треугольник")
//     }else{
//         document.write("это не треугольник")
//     }
// }
// result(corner)

let corner 
let result = (triangle) => {
    let count = 0
    let i = 0
    while(i < 3){
        corner = +prompt("Введите число : ")
        count += corner
        i++
    }
    if (count == 180) {
        document.write("это треугольник")
    }else{
        document.write("это не треугольник")
    }
}
result(corner)