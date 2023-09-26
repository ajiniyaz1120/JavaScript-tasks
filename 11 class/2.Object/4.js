function Reader(data){
    this.fullname = data.fullname;
    this.idTicket = data.idTicket;
    this.faculty = data.faculty;
    this.birthDay = data.birthDay;
    this.phoneNum = data.phoneNum;
}

Object.defineProperties(Reader.prototype,{
    'talkBook':{
        value: function(){
            if(typeof arguments[0] == 'number'){
                console.log(`${this.fullname} взял ${arguments[0]} книги`);
            }

            if(typeof arguments[0] == 'string'){
                console.log(`${this.fullname} взял книги ${Array().join.call(arguments,', ')}`);
            }
        },
        enumerable: false
    },

    'returnBook': {
        value: function(){
            if (typeof arguments[0] == 'number') {
                console.log(`${this.fullname} вернул ${arguments[0]} книги`);
            }
            if(typeof arguments[0] == 'string'){
                console.log(`${this.fullname} вернул книги ${Array().join.call(arguments,', ')}`);
            }
        },
        enumerable: false
    }
});

let readers = [
    new Reader({fullname: 'John', idTicket: 15, faculty: 'Web', birthDay: new Date(1999,01,01), phoneNum: 7344641}),
    new Reader({fullname: 'Jerry', idTicket: 10, faculty: 'Web', birthDay: new Date(2000,01,02), phoneNum: 7193926}),
    new Reader({fullname: 'Sara', idTicket: 22, faculty: 'Web', birthDay: new Date(1999,02,04), phoneNum: 4881344}),
];

readers[0].talkBook(3);
readers[1].talkBook('Anna','Tumaris','Alpamis')