// создайте счетчик. В счетчике должно быть: 1) Метод обнуление счетчика. 2) Возможность изменять начало отчета счетчика.

// Esaplaǵısh jaratıw. Esaplaǵishda tómendegiler bolıwı kerek: 1) Esaplaǵishdı nolge salıw usılı. 2) Esaplaǵısh esabatınıń baslanıwın ózgertiw múmkinshiligi.

function createCounter(startValue) {
  let count = startValue;

  function increment() {
    count++;
    return count;
  }

  function reset() {
    count = 0;
    return count;
  }

  function setStartValue(newStartValue) {
    count = newStartValue;
  }
  return {
    increment,
    reset,
    setStartValue,
  };
}
let counter = createCounter(3);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
counter.setStartValue(5)
console.log(counter.increment());
console.log(counter.increment());

// function myFunction() {
//   document.getElementById("demo").innerHTML = counter.increment();
// }
// function myFunction2() {
//   document.getElementById("demo").innerHTML = counter.reset();
// }
// function myFunction3() {
//   document.getElementById("demo").innerHTML = counter.setStartValue();
// }
