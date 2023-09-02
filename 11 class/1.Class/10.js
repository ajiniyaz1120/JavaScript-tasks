class User{
    constructor(data){
        this._name = data.name;
        this.age = data.age;
        this.email = data.email;
    }

    get name(){
        return this._name;
    }

    sendMessage(value){
        this.email = value;
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

    set role(role){
        this._role = role;
    }
}

var admin = new Administrator({
    name: 'John',
    age: 20,
    email: 'admin@gmail.com',
    role: 'admin',
})

console.log(admin.name);
console.log(admin.role);