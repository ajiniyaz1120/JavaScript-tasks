class Employee {
  constructor(data) {
    this.age = data.age;
    this._surname = data.surname;
    this.birthDate = data.birthDate;
    this._firstname = data.firstname;
  }

  set age(value) {
    if (typeof value === "number") {
      this._age = value;
    } else {
      throw new Error("Value must be Number");
    }
  }

  set firstname(value) {
    if (typeof val === "string") {
      this._firstname = value;
    } else {
      throw new Error("Value must be String!");
    }
  }

  get fullName() {
    return this._firstname + " " + this._surname;
  }
}

class Manager extends Employee {
  constructor(data) {
    super(data);
    this.subordinates = [];
    this.salary = data.salary;
  }

  addEmployee(employee) {
    this.subordinates.push(employee);
  }
}

var manager = new Manager({
  age: 20,
  salary: 2000,
  surname: "Smith",
  birthDate: 1990,
  firstname: "Tom",
});

console.log(manager.fullName);
console.log(manager.salary);