var geocoder;
var map;
var marker;

export const initialize = function() {
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(-34.397, 150.644);
  var mapOptions = {
    zoom: 4,
    center: latlng
  };
  map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

export const codeAddress = function() {
  var address = document.getElementById('address').value;
  // removes the previous marker and sets a new one
  if (marker) {
    marker.setMap(null);
  }
  geocoder.geocode( { 'address': address }, function(results, status) {
    if (status == 'OK') {
      map.setCenter(results[0].geometry.location);
      marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        position: results[0].geometry.location,
        draggable: true
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
