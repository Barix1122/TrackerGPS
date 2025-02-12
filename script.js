// Inicjalizacja mapy i ustawienie domyślnej lokalizacji
var map = L.map('map').setView([51.62, 24.30], 6); // Ustawienie widoku mapy

// Dodanie warstwy mapy OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Funkcja do dodawania trackerów
function addTracker(lat, lon, name) {
    // Dodanie markera na mapie
    L.marker([lat, lon]).addTo(map)
        .bindPopup(`<b>${name}</b><br>Latitude: ${lat}<br>Longitude: ${lon}`)
        .openPopup();
}

// Przykładowe dane GPS dla 4 trackerów
var trackers = [
    { lat: 51.63, lon: 24.31, name: 'Tracker 1' },
    { lat: 31.64, lon: 24.32, name: 'Tracker 2' },
    { lat: 51.65, lon: 24.33, name: 'Tracker 3' },
    { lat: 31.66, lon: 24.34, name: 'Tracker 4' }
];

// Dodanie trackerów na mapie
trackers.forEach(function(tracker) {
    addTracker(tracker.lat, tracker.lon, tracker.name);
});

