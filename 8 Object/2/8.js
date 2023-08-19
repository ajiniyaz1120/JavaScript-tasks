function Book(name,publisher,edition,theme,year){
    this.name = name;
    this.publishe = publisher;
    this.edition = edition;
    this.theme = theme;
    this.year = year;
}

let book = new Book ('aaa','bbb',3,'ccc',2015);

console.log(book);