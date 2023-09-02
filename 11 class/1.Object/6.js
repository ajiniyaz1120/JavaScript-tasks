class Transport{
    constructor(data){
        this._color = data.color;
        this._model = data.model;
        this._madeBy = data.madeBy;
        this._madeDate = data.madeDate;
    }

    get model(){
        return this._model;
    }

    get madeBy(){
        return this._madeBy;
    }

    get madeDate(){
        return this._madeDate;
    }

    get color(){
        return this._color;
    }

    set color(value){
        if (typeof value === 'string') {
            this._color = value;
        }else{
            throw new Error('Something went wrong');
        }
    }

    info(){
        console.log(JSON.stringify(this, null, 2));
    }
}

class Car extends Transport{
    constructor(data){
        super(data);
        this._price = data.price;
        this._owner = data.owner;
    }

    sell(owner, price){
        if (typeof owner === 'string') {
            this._price = price;
            this._owner = owner;
        }else{
            throw new Error('Name is spelled incorrectly');
        }
    }

    get price(){
        return this._price;
    }

    get owner(){
        return this._owner;
    }
}

var car = new Car({
    color: 'red',
    model: 'Tesla S',
    madeBy: 'Tesla',
    madeDate: new Date(2019),
    owner: 'Ilon Mask',
    price: 40000,
})

car.info()