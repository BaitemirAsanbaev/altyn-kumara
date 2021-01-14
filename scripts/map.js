
function initMap() {
    const uluru = { lat: 42.498421, lng: 78.383225 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: uluru,
    });
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }