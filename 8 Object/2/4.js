let cinema = {
    film: {
        genre: {
            actionMovie: {
                name: 'Незримный',
                year: 2012,
                actor: 'Jon Karter',
            }, 
            western: {
                name: 'Незримный',
                year: 2012,
                actor: 'Jon Will',
            },
            detective:{
                name: 'Nezrimniy',
                year: 2012,
                actor: 'Will Smit',
            },
            drama: {
                name: 'Nzrimniy',
                year: 2012,
                actor: 'Jonatan Karter',
            }
        }
    },

    serial: {
        genre: {
            'historical Film': {
                name: 'Незримный',
                year: 2012,
                actor: 'Jon Uill',
            },
            comedy: {
                name: 'Незримный',
                year: 2012,
                actor: 'Smith Worners',
            },
            melodrama: {
                name: 'Незримный',
                year: 2012,
                actor: 'Dua Lipa'
            },
        }
    },

    trailer: {
        genre: {
            'fairy tale': {
                name: 'Незримный',
                year: 2012,
                actor: 'Eidson Layn',
            },
            political: {
                name: 'Незримный',
                year: 2012,
                actor: 'Smith Warner',
            }
        }
    }
}

showFilm(cinema);

function showFilm(obj) {
    for(key in obj){
        console.log(key + ' -> ' + obj[key]);
    }
}