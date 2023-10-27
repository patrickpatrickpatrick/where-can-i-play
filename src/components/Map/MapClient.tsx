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
import { useQueryState, parseAsInteger } from 'next-usequerystate'

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

const ArcadeMarker = (props: { location: Location }) => {
  const { location: { lat, lng, osm_id } } = props;
  const router = useRouter();
  const arcadeMarkerRef = useRef(null);
  const map = useMap();
  const [arcadeId, setArcadeId] = useQueryState('arcadeId', parseAsInteger)
  const isSelectedLocation = osm_id == arcadeId;

  // this will only execute on page load
  // since refs wont change once the map
  // has loaded...
  useEffect(() => {
    if (arcadeMarkerRef.current) {
      const arcadeMarker: L.Marker = arcadeMarkerRef.current;
      if (arcadeMarker && isSelectedLocation) {
        setTimeout(() => {
          arcadeMarker.openPopup()
          map.setView(arcadeMarker.getLatLng(), 18)
        }, 100)
      }
    }
  }, [arcadeMarkerRef])

  useEffect(() => {
    if (arcadeMarkerRef.current) {
      const arcadeMarker: L.Marker = arcadeMarkerRef.current;

      if (arcadeMarker && isSelectedLocation) {
        setTimeout(() => {
          map.flyTo(arcadeMarker.getLatLng(), 18)
          arcadeMarker.openPopup()
        }, 50)
      }

      if (arcadeMarker && !isSelectedLocation) {
        setTimeout(() => {
          arcadeMarker.closePopup()
        }, 50)
      }
    }
  }, [arcadeId])

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

const ArcadesGroup = (props: { listOfPoints?: Location[] }) => {
  const { listOfPoints } = props;
  const map = useMap();
  const [arcadeId, setArcadeId] = useQueryState('arcadeId', parseAsInteger)

  map.zoomControl.setPosition('topright');

  if (listOfPoints && !arcadeId) {
    const pointsBounds = L.latLngBounds(listOfPoints.map(x => L.latLng(x)))
    map.fitBounds(pointsBounds)
  }

  return listOfPoints ? <FeatureGroup>
    {
      listOfPoints.map((location) => <ArcadeMarker key={`${location.lat}${location.lng}`} location={location} />)
    }
  </FeatureGroup> : null
}

const Map = ({ listOfPoints }: props) => {
  return (<MapContainer
    center={[64.536634, 16.779852]}
    zoom={100}
    style={{ height: '100vh', width: '100%' }}
  >
   <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <ArcadesGroup listOfPoints={listOfPoints} />
  </MapContainer>)
}

export default Map;
