function initMap() { 
	//Map options - location of "Leicester" and zoom level
	var options = {
		zoom: 13,
		center: {lat:52.6369, lng:-1.1398}
	}
	//New map
	var map = new google.maps.Map(document.getElementById('map'), options)

	//Adding marker (DMU)
	var marker = new google.maps.Marker( {
		position: {lat:52.6298, lng:-1.1394},
		map: map
	});

	//small pop up comes up displaying "DMU" when clicked on marker
	var infoWindow = new google.maps.InfoWindow({
		content: '<h1>DMU</h1>'
	})
	//looks for a click on the marker placed on the map
	marker.addListener('click', function(){
		infoWindow.open(map, marker);
	})
}