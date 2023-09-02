var Person = function (options){
    this.name = options.name;
    this.surname = options.surname;
    this.year = options.year;
    this.address = options.address;

    this.fullname = function (){
        return this.name + ' ' + this.surname;
    }

    this.age = function (){
        return new Date().getFullYear() - this.year;
    };
};

var Worker = function (Obj){
    Object.setPrototypeOf(Worker, Obj);
    Object.setPrototypeOf(Worker.prototype, Obj.prototype);

    function Worker(options){
        Object.getPrototypeOf(Worker).call(this, options);

        this.profession = options.profession;
        this.salary = options.salary;

        this.salaryPerYear = function (){
            return this.salary * 12;
        };
    }
    return Worker;
}(Person);

var Kate = new Worker({
    name: 'Kate',
    surname: 'Karter',
    year: 1990,
    address: 'Nukus street',
    profession: 'web programmer',
    salary: 2000,
});

console.log(Kate);
console.log(Kate.fullname());
console.log(Kate.age());
console.log(Kate.salaryPerYear());