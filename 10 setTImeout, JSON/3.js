// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

// Paydalanıwshını JSON ǵa aylantırıń, keyininen JSON dı basqa ózgeriwshige oqiń.

let user = {
  name: "Василий Иванович",
  age: 35
};

let userJSON = JSON.stringify(user);

let newUser = JSON.parse(userJSON);

console.log(newUser);