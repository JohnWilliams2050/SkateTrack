import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const clubs = [
  { id: 1, name: 'Club A', position: { lat: 4.711, lng: -74.072 } },
  { id: 2, name: 'Club B', position: { lat: 4.65, lng: -74.1 } },
  // Agrega más clubes aquí
];

const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 4.711, // Bogotá
  lng: -74.072
};

const ClubsPage = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <div>
      <h2>Clubes en Bogotá</h2>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        {clubs.map(club => (
          <Marker key={club.id} position={club.position} title={club.name} />
        ))}
      </GoogleMap>
    </div>
  );
};

export default ClubsPage