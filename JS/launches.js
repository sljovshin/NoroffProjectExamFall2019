const url = 'https://api.spacexdata.com/v3/launches/';

fetch(url)
.then(function(resp) {
    return resp.json();    
})
.then(function(data) {
    return launches(data);
})

let upcomingLaunch = [];
let completedLaunch = [];
let nextLaunch = [];

function launches(data){
   
    for (let i = 0; i < data.length; i++) {
        if(data[i].upcoming === true) {
            upcomingLaunch.push(data[i]);
        }
        else {
            completedLaunch.push(data[i]);
        }
    }

    nextLaunch = upcomingLaunch[0];
    upcomingLaunch.splice(0,1);


    populateNextLaunch(nextLaunch);
    nextLaunchCountdown(nextLaunch.launch_date_unix);
    populateUpcomingLaunch(upcomingLaunch);
    populateCompletedLaunch(completedLaunch);
    
}

function convertDate(launchDate) {
    let date = new Date(launchDate*1000);  
    return date.toLocaleDateString();
}

function populateNextLaunch(data) {
    let nextLauncContent =  `<div id="panelheader">` +
                            `<p><strong>${data.mission_name}</strong> - ${convertDate(data.launch_date_unix)}</p>` +
                            `</div>` +
                            `<div class="launchdata">` +
                            `<p><strong>Rocket:</strong> ${data.rocket.rocket_name} </p>` +
                            `<p><strong>Launch site:</strong> ${data.launch_site.site_name}</p>` +
                            `<p><strong>Details:</strong></p>` +
                            `<p>${data.details}</p>` +
                            `</div>` +
                            `<div id="countdown">` +
                            `<table>` +
                            `<tr>` +
                            `<td>weeks</td>` +
                            `<td>days</td>` +
                            `<td>hours</td>` +
                            `<td>mins</td>` +
                            `<td>secs</td>` +
                            `</tr>` +
                            `<tr class="nums">` +
                            `<th id="weeks"></th>` +
                            `<th id="days"></th>` +
                            `<th id="hours"></th>` +
                            `<th id="minutes"></th>` +
                            `<th id="seconds"></th>` +
                            `</tr>` +
                            `</table>`+
                            `</div>`;


    document.getElementById("next_launch_panel").innerHTML = nextLauncContent;
}

function populateUpcomingLaunch(data) {
    
    let upcomingLaunchContent= "";
    for (let i = 0; i < data.length; i++) {
        upcomingLaunchContent +=    `<div class="panelItems">`+
                                    `<input type="checkbox" id="ul_toggle${i}" class="toggle" />`+
                                    `<label class="title" for="ul_toggle${i}"><strong>${data[i].mission_name.substring(0, 25)}</strong> - ${convertDate(data[i].launch_date_unix)}</label>`+
                                    `<div class="panelContent">`+
                                    `<div class="launchdata">`+
                                    `<p><strong>Rocket:</strong> ${data[i].rocket.rocket_name} </p>`+
                                    `<p><strong>Launch site:</strong> ${data[i].launch_site.site_name}</p>`+
                                    `<p><strong>Details:</strong></p>`;
        if(!data[i].details) {
            upcomingLaunchContent += `<p> There are no details available for this mission yet!</p>`;
        }
        else {
            upcomingLaunchContent += `<p>${data[i].details}</p>`;
        }
        upcomingLaunchContent += `</div>`+
                                `</div>`+
                                `</div>`;
    }
    document.getElementById("upcomming_launch_panel").innerHTML = upcomingLaunchContent;
}

function populateCompletedLaunch(data) {

    let completedLaunchContent= "";
    for (let i = 0; i < data.length; i++) {
        completedLaunchContent +=   `<div class="panelItems">`+
                                    `<input type="checkbox" id="ul_toggle100${i}" class="toggle" />`+
                                    `<label class="title" for="ul_toggle100${i}"><strong>${data[i].mission_name.substring(0, 20)}</strong> - ${convertDate(data[i].launch_date_unix)}</label>`+
                                    `<div class="panelContent">`+
                                    `<div class="launchdata">`+
                                    `<p><strong>Rocket:</strong> ${data[i].rocket.rocket_name} </p>`+
                                    `<p><strong>Launch site:</strong> ${data[i].launch_site.site_name}</p>` +
                                    `<p><strong>Video:</strong></p>`;
        if (!data[i].links.video_link) {
            completedLaunchContent += `<p>There was no video stream for this launch</p>`;
        }
        else {
            completedLaunchContent += `<iframe width="100%" height="400px" src="https://www.youtube.com/embed/${data[i].links.youtube_id}"></iframe>`
        }
                                    

        completedLaunchContent +=   `<p><strong>Details:</strong></p>`;
        if(!data[i].details) {
            completedLaunchContent += `<p> There are no details for this mission!</p>`;
        }
        else {
            completedLaunchContent += `<p>${data[i].details}</p>`;
        }
        completedLaunchContent += `</div>`+
                                `</div>`+
                                `</div>`;
    }
    document.getElementById('completed_launch_panel').innerHTML = completedLaunchContent;
}


function nextLaunchCountdown(data) {
setInterval(function() {
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




/**
  
    milliseconds = data - now;
    weeks = Math.floor(milliseconds / 604800);
    decimal = (milliseconds / 604800)-Math.floor(weeks);
    
    days = decimal*7;
    decimal = getDecimal(days);
    days = Math.round(days);
    
    hours = decimal*24;
    decimal = getDecimal(hours);
    hours = Math.round(hours)
    
    minutes = decimal*60;
    decimal = getDecimal(minutes);
    minutes = Math.round(minutes);

    seconds = Math.round(decimal*60);

 */