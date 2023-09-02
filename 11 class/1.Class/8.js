class Polygon{
    constructor(data){
        this.width = data.width;
        this.heigth = data.heigth;
        this.corners = data.corners;
    }
}

class Square extends Polygon{
    constructor(data){
        super(data);
        this.name = data.name;
        this._area = data.width * data.heigth;
    }

    get area(){
        return this._area;
    }

    set area(value){
        this._area = value;
    }
}

var square = new Square({
    width: 20,
    heigth: 10,
    corners: 4,
    name: 'Square',
});

console.log(square);
console.log('Area:',square.area);