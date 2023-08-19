function React(width, height, color){
    this.width=width;
    this.height = height;
    this.color = color;

    this.area = function (){
        return this.width * this.height;
    };

    this.square = function (){
        return width == height;
    };
}

let rect = new React(20,15,'red');

console.log(rect);