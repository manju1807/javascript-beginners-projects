// examples for settimer function in javascript

// settimer function

function showTime() {
    
        var date = new Date();
        var time = date.toLocaleTimeString();
        console.log(time);
    }

setTimeout(showTime, 1000);

// setinterval function

function showTime() {
        
            var date = new Date();
            var time = date.toLocaleTimeString();
            console.log(time);
        }

setInterval(showTime, 1000);