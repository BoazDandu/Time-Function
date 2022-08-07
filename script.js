$(document).ready(function() {
    function currentTime() {
        // initialization and declaration of time
        var date = new Date(), 
        hours = date.getHours(), 
        minutes = date.getMinutes(), 
        seconds = date.getSeconds(),
        suffix = "",
        minuteHand = "", 
        hourHand = "",
        secondHand = ""

        if(seconds < 10) seconds = "0" + seconds;
        if(minutes < 10) minutes =  "0" + minutes;
        hours = hours % 12 || 12;
        if(hours < 10) hours = "0" + hours;
        hourHand = hours * 30 + minutes * (360/720);
        minuteHand = minutes * 6 + seconds * (360/3600);
        secondHand = seconds * 6;

        // inserting time
        $('.hours').text(hours)
        $('.minutes').text(minutes)
        $('.seconds').text(seconds)
        $('.suffix').text(suffix)

        $('.hourHand').css('transform', `rotate(${hourHand}deg)`)
        $('.minuteHand').css('transform', `rotate(${minuteHand}deg)`)
        $('.secondHand').css('transform', `rotate(${secondHand}deg)`)
    }

    setInterval(currentTime, 1000);

})