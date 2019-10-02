const url = 'https://api.spacexdata.com/v3/launches/upcoming';

fetch(url)
.then(function(resp) {
    return resp.json();    
})
.then(function(data) {
    return launches(data);
})

function launches(nextLaunch){
    nextLaunchCountdown(nextLaunch[0].launch_date_unix);
}

function nextLaunchCountdown(data) {
    console.log(data)
    setInterval(() => {
        let distance , weeks, days, hours, minutes, seconds;
        const now = Math.floor(new Date().getTime());
    
        distance = data*1000 - now;
        weeks = Math.floor(distance / 604800000);
        days = Math.floor(distance / (1000 * 60 * 60 * 24)/7);
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (distance > 0) {
            document.getElementById('weeks').innerHTML = weeks;
            document.getElementById('days').innerHTML = days;
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = seconds;   
        } else {
            document.getElementById('countdown').innerHTML = "<h3>Launch in progress</h3>";
        }
    }, 1000
    ) 
    
    }