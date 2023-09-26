function Person(fullname,age){
    this.age = age || undefined;
    this.fullname = fullname || '';
}

Object.defineProperties(Person.prototype,{
    'talk': {
        value: function(){
            console.log(`${this.fullname} говорит`);
        },
        enumerable: false
    },
    
    'move':{
        value: function(){
            console.log(`${this.fullname} двигается`);
        },
        enumerable: false
    }
});

let person1 = new Person();
let person2 = new Person('John',20);

console.log(person1);
console.log(person2)