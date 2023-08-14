/* Составьте программу, которая принимает с клавиатуры целое число и, если оно соответствует оценке ученика, выводит
 на экран соответствующую «текстовую форму оценки» 
(1 или 2 – «неудовлетворительно», 3 – «удовлетворительно», 4 – «хорошо», 5 – «отлично»). В случае, 
если число не является оценкой, следует вывести на экран соответствующее текстовое сообщение.
ввод: 5 ⇒ вывод: отлично; ввод: 6 ⇒ вывод: это не оценка) */

/* Klaviyaturadan uliwma sandi alatug'in da'stu'r jazin' ha'm eger oqiwshinin' bahasina tuwri kelse shig'adi. "tekstti bahalaw tu'ri" ne mas keletug'in ekranda (1 yaki 2 - "qaniqarsiz", 3 - "qaniqarli", 4 - "jaqsi", 5 - "u'lgili"). Qashan , eger san shamalap bolmasa, tiyisli tekstli xabar ko'rsetiliwi kerek. 
kiriw: 5 ⇒ shigiw kerek: "u'lgili"; kiriw: 6 ⇒ shig'iw kerek: bul shamalap emes. */

let studentScore = +prompt("Оценка ученика: ")

// if(studentScore === 5){
//     alert("отлично")
// }else if(studentScore === 4){
//     alert("хорошо")
// }else if(studentScore === 3){
//     alert("удовлетворительно")
// }else if(studentScore === 1 || studentScore === 2){
//     alert("неудовлетворительно")
// }else{
//     alert("это не оценка")
// }

switch (studentScore) {
    case 1:
        alert("неудовлетворительно")
        break;
    case 2:
        alert("неудовлетворительно")
        break;
    case 3:
        alert("удовлетворительно")
        break;
    case 4:
        alert("хорошо")
        break;
    case 5:
        alert("отлично")
        break;
    default:
        alert("это не оценка")
        break;
}