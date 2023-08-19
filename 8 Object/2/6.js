function Person(name,surname,year,address){
    this.name = name;
    this.surname = surname;
    this.year = year;
    this.address = address;

    this.fullname =  () => {
        return this.name + ' ' + this.surname;
    }

    this.age = function (){
        return new Date().getFullYear() - this.year;
    }
}

let person = new Person('aaa','bbb',1979,'ccc');

console.log(person.fullname());