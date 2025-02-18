// Inicjalizacja mapy i ustawienie domyślnej lokalizacji
var map = L.map('map').setView([51.62, 24.30], 6);

// Dodanie warstwy OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

var tracker1Marker = null; // Zmienna dla Trackera 1

// Funkcja do pobierania danych GPS z pliku data.json
async function updateTracker1() {
    try {
        const response = await fetch("const url = "https:raw.githubusercontent.com/Barix1122/TrackerGPS/main/data.json");
        const data = await response.json();
        
        if (tracker1Marker) {
            tracker1Marker.setLatLng([data.lat, data.lon]); // Aktualizacja pozycji
        } else {
            tracker1Marker = L.marker([data.lat, data.lon]).addTo(map)
                .bindPopup(`<b>Tracker 1</b><br>Latitude: ${data.lat}<br>Longitude: ${data.lon}`)
                .openPopup();
        }
        console.log("Tracker 1 zaktualizowany:", data.lat, data.lon);
    } catch (error) {
        console.error("Błąd pobierania danych GPS:", error);
    }
}

// Pobieranie danych co 10 sekund
setInterval(updateTracker1, 10000);

// Ręczne pobranie danych po załadowaniu strony
updateTracker1();
