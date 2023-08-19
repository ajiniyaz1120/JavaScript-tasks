function Car(name,color,modification,year,maxSpeed){
    this.name = name;
    this.color = color;
    this.modification = modification;
    this.year = year;
    this.maxSpeed = maxSpeed;
}

let car = new Car('aaa','red',2,2015,200);

console.log(car);