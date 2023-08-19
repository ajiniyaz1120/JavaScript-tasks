let person = Object.create({},{
    name: {
        value: 'Aaa',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    surname: {
        value: 'Bbb',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    year: {
        value: new Date(1998, 01,01),
        writable: true,
        enumerable: true,
        configurable: true,
    },
    address: {
        value: 'Aaa',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    hobby: {
        value: ['Aaa','Bbb'],
        writable: true,
        enumerable: true,
        configurable: true,
    },
    fullname: {
        get(){
            return this.name + ' ' + this.surname;
        },
        enumerable: true,
    },
    age: {
        get(){
            return new Date().getFullYear() - this.year.getFullYear();
        },
        enumerable: true,
    },
    work: {
        value: 'web developer',
        writable: true,
        enumerable: true,
        configurable: true,
    },
    skills: {
        value: ['Html','Css'],
        writable: true,
        enumerable: true,
        configurable: true,
    },
    salary: {
        value: '500$',
        writable: true,
        enumerable: true,
        configurable: true,
    },
});

showObj(person);

function showObj(object){
    for (key in object){
        console.log(key+' -> '+object[key]);
    }
}

