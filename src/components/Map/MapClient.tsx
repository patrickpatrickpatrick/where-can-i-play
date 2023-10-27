"use client"; // This is a client component

// seems way easier to use this without React lol
// oh well...

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Marker, useMap, LayerGroup, useMapEvents, FeatureGroup, Popup } from 'react-leaflet'
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
  listOfPoints?: Location[],
  selectedLocation: Location,
}

const ArcadeMarker = (props: { location: Location, isSelectedLocation: boolean }) => {
  const { location: { lat, lng, osm_id }, isSelectedLocation } = props;
  const router = useRouter();
  const arcadeMarkerRef = useRef(null);
  const map = useMap();

  useEffect(() => {
    if (arcadeMarkerRef.current && isSelectedLocation) {
      setTimeout(() => {
        map.flyTo(arcadeMarkerRef.current._latlng)
        arcadeMarkerRef.current.openPopup()
      }, 50)
    }
    if (arcadeMarkerRef.current && !isSelectedLocation) {
      setTimeout(() => {
        // arcadeMarkerRef.current.closePopup()
      }, 50)      
    }
  }, [arcadeMarkerRef, isSelectedLocation])

  return (<Marker
    ref={arcadeMarkerRef}
    key={`${lat}${lng}`}
    position={[lat, lng]}
    eventHandlers={{
      click: () => router.push(`?arcadeId=${osm_id}`)
    }}
  >
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>)
}

const ArcadesGroup = (props: { listOfPoints?: Location[], selectedLocation: Location|null }) => {
  const { listOfPoints, selectedLocation } = props;
  const map = useMap();

  map.zoomControl.setPosition('topright');

  const isSelectedLocation = (lat: number, lng: number) => selectedLocation && (lat == selectedLocation.lat && lng == selectedLocation.lng)

  if (listOfPoints && !selectedLocation) {
    const pointsBounds = L.latLngBounds(listOfPoints.map(x => L.latLng(x)))
    map.fitBounds(pointsBounds)
  }

  if (selectedLocation) {
    map.setView([selectedLocation.lat, selectedLocation.lng], 100);
  }

  return listOfPoints ? <FeatureGroup>
    {
      listOfPoints.map((location) => <ArcadeMarker key={`${location.lat}${location.lng}`} isSelectedLocation={isSelectedLocation(location.lat, location.lng)} location={location} />)
    }
  </FeatureGroup> : null
}

const Map = ({ listOfPoints, selectedLocation }: props) => <MapContainer
  center={[64.536634, 16.779852]}
  zoom={100}
  style={{ height: '100vh', width: '100%' }}
>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <ArcadesGroup selectedLocation={selectedLocation} listOfPoints={listOfPoints} />
</MapContainer>

export default Map;
