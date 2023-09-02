class Polygon {
    constructor(data){
        this.width = data.width;
        this.height = data.height;
        this.corners = data.corners;
    }
}

class Square extends Polygon{
    constructor(data){
        super(data);
        this.name = data.name;
        this._area = data.width * data.height;
    }

    get area(){
        return this._area;
    }
}

var square = new Square({
    width: 20,
    height: 10,
    corners: 4,
    name: 'Square',
})

console.log(square);