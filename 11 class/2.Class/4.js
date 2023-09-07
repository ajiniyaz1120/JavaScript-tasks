// Определить класс Reader, хранящий такую информацию о пользователе библиотеки: ФИО, номер читательского билета, факультет, дата рождения, телефон. Методы takeBook(), returnBook().
// Разработать программу, в которой создается массив объектов данного класса. Перегрузить методы takeBook(), returnBook():
// - takeBook, который будет принимать количество взятых книг. Выводит на консоль сообщение "Петров В. В. взял 3 книги".
// - takeBook, который будет принимать переменное количество названий книг. Выводит на консоль сообщение "Петров В. В. взял книги: Приключения, Словарь, Энциклопедия".
// - takeBook, который будет принимать переменное количество объектов класса Book (создать новый класс, содержащий имя и автора книги). Выводит на консоль сообщение "Петров В. В. взял книги: Приключения, Словарь, Энциклопедия".
//  Аналогичным образом перегрузить метод returnBook(). Выводит на консоль сообщение "Петров В. В. вернул книги: Приключения, Словарь, Энциклопедия". Или  "Петров В. В. вернул 3 книги".


// Kitapxana paydalanıwshısı haqqındaǵı tómendegi maǵlıwmatlardı saqlaytuǵın Reader klasın anıqlań : tolıq at, kitapxana kartası nomeri, bólim, tuwılǵan sáne, telefon nomeri. takeBook (), returnBook () usılları.
 // Bul klass obiektleri dızbegin (massivin) jaratıwshı baǵdarlamanı islep shıǵıw. TakeBook (), returnBook () usılların artıqsha júkleń:
 // - alınǵan kitaplar sanın qabıl etetuǵın takeBook. Konsolda " Petrov V.V 3 kitap aldı" xabarın kórsetedi.
 // - ózgeriwsheń sanlı kitap atların qabıl etetuǵın takeBook. Konsolda " Petrov vv kitap aldı : Hádiyseler, sózlik, entsiklopediya" xabarın kórsetedi.
 // - Book klasınıń ózgeriwsheń sanı obiektlerin qabıl etetuǵın takeBook (kitap atı hám avtorın óz ishine alǵan jańa klass jaratıń ). Konsolda " Petrov V.V kitap aldı : Hádiyseler, sózlik, entsiklopediya" xabarın kórsetedi.
 // Tap sonday, returnBook () usılın artıqsha júkleń. Konsolǵa " Petrov V.V kitaplardı qaytardı : Hádiyseler, sózlik, entsiklopediya" xabarın kórsetedi. Yamasa " V. V. Petrov 3 kitaptı qaytarıp berdi".
class Reader{
  constructor(data){
    this.fullname = data.fullname;
    this.cardNumber = data.cardNumber;
    this.faculty = data.faculty;
    this.birthdate = data.birthdate;
    this.phoneNumber = data.phoneNumber;
  }

  takeBook(bookTitle){
    console.log(`${this.fullname} взял книгу ${bookTitle}`);
  }

  returnBook(){
    
  }
}

let reader1 = new Reader({
  fullname: "Иван Иванов",
  cardNumber: "12345",
  faculty: "Факультет информатики",
  birthdate: "12.01.1999",
  phoneNumber: "123-456-7890",
})
reader1.takeBook("Богатый отец – бедный отец")