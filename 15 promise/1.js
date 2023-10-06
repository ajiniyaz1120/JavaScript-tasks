// let delay = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), time);
//   });
// };

// delay(2000).then(() => {
//   console.log("Success");
// });



let isBookshopOpen = true;
//Promise
let willIGetNewBook = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (isBookshopOpen) {
      let book = {
        title: "The BIG book of knowledge",
        author: "Brown Watson",
      };
      resolve(book); //fulfilled
    } else {
      let reason = new Error("The bookstore is closed");
      reject(reason); // reject
    }
  },1500);
});

willIGetNewBook
    .then(result => console.log(result))
    .catch(error => console.log(error.message))