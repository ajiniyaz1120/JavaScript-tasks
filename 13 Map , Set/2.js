// let messages = [
//     { text: "Hello", from: "John" },
//     { text: "How goes?", from: "John" },
//     { text: "See you soon", from: "Alice" }
//   ];
  
//   Теперь вопрос стоит так: какую структуру данных вы бы предложили использовать для хранения информации о том, когда сообщение было прочитано?
  
//   В предыдущем задании нам нужно было сохранить только факт прочтения «да или нет». Теперь же нам нужно сохранить дату, и она должна исчезнуть из памяти при удалении «сборщиком мусора» сообщения.
  
// Endi soraw tuwıladı : xabar qashan oqilǵanliǵi haqqındaǵı maǵlıwmatlardı saqlaw ushın qaysı maǵlıwmatlar strukturasınan paydalanıwdı usınıs qilasiz?
 
//  Aldınǵı wazıypada biz tek " awa yamasa joq" ti oqıw faktini saqlap qalıwımız kerek edi. Endi biz sáneni saqlawımız kerek hám xabar shiǵindi jiynawshi tárepinen óshirilgende ol yaddan joǵalıp ketiwi kerek.

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'How goes?', from: 'John'},
    {text: 'See you soon', from: 'Alice'}
]

let dateSaveMessages = new Map();

dateSaveMessages.set(messages[0], new Date())

console.log(dateSaveMessages.get(messages[0]).toLocaleString());