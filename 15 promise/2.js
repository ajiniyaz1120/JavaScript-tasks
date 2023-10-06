'use strict';

let urls = [
    'user.json',
    'guest.json'
]

let chain = Promise.resolve();

let results = [];

// в цикле добавляем задачи в цепочку

urls.forEach((function(url)  {
    chain = chain
        .then(()=> httpGet(url))
        .then((result) => {
        results.push(result);   
    })
}))

// в кoнце - выводим результаты 
chain.then(()=>{
    console.log(results);
});



