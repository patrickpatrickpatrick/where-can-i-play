"use client"; // This is a client component

// seems way easier to use this without React lol
// oh well...

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, useMap, FeatureGroup, Popup } from 'react-leaflet'
import { latLng, latLngBounds } from 'leaflet';
import { LocationWithAddress } from './../../lib/types';
import { useQueryState, parseAsInteger } from 'next-usequerystate'
import ArcadeMarker from './ArcadeMarker';

interface props {
  lat: number|undefined,
  lng: number|undefined,
  listOfPoints?: LocationWithAddress[],
  selectedLocation: LocationWithAddress|undefined,
}

const ArcadesGroup = (props: { listOfPoints?: LocationWithAddress[] }) => {
  const { listOfPoints } = props;
  const map = useMap();
  const [arcadeId] = useQueryState('arcadeId', parseAsInteger)

  map.zoomControl.setPosition('topright');

  if (listOfPoints && !arcadeId) {
    const pointsBounds = latLngBounds(listOfPoints.map(x => latLng(x)))
    map.fitBounds(pointsBounds)
  }

  return listOfPoints ? <FeatureGroup>
    {
      listOfPoints.map((location) => <ArcadeMarker 
        arcadeId={arcadeId}
        key={`${location.lat}${location.lng}`}
        location={location}
      />)
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
