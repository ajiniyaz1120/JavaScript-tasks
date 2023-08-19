let school = Object.create({}, {
    name: {
        value: 'Esenin',
        enumerable: true,
        writable: true,
        configurable: true
    },

    number: {
        value: '25',
        enumerable: true
    },

    location: {
        value: 'Qońırat',
        enumerable: true
    },

    established: {
        value: 2010,
        enumerable: true
    },

    countClass: {
        vlaue: {
            totalAmount: 25,
            mathClass:{
                countOfBoars: 1,
                countOfPosters: 5
            }
        }
    },

    'exactScience':{
        value:{
            math: ['algebra','geometry'],
            physics: ['electronics','machanics']
        },
        enumerable: true
    },

    'humanitarianScience': {
        value: ['english language','literature'],
        enumerable: true
    },

    age:{
        get(){
            return new Date().getFullYear() - this.established;
        },
        enumerable: true
    }
});

showProperty(school);

function showProperty(object) {
    for (key in object) {
        console.log(key + ' -> ' + object[key]);
    }
}