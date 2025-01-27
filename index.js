const endDate = new Date("27 Jan, 2025 22:52:00 ").getTime();
const startDate = new Date().getTime();

let x = setInterval( function updateTimer(){
    const now = new Date().getTime();

    const distanceCovered = now-startDate;
    const distancePending = endDate-now;

    const oneDayInMillis = 24*60*60*1000;
    const oneHourInMillis = 60*60*1000;
    const oneMinuteInMillis = 60*1000;
    const oneSecInMillis = 1000;

    const days = Math.floor(distancePending/oneDayInMillis);
    const hours = Math.floor((distancePending%oneDayInMillis) /oneHourInMillis);
    const minutes = Math.floor( ( distancePending % oneHourInMillis) / oneMinuteInMillis);
    const secs = Math.floor( (distancePending % oneMinuteInMillis) / oneSecInMillis );

    document.getElementById("days").innerHTML = days ;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("seconds").innerHTML = secs;


    const totalDistance = endDate - startDate;
    const percentageProgress = (distanceCovered / totalDistance) * 100;

    document.getElementById("progressBar").style.width = percentageProgress + '%';

    if(distancePending <= 0){

        clearInterval(x);
        document.getElementById("countDown").innerHTML =  "⏳⏲Time's Up⏲⏳!";
        document.getElementById("progressBar").style.width = "100%";
        

        //endDate += 365;
        //
        
        
    }

},1000);