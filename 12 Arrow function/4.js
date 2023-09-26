let obj1 = {
    name: 'Allayar',
    year: 1998,
    age: 22
}

function showInfo(){
    let str = 'Info';
    for(let key in this){
        str = str + ' ' + this[key];
    }
    return str;
}

Object.defineProperty(Function.prototype, 'bindFunc',{
    value: function(context){
        let args = Array().slice.call(arguments, 1);
        return () => this.apply(context, args.concat.call(arguments));
    },
    writable: false,
    enumerable: false
});

console.log(showInfo.bindFunc(obj1)());