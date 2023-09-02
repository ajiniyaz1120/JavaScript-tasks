class Book{
    constructor(data){
        this._author = data.author;
        this.edition = data.edition;
        this._publisher = data.publisher;
        this.paperColor = data.paperColor;
        this.yearOfIssue = data.yearOfIssue;
    }

    get author(){
        return this._author;
    }

    get publisher(){
        return this._publisher;
    }

    renewal(renewalObj){
        this.edition++;
        this.yearOfIssue = renewalObj.yearOfIssue;
        this.paperColor = renewalObj.paperColor;
    }
}

class MathBook extends Book{
    constructor(data){
        super(data);
        this.page = data.page;
        this._direction = data.direction;
    }

    get direction(){
        return this._direction;
    }
}

var math = new MathBook({
    page: 200,
    edition: 2,
    author: 'Tom',
    yearOfIssue: 2010,
    paperColor: 'white',
    publisher: 'OReilly',
    direction: 'Mathematic'
})

console.log('Author: ', math.author);
console.log('Page: ', math.page);