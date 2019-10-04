function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
      center: new google.maps.LatLng( 32.978172, -99.540110 ),
      zoom: 5
    });

    for (let i = 0; i < launchFasilities.length; i++) {
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(launchFasilities[i].lat, launchFasilities[i].lng),
            map: map,
            title: `${launchFasilities[i].name}`
          }); 
    }
}

const launchFasilities = [
	{
		name    :   "Cape Canaveral Airforce Station",
        lat     :   28.492284,
        lng     :   -80.580199
	},
	{
		name    :   "Kennedy Space Center",
        lat     :   28.575284,
        lng     :   -80.640525
	},
	{
		name    :   "Vandenberg Air Force Base",
        lat     :   34.765671,
        lng     :   -120.516927
	},
	{
		name    :   "SpaceX Rocket Test Facility",
        lat     :   31.399173,
        lng     :   -97.462925
	},
	{
        name    :   "SpaceX high-altitude test facility",
        lat     :   32.945963,
        lng     :   -106.912059
	}
]
 
