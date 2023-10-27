"use client"; // This is a client component

// seems way easier to use this without React lol
// oh well...

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Marker, useMap, LayerGroup, useMapEvents, FeatureGroup } from 'react-leaflet'
import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import L from 'leaflet';
import { Location } from './../../lib/types';

interface Point {
  lat: number,
  lng: number,
}

interface props {
  lat: number|undefined,
  lng: number|undefined,
  listOfPoints?: Location[]
}

const ArcadesGroup = (props: { listOfPoints?: Location[], selectedPlace: Point|null }) => {
  const { listOfPoints, selectedPlace } = props;
  const map = useMap();
  const router = useRouter();

  map.zoomControl.setPosition('topright');

  if (listOfPoints && !selectedPlace) {
    const pointsBounds = L.latLngBounds(listOfPoints.map(x => L.latLng(x)))
    map.fitBounds(pointsBounds)
  }

  if (selectedPlace) {
    map.setView([selectedPlace.lat, selectedPlace.lng], 100);
  }

  return listOfPoints ? <FeatureGroup>
    {
      listOfPoints.map(({ lng, lat, osm_id }) => <Marker
        key={`${lat}${lng}`}
        position={[lat, lng]}
        eventHandlers={{
          click: () => router.push(`?arcadeId=${osm_id}`)
        }}
      />)
    }
  </FeatureGroup> : null
}

const Map = ({ lat, lng, listOfPoints }: props) => <MapContainer center={[lat || 64.536634, lng || 16.779852]} zoom={100} style={{ height: '100vh', width: '100%' }}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <ArcadesGroup selectedPlace={lat && lng ? { lat, lng } : null} listOfPoints={listOfPoints} />
</MapContainer>

export default Map;
