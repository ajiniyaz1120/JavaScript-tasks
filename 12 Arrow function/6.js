var arr = [
  { name: "Timur", age: 18 },
  { name: "Islam", age: 25 },
  { name: "Muslim", age: 20 },
  { name: "Eldar", age: 17 }
];

console.log(arr.sort(byField('age')));
function byField(str){
  return (objFirst, objSecond) =>{
    if(typeof(objFirst[str]) == 'string'){
      return objFirst[str].localeCompare(objSecond[str]);
    }
    return objFirst[str] - objSecond[str]
  };
}