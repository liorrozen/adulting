function Game() {
    this.intervalMS = 150 // how often the game ticks
    this.maxTime = 100 // in-game minutes per day

    this.time = 0;
    this.clock = null;
    this.startBtn = document.getElementById("start")
    this.hand = document.getElementById("hand")

    var tps = Math.floor(1000 / this.intervalMS)
    var dayLength = Math.floor(this.maxTime / tps)
    console.log(`tps = ${tps} - One day in ${dayLength} seconds`)

    this.start = () => {
        this.time = 0
        this.clock = setInterval(() => {
            if (this.time < this.maxTime) {
                this.time += 1
            } else {
                // Time is either equal to or greater than the maxTime,
                // we need to reset it. Since maxTime represents a full cycle,
                // the next value should be the first increment
                this.time = 1
            }
            this.renderClock(this.time / this.maxTime)
        }, this.intervalMS)
        this.startBtn.disabled = true
    }

    this.stop = () => {
        this.startBtn.disabled = false
        clearInterval(this.clock)
    }

    this.renderClock = (ratio) => {
        var rotation = ratio * 360 // Max rotation degrees
        rotation = Math.floor(rotation)
        this.hand.style.transform = `rotate(${rotation}deg)`;
    }
}
