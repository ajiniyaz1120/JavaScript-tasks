class User{
    constructor(data){
        this.name = data.name;
        this.age = data.age;
        this.email = data.email;
    }

    get nam(){
        return this.name;
    }

    set sendMessage(value){
        return this.email = value
    }
}

class Administrator extends User{
    constructor(data){
        super(data);
        this._role = data.role;
    }

    get role(){
        return this._role;
    }

    set(role){
        return this._role = role;
    }
}

var admin = new Administrator({
    name: 'Stark',
    age: 20,
    email: 'admin@gmail.com',
    role: 'admin',
})

console.log(admin);