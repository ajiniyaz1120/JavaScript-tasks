function printNumbers(from, to) {
    let id = setTimeout(time = () => {
        console.log(++from);
        if(from !== to){
            id = setTimeout(time, 1000);
        }
    }, 1000);
}

printNumbers(2, 5)