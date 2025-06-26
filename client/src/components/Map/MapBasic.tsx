import 'leaflet/dist/leaflet.css';
import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { SaveButton } from './MapBasic.style';

function ClickableMap({ onLocationSelect }: { onLocationSelect: (pos: [number, number]) => void }) {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      onLocationSelect([e.latlng.lat, e.latlng.lng]);
    }
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        Lat: {position[0].toFixed(4)}, Lng: {position[1].toFixed(4)}
      </Popup>
    </Marker>
  );
}

function MapBasic() {
  const center: [number, number] = [41.2069, 1.5434]; // El Vendrell
  const [selectedPosition, setSelectedPosition] = useState<[number, number] | null>(null);
  const [loading, setLoading] = useState(false);

  function saveLocation() {
    if (!selectedPosition) {
      alert('Por favor, selecciona una ubicación en el mapa antes de guardar.');
      return;
    }
    setLoading(true);

    fetch('http://localhost:5000/api/locations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Marcador manual', // podrías mejorar para pedir nombre dinámico
        latitude: selectedPosition[0],
        longitude: selectedPosition[1],
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error guardando la ubicación');
        return res.json();
      })
      .then(() => {
        alert('Ubicación guardada con éxito');
      })
      .catch((err) => {
        alert(`Error: ${err.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <div>
      <MapContainer center={center} zoom={13} style={{ height: '700px', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ClickableMap onLocationSelect={setSelectedPosition} />
      </MapContainer>

      <div>
        <SaveButton onClick={saveLocation} disabled={loading || !selectedPosition}>
          {loading ? 'Guardando...' : 'Guardar ubicación'}
        </SaveButton>
      </div>
    </div>
  );
}

export default MapBasic;
