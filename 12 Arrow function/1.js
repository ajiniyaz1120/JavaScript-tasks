let greeter = {
    greet: function(name){
        console.log("Hello", name);
    },

    greetAll: function(names){
        let self = this;
        names.forEach(function(name){
            self.greet(name);
        });
    }
};

let greeter2 = {
    greet: (name) => console.log('Hello', name),

    greetAll: function(names){
        names.forEach(name => this.greet(name));
    }
};

greeter.greetAll(['John', 'Alpamıs','Dastan','/n']);
greeter2.greetAll(['Sanjar', 'Nadır', 'Allayar']);