import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import shadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconUrl: icon,
    shadowUrl: shadow,
});

document.addEventListener("DOMContentLoaded", function () {

  if (window.location.pathname.includes('contact-us')) {

    let map;

    function initMap() {
      map = L.map('map-canvas').setView([51.471105, -0.11405], 16);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);

      loadStore();
    }

    function loadStore() {
      const store = {
        name: "Slade Gardens Adventure Playground",
        address: "Slade Gardens, Stockwell, London SW9",
        category: "Community Centre & Adventure Playground",
        coords: {
          lat: 51.471105,
          lng: -0.11405
      },
      description: "A community hub providing adventure play, youth activities, events and space hire."
    };

    placeStoreMarker(store);
    initGeolocation();
}

    function placeStoreMarker(store) {

      const redIcon = L.icon({
        iconUrl: 'https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [0, -51],
        shadowSize: [41, 41]
      });

     const popup = `
    <div class="store-popup text-center">
        <strong>${store.name}</strong><br>
        ${store.address}
    </div>
`;
      L.marker([store.coords.lat, store.coords.lng], { icon: redIcon })
        .addTo(map)
        .bindPopup(popup)
        .openPopup();
    }

    function initGeolocation() {

      if (!navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(pos => {

        const userIcon = L.divIcon({
          className: "user-location-dot",
          html: "📍"
        });

        L.marker([pos.coords.latitude, pos.coords.longitude], { icon: userIcon })
          .addTo(map)
          .bindPopup("<strong>You are here</strong>");
      });
    }

    function openDirections(lat, lng) {
      window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, '_blank');
    }

    initMap();
  }

});