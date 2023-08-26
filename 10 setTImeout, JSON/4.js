// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они возникают, из сериализации по его имени.

// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

// Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

// Dóńgelek siltemelerdiń ápiwayı jaǵdaylarında biz olardıń atı menen seriyalaniwina alıp keletuǵın ózgeshelikti esaptan tısqarı etiwimiz múmkin.

// Lekin geyde biz attan paydalana almaymız, sebebi ishki ornatılǵan obiektlerde bul at penen basqa ayrıqshalıqlar bolıwı múmkin. Sol sebepli siz mulkti mánis boyınsha tekseriwińiz múmkin.

// Ushırasıwǵa belgi etiwshi ayrıqshalıqlardı alıp taslaytuǵın JSON transform almastırıwshı funkсiyanı jazıń :

let room = {
  number: 23,
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
  place: room,
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log(
  JSON.stringify(meetup, function replacer(key, value) {
    /* ваш код */
    if (key !== "" && value === meetup) {
      return undefined;
    }
    return value;
  })
);

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
