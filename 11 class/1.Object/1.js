function School(options){
    this._name = options.name;
    this.owner = options.owner;
    this.number = options.number;
    this.location = options.location;
    this.established = options.established;
    this.age = new Date().getFullYear() - this.established;
}

Object.defineProperty(School.prototype, 'name', {
    get: function(){
        return this._name;
    },
    set: function (value){
        if (value.length < 3) {
            console.log('Имя слишком короткое');
            return;
        }
        this._name = value;
    }
});

var school = new School({
    name: 'John',
    owner: 'Will',
    number: 25,
    location: 'Nukus',
    established: 2010,
});

console.log(school);