var restaurant = new Object({
    name: 'First',
    loacation: 'Nukus street',
    workers: {
        waiter: 10,
        manager: 2,
    },
    menu: {
        firstMeal: {
            meat:{
                price: 1000,
                caloria: '500kkal',
            }
        },
        secondMeal:{
            soup:{
                price: 200,
                caloria: '100kkal',
            }
        },
        drinks:{
            cola:{
                litre: [0.5,1,1.5],
                price: [3000, 7000, 12000],
            }
        }
    },  

    reservationSum:{
        sum: 0,
        sumfonOnePerson: 100,
    },

    reservation(count){
        this.reservationSum.sum = this.reservationSum.sumfonOnePerson*count;
    }
});

restaurant.reservation = 5;
showProperty(restaurant);

function showProperty(object) {
    for(key in object){
        console.log(key + ' -> ' + object[key]);
    }
}