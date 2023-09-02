class Book{
    constructor(data){
        this._author = data.author;
        this.edition = data.edition;
        this._publisher = data.publisher;
        this._paperColor = data.paperColor;
        this.yearOfIssue = data.yearOfIssue;
    }

    get author(){
        return this._author;
    }

    get edit(){
        return this.edition;
    }

    get pub(){
        return this._publisher;
    }

    get paperColor(){
        return this.paperColor;
    }

    get yearOfIs(){
        return this.yearOfIssue;
    }
}

class MathBook extends Book{
    constructor(data){
        super(data)
        this._page = data.page;
        this._direction = data.direction;
    }

    get direction(){
        return this._direction;
    }

    get page(){
        return this._page
    }
}

var math = new MathBook({
    page: 200,
    edition: 2,
    author: 'Donald',
    yearOfIssue: 2010,
    paperColor: 'white',
    publisher: 'OReilly',
    direction: 'Mathematic'
});

console.log(math);
console.log(math.page);