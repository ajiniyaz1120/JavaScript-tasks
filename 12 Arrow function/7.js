let checkPassword = makePassword(12345);

function makePassword(password){
    return (str) => {
        return password == str;
    };
}

console.log(checkPassword(12345));
console.log(checkPassword(23456));