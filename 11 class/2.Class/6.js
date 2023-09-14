/*Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
а) Класс Student содержит переменные: String firstName, lastName, group. А также double averageMark, содержащую среднюю оценку.
б) Создать переменную типа Student, которая ссылается на объект типа Aspirant.
в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100 грн, иначе 80. Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200 грн, иначе 180.
г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива. 
*/

/*
Miyraslar úlgisin jaratıń, Student klasın hám Aspirant klasın ámelge asırıń, aspirant studentten qanday da ilimiy jumıs bar ekenligi menen parıq etedi.
 a) Student klasında ózgeriwshiler ámeldegi: String firstName, lastName, group. Sonıń menen birge, ortasha reytingni óz ishine alǵan eki ese averageMark.
 b) Aspirant tipidagi ob'ektke tiyisli Student tipidagi ózgeriwshi jaratıń.
 c) Studentler klası ushın stipendiya muǵdarın qaytaratuǵın getScholarship () usılın jaratıń. Eger studenttiń ortasha bahası 5 bolsa, ol jaǵdayda bul muǵdar 100 UAH, keri jaǵdayda 80. Aspirant klasında bul usıldı biykar etiń. Eger aspiranttıń ortasha bahası 5 bolsa, ol jaǵdayda bul muǵdar 200 UAH, keri jaǵdayda 180.
 d) Student hám Aspirant klassları ob'ektlerin óz ishine alǵan Student tipidagi dızbekti jaratıń. Hár bir dızbek elementi ushın getScholarship () usılın shaqırıń.
*/

class Student{
    constructor(data){
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.group = data.group;
        this.averageMark = data.averageMark;
    }

    getScholarship(){
      return this.averageMark === 5.0 ? 100 : 80;
    }
}

class Aspirant extends Student{
    constructor(data){
        super(data)
    }

    getScholarship(){
        return this.averageMark === 5.0 ? 200 : 180;
    }
}

let students1 = new Student({firstname:'John',lastname:'Doe',group:'GroupA', averageMark:4.8});
let aspirant1 = new Aspirant({firstname:'Alice',lastname:'Smith',group:'GroupB',averageMark:5.0,})
let aspirant2 = new Aspirant({firstname:'Bob', lastname:'Johnson', group:'GroupC', averageMark:4.7,})

let students = [students1, aspirant1, aspirant2];

for (const student of students) {
    console.log(`${student.firstname} ${student.lastname} получает стипендию: ${student.getScholarship()} грн.`);
}