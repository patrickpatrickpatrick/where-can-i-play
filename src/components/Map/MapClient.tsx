"use client"; // This is a client component

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'

interface props {
  lat: number|undefined,
  lng: number|undefined
}

const MapComponent = (props: props) => {
  const { lat, lng } = props;
  const map = useMap()
  if (lat && lng) {
    map.setView([lat, lng], map.getZoom())
  }
  return null;
}

export default function Map(props: props) {
  const { lat, lng } = props;

  return (
    <MapContainer center={[lat || 64.536634, lng || 16.779852]} zoom={100} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lat && lng && (
        <Marker position={[lat, lng]} />
      )}
      <MapComponent lat={lat} lng={lng} />
    </MapContainer>
  );
}