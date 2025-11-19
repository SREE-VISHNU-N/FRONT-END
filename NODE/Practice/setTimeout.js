const { clearInterval } = require("timers");

setTimeout(()=>{
    console.log('This is Timeout function');
    clearInterval(interval);


},3000)

const interval = setInterval(()=>{
    console.log('This is Interval function');
},1000)