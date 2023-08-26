// У нас есть массив объектов, который нужно отсортировать:
// users.sort(byField('name'));
// users.sort(byField('age'));

// То есть, чтобы вместо функции, мы просто писали byField(fieldName).

// Напишите функцию byField, которая может быть использована для этого.

// Bizde saralaw ushın obiektler kompleksi berilgen:
// users.sort (byField ('name'));
// users.sort (byField ('age'));

// Sonday etip, funkciya ornına biz tek byField (fieldName) jazamız.

// Onıń ushın isletiliwi múmkin bolǵan byField funksiyasın jazıń.

let users = [
  { name: "Jon", age: 18 },
  { name: "Will", age: 21 },
  { name: "Smith", age: 26 },
  { name: "Tom", age: 25 },
];

users.sort(byField("age"));
console.log(users);
users.sort(byField('name'));
console.log(users);

function byField(str) {
  return function (objFirst, objSecond) {
    if (typeof objFirst[str] == "string") {
      return objFirst[str].localeCompare(objSecond[str]);
    }
    return objFirst[str] - objSecond[str];
  };
}




// function byField(fieldName) {
//   return function(a, b) {
//       if (a[fieldName] > b[fieldName]) {
//           return 1;
//       }
//       if (a[fieldName] < b[fieldName]) {
//           return -1;
//       }
//       return 0;
//   };
// }

// // Пример использования:

// var users = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 40 }
// ];

// users.sort(byField('name'));
// console.log(users);

// users.sort(byField('age'));
// console.log(users);