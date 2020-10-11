// function realTimeClock(){

//     var rtClock = new Date();

//     var year = rtClock.getFullYear() + 1;
//     var month = rtClock.getMonth() + 1;
//     var day = rtClock.getDate() + 1;

//     year = ("0" + year).slice(-2);
//     month = ("0" + month).slice(-2);
//     day = ("0" + day).slice(-2);


//     document.getElementById('clock').innerHTML = 
//         year + ':' + month + ':' + day;

//     var t = setTimeout(realTimeClock, 500);
    
//     document.appendChild('clock');
// }  

function realTimeClock(){

    var rtClock = new Date();

    var hours = rtClock.getHours() + 1;
    var minutes = rtClock.getMinutes() + 1;
    var seconds = rtClock.getSeconds() + 1;

    var amPm = ( hours < 12) ? "AM" : "PM";

    hours = (hours > 12) ? hours - 12 : hours;

    hours = ("0" + year).slice(-2);
    minutes = ("0" + month).slice(-2);
    seconds = ("0" + day).slice(-2);


    document.getElementById('clock').innerHTML = 
        hours + " : " + minutes + " : " + seconds + " " + amPm;

    var t = setTimeout(realTimeClock, 500);
}  