function Student(name,surname,direction,course){
    this.name = name;
    this.surname = surname;
    this.direction = direction;
    this.course = course;
}

let student = new Student('aaa','bbb','ccc',4);

console.log(student);