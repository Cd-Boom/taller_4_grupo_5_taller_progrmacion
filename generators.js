function Timedelay(ptime, callback) {

    setTimeout(function() {

        callback("Pausing for " + ptime);

    }, ptime);
}

Timedelay(500, function(message) {

    console.log(message);
    Timedelay(1000, function(message) {

        console.log(message);
        Timedelay(2000, function(message) {

            console.log(message);
        })
    })
})

function* Message() {
    console,
    log(yield(Timedelay(function() {})));
    console,
    log(yield(Timedelay(function() {})));
    console,
    log(yield(Timedelay(function() {})));
}