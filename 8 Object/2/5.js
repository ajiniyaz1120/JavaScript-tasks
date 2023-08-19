var stock = new Object({

    loacation: 'Nukus street',
    workers: {
        movers: 10,
        watchers: 2,
    },

    products: {
        'construction goods' : {
            solutions: ['aaa','bbb']
        },

        foods:{
            meal:['aaa','bbb'],
            drinks: ['aaa', 'bbb']
        }
    },

    volume: 500,
    timeOfArrival: 15,
})

showProperty(stock);

function showProperty(object){
    for (key in object){
        console.log(key + ' -> ' + object[key]);
    }
}