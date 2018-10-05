var interval;
function start() {

    var sink = new Appliance({name: 'sink'})
    var actions = sink.getActions()
    sink.doAction(actions[0])

    return

    // const maxTime = 3600
    // const actualMax = 360
    // const increment = 10;
    // var time = 0
    //
    // interval = setInterval(function() {
    //     time = time < maxTime ? time+increment : increment
    //
    //     actualTime = (time / maxTime) * actualMax
    //     actualTime = Math.floor(actualTime)
    //     document.getElementById("hand").style.transform = `rotate(${actualTime}deg)`;
    //     console.log(time, `rotate(${actualTime}deg)`)
    // }, 1000)
    // document.getElementById("start").disabled = true
}

function stop() {
    document.getElementById("start").disabled = false
    clearInterval(interval)
}
