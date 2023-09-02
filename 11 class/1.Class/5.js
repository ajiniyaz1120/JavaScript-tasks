class Person {
    constructor(options){
        this.name = options.name;
        this.surname = options.surname;
        this.year = options.year;
        this.address = options.address;
    }

    fullname(){
        return this.name + ' ' + this.surname;
    }

    age(){
        return new Date().getFullYear() - this.year;
    }
}

class Worker extends Person {
    constructor(options){
        super(options);
        this.profession = options.profession;
        this.salary = options.salary;
    }

    salaryPerYear(){
        return this.salary * 12;
    }
}

var Kate = new Worker({
    name: 'Kate',
    surname: 'Karter',
    year: 1990,
    address: 'Nukus street',
    profession: 'web programmer',
    salary: 2000,
});

console.log(Kate.fullname());
console.log(Kate.age());
console.log(Kate.salaryPerYear());