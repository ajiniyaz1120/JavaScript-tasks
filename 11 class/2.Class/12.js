/*
а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
б) Создать класс Категория, имеющий переменные имя и массив товаров. Создать несколько объектов класса Категория. 
в) Создать класс Basket, содержащий массив купленных товаров. 
г) Создать класс User, содержащий логин, пароль и объект класса Basket. Создать объект класса User. (Интернет магазин)
*/

/*
A) Ózgeriwshiler atı, bahası, reytingi menen ónim klasın jaratıń.
b) Ózgeriwshiler atı hám ónimler dızbekine iye bolǵan Category klasın jaratıń. Category klasınıń bir neshe obiektlerin jaratıń.
c) Satıp alınǵan zat etilgen ónimler qatarın óz ishine alǵan sebet klasın jaratıń.
d) Login, parol hám Basket klasınıń ob'ektin óz ishine alǵan User klasın jaratıń. User klasınıń obiektin jaratıń. (Onlayn dúkan )
*/

class Product {
    constructor(name, price, rating){
        this.name = name;
        this.price = price;
        this.rating = rating;
    }
}

class Category {
    constructor(name){
        this.name = name;
        this.foods = [];
    }

    addItem(food){
        this.foods.push(food)
    }

}

class Basket {
    constructor(){
        this.items = [];
    }

    addItem(item){
        this.items.push(item);
    }

    getTotalPrice(){
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
        this.basket = new Basket();
    }

    addToBasket(item){
        this.basket.addItem(item);
    }

    viewBasket(){
        console.log(`User: ${this.username}'s Basket`);
        this.basket.items.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - $${item.price}`);
        });
        console.log(`Total Price: $${this.basket.getTotalPrice()}`);
    }
}

let item1 = new Product('Лаптоп', 800,4.5);
let item2 = new Product('Смартфон',500,4.2)
let item3 = new Product('Наушники',100,4.0)

let electronCategory = new Category('Электроника')
electronCategory.addItem(item1);
electronCategory.addItem(item2);

let accessoriesCategory = new Category('Акксессуары');
accessoriesCategory.addItem(item3);

let user = new User('john_doe','password123');
user.addToBasket(item1);
user.addToBasket(item3);

user.viewBasket()

