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

    console.log(nextLaunch);

    populateNextLaunch(nextLaunch);
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
                            `<p><strong>Details:</strong></p>`+
                            `<p>${data.details}</p>`+
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
                            `<th>14</th>` +
                            `<th>6</th>` +
                            `<th>9</th>` +
                            `<th>54</th>` +
                            `<th>7</th>` +
                            `</tr>` +
                            `</table>` +
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
                                    `<p><strong>Launch site:</strong> ${data[i].launch_site.site_name}</p>`+
                                    `<p><strong>Details:</strong></p>`;
        if(!data[i].details) {
            completedLaunchContent += `<p> There are no details available for this mission yet!</p>`;
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
