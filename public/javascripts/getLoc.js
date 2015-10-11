function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
function showPosition(position) {
  $('#lat').val(position.coords.latitude);
  $('#long').val(position.coords.longitude);
}

getLocation();