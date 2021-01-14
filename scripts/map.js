
function initMap() {
    const uluru = { lat: 42.4984076, lng: 78.3810496 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }