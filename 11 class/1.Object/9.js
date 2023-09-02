class Employee{
    constructor(data){
        this._age = data.age;
        this._surname = data.surname;
        this.birthDate = data.birthDate;
        this._firstname = data.firstname;
    }

    get age(){
        return this.age;
    }

    set age(value){
        if (typeof value === 'number') {
            this._age = value;
        } else {
            throw new Error('Value must be Number');
        }
    }

    set firstname(value){
        if (typeof value === 'string') {
            this._name = value;
        } else {
            throw new Error('Value must be String!')
        }
    }

    get fullName (){
        return this._firstname + ' ' + this._surname;
    }
}

class Manager extends Employee{
    constructor(data){
        super(data);
        this.subordinates = [];
        this.salary = data.salary;
    }

    set addEmployee(employee){
        return this.subordinates.push(employee);
    }
}

var manager = new Manager({
    age: 20,
    salary: 2000,
    surname: 'Holland',
    birthDate: 1990,
    firstname: 'Tom',
})

console.log(manager);
console.log(manager.fullName);