/*
 * find a lawyer
 */
$(document).ready(function(){
    $(".myselect").change(function () { 
         var options = {
            "backdrop": "static"
         }
        $("#family-law").modal(options);
    });
});

/*
 * google live search
 */
var placeSearch, autocomplete_loc;
function initAutocomplete() {
    autocomplete_loc = new google.maps.places.Autocomplete(
     /** @type {!HTMLInputElement} */(document.getElementById('autocomplete_loc')),
    {types: ['geocode']});
}
function geolocate() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var geolocation = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};
			var circle = new google.maps.Circle({
				center: geolocation,
				radius: position.coords.accuracy
			});
			autocomplete_loc.setBounds(circle.getBounds());
		});
	}
}