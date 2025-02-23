// Inicjalizacja mapy
var map = L.map('map').setView([51.62, 24.30], 6);

// Dodanie warstwy OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var tracker1Marker = null; // Zmienna dla Trackera 1

// Funkcja do pobierania danych GPS z pliku data.json
async function updateTracker1() {
    try {
        console.log("🔄 Pobieranie danych...");

        const response = await fetch("https://raw.githubusercontent.com/Barix1122/TrackerGPS/main/data.json", { cache: "no-store" });

        if (!response.ok) {
            throw new Error(`Błąd HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Odebrane dane GPS:", data);

        // Sprawdzenie, czy dane są poprawne
        if (data.latitude && data.longitude) {  // <- Poprawione nazwy kluczy
            let lat = data.latitude;
            let lon = data.longitude;

            if (tracker1Marker) {
                tracker1Marker.setLatLng([lat, lon]);
                console.log("📌 Tracker 1 zaktualizowany:", lat, lon);
            } else {
                tracker1Marker = L.marker([lat, lon]).addTo(map)
                    .bindPopup(`<b>Tracker 1</b><br>Latitude: ${lat}<br>Longitude: ${lon}`)
                    .openPopup();
                console.log("🆕 Dodano nowy tracker:", lat, lon);
            }
            map.setView([lat, lon], 15); // Przybliżenie na trackera
        } else {
            console.warn("⚠️ Nieprawidłowe dane GPS:", data);
        }
    } catch (error) {
        console.error("❌ Błąd pobierania danych GPS:", error);
    }
}

// Pobieranie danych co 10 sekund
setInterval(updateTracker1, 10000);
updateTracker1(); // Pierwsze pobranie od razu po załadowaniu
