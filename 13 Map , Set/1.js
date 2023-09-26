// let messages = [
//   { text: "Hello", from: "John" },
//   { text: "How goes?", from: "John" },
//   { text: "See you soon", from: "Alice" },
// ];

// У вас есть к ним доступ, но управление этим массивом происходит где-то ещё. Добавляются новые сообщения и удаляются старые, и вы не знаете в какой момент это может произойти.

// Имея такую вводную информацию, решите, какую структуру данных вы могли бы использовать для ответа на вопрос «было ли сообщение прочитано?». Структура должна быть подходящей, чтобы можно было однозначно сказать, было ли прочитано это сообщение для каждого объекта сообщения.

// P.S. Когда сообщение удаляется из массива messages, оно должно также исчезать из структуры данных.

// P.P.S. Нам не следует модифицировать сами объекты сообщений, добавлять туда свойства. Если сообщения принадлежат какому-то другому коду, то это может привести к плохим последствиям.

// Siz olarǵa kiriwińiz múmkin, lekin bul dızbekti basqarıw basqa orında júz boladı. Jańa xabarlar qosıladı hám eskileri óshiriledi jáne bul qaysı noqatda júz beriwi múmkinligin bilmeysiz.

// Bul maǵlıwmattı esapqa alǵan halda, " xabar o'qilǵanba? " Degen sorawǵa juwap beriw ushın qanday maǵlıwmatlar strukturasınan paydalanıwıńız múmkinligin anıqlań. Dúzılıw uyqas bolıwı kerek, sonda hár bir xabar obiekti ushın bul xabar oqilǵan yamasa oqilǵan yamasa joq ekenligin anıq aytıw múmkin.

// P. S. Xabar xabarlar dızbekinen óshirilgende, ol maǵlıwmatlar strukturasınan da joǵalıp ketiwi kerek.

// P. P. S. Biz xabar obiektleriniń ózin ózgertirmewimiz yamasa ol jerde ayrıqshalıqlardı qospawimiz kerek. Eger xabarlar basqa kodqa tiyisli bolsa, bul jaman aqıbetlerge alıp keliwi múmkin.


let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];

let readmessages = new Set();

readmessages.add(messages[0]);
readmessages.add(messages[1]);
readmessages.add(messages[2]);

console.log(`Было ли прочитано сообщение ${messages[0].from}: ${readmessages.has(messages[0])}`);
console.log(`Было ли прочитано сообщение ${messages[0].from}: ${readmessages.has(messages[1])}`);
console.log(`Было ли прочитано сообщение ${messages[0].from}: ${readmessages.has(messages[2])}`);