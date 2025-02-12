// Inicjalizacja mapy
var map = L.map('map').setView([52.2297, 21.0122], 12); // Przykładowa lokalizacja (Warszawa)

// Dodanie warstwy mapy OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Przykładowe dane GPS trackerów (współrzędne GPS)
var trackers = [
    { lat: 52.2297, lon: 21.0122 }, // Tracker 1
    { lat: 52.2300, lon: 21.0140 }, // Tracker 2
    { lat: 52.2305, lon: 21.0155 }, // Tracker 3
    { lat: 52.2310, lon: 21.0170 }  // Tracker 4
];

// Dodawanie znaczników na mapie
trackers.forEach(function(tracker) {
    L.marker([tracker.lat, tracker.lon]).addTo(map);
});
