/*Создайте суперкласс Shape и его наследники Circle, Rectangle. Класс Shape содержит абстрактный метод draw() и переменную хранящую цвет. Классы Circle, Rectangle содержат координаты точек. Создать массив содержащий эти фигуры. В цикле нарисовать их (вызвать метод draw). Добавить метод equals() для классов Shape, Circle, Rectangle.*/

/*
Shape superklassin jáne onıń áwladları Circle, Rectangle jaratıń.
Shape klasında abstrakt draw() usılı hám reń ózgeriwshisi bar.
Circle hám Rectangle klassları noqatlar koordinatalarınıń óz ishine aladı.
Bul sırtqı kórinislerdi óz ishine alǵan dızbek(massiv) jaratıń.
Olardı halqaǵa sızıń (draw usılın shaqırıń ). Shape, Circle, Rectangle klassları ushın equals() usılın qosıń.
*/

class Shape{
    constructor(color){
        this.color = color;
    }

    draw(){
        return `Рисуем фигуру цветом ${this.color}`;}
    equals(other){
        return this.constructor === other.constructor && this.color === other.color;
    }
}

class Circle extends Shape{
    constructor(color,x,y,radius){
        super(color);
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    draw(){
       return `Рисуем круг цветом ${this.color} в (${this.x}, ${this.y}) с радиусом ${this.radius}`;
    }
}

class Rectangle extends Shape{
    constructor(color,x,y,width,height){
        super(color)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(){
       return `Рисуем прямоугольник цветом ${this.color} в (${this.x}, ${this.y}) с шириной ${this.width} и высота ${this.height}`;
    }
}

let shapes = [
    new Circle('green', 4, 3, 10),
    new Rectangle('red', 5, 10, 7,  8),
    new Circle("yellow", 50, 60, 8),
]

shapes.forEach((shape)=>{
    console.log(shape.draw())
})

let circle1 = new Circle('red',10,20,5);
let circle2 = new Circle('red',10,20,5);
let rectangle = new Rectangle('blue',30,40,15,10);

console.log(circle1.equals(circle2));
console.log(circle1.equals(rectangle));

// class Shape {
//     constructor(color) {
//         this.color = color;
//     }

//     draw() {
//         return `Drawing a shape with color ${this.color}`;
//     }

//     equals(other) {
//         return this instanceof other.constructor && this.color === other.color;
//     }
// }

// class Circle extends Shape {
//     constructor(color, x, y, radius) {
//         super(color);
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//     }

//     draw() {
//         return `Drawing a circle with color ${this.color} at (${this.x}, ${this.y}) and radius ${this.radius}`;
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, x, y, width, height) {
//         super(color);
//         this.x = x;
//         this.y = y;
//         this.width = width;
//         this.height = height;
//     }

//     draw() {
//         return `Drawing a rectangle with color ${this.color} at (${this.x}, ${this.y}) with width ${this.width} and height ${this.height}`;
//     }
// }

// let shapes = [
//     new Circle('green', 4, 3, 10),
//     new Rectangle('red', 5, 10, 7, 8),
//     new Circle("yellow", 50, 60, 8),
// ];

// shapes.forEach((shape) => {
//     console.log(shape.draw());
// });

// let circle1 = new Circle('red', 10, 20, 5);
// let circle2 = new Circle('red', 10, 20, 5);
// let rectangle = new Rectangle('blue', 30, 40, 15, 10);

// console.log(circle1.equals(circle2)); 
// console.log(circle1.equals(rectangle)); 
