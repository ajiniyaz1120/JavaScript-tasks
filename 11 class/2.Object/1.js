function Phone(data){
    this.model = data.model;
    this.number = data.number;
    this._weight = data.weight;
}

Object.defineProperties(Phone.prototype,{
    'getNumber': {
        value: function(){
            return this.number;
        },
        enumerable: false
    },

    'showInfo': {
        value: function(){
            console.log(JSON.stringify(this,null,2));
        },
        enumerable: false
    },

    'receiveCall': {
        value: function(name, number){
            if(arguments.length !== 2){
                console.log(`Звонить ${name}`);
            }else{
                console.log(`Звонить ${name} ${number} номера`);
            }
        },
        enumerable: false
    },

    'sendMessage': {
        value: function(number){
            console.log(`Сообщение отправлено нп этот номер: ${number}`);
        },
        enumerable: false
    }
})

let phone1 = new Phone({
    weight: 2,
    number: 1234567,
    model: 'Samsung'
})

phone1.showInfo();
phone1.receiveCall('Smit')
phone1.receiveCall('Billie',1234567)