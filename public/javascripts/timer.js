let runTime = null;

let clockTime = {

    start: function(time = this.time) {
        var count = 0;
        if (!runTime) {
            this.time = time || 120;
            runTime = setInterval((time) => {
                this.time--;
                if (this.time === 0) clockTime.stop()
                this.render();
            },1000);
        }
        Game.update();
    },

    stop: function(time) {
        clearInterval(runTime);
        if (time) {
            this.time = time;
            this.render();
        }
        if (this.time === 0) {
            this.time = "TIME'S UP";
            gameOver();
        }
        timer = null;
        runTime = null;
    },

    reset: function() {
        this.time = 120;
        this.stop();
    },

    render: function() {
        if (this.time > 0) {
            let min = Math.floor(this.time / 60);
            let sec = Math.floor(this.time % 60);
            if (sec < 10) {
                sec = `0${sec}`;
            }
            Game.timerEl.textContent = `${min}:${sec}`;
        } else {
            Game.timerEl.style.color = 'red';
            Game.timerEl.textContent = this.time;
        }
    },
    time: 120
}