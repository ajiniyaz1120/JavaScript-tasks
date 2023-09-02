function Time(options){
    this.time = options.time;

    this.clock = function (){
        var date = new Date();
        var hours = date.getHours();
        var minut = date.getMinutes();
        var sec = date.getSeconds();
        console.log(`${hours}:${minut}:${sec}`);
    };

    this.startClock = function(){
        var self = this;
        this.id = setTimeout(function start(){
            self.clock();
            this.id = setTimeout(start, 1000);
        }, 1000);
    };

    this.stopClock = function(){
        clearTimeout(this.id);
    };

    this.startTimer = function (){
        var timer = new Date();
        timer.setHours(this.time[0], this.time[1], this.time[2]);

        this.idTimer = setTimeout(function start(){
            timer = new Date(timer.getTime()-1000);
            console.log(`${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}`);
            this.idTimer = setTimeout(start, 1000);
        }, 1000);
    };

    this.stopTimer = function(){
        clearTimeout(this.idTimer);
    }
}

var clock = new Time({
    time: [2, 30, 10]
});

clock.startTimer();