import { Marker, useMap, Popup } from 'react-leaflet'
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { ArcadeWithAddress } from './../../lib/types';
import { Marker as MarkerType, latLng, latLngBounds } from 'leaflet';
import LocationInfo from './../LocationInfo/LocationInfo';

const ArcadePopUp = ({ location }: { location: ArcadeWithAddress }) => <Popup>
  <LocationInfo location={location} />
</Popup>

const ArcadeMarker = (props: { location: ArcadeWithAddress, arcadeId: number | null }) => {
  const { location: { lat, lng, osm_id }, arcadeId } = props;
  const router = useRouter();
  const arcadeMarkerRef = useRef(null);
  const map = useMap();
  const isSelectedLocation = osm_id == arcadeId;

  // this will only execute on page load
  // since refs wont change once the map
  // has loaded...
  useEffect(() => {
    if (arcadeMarkerRef.current) {
      const arcadeMarker: MarkerType = arcadeMarkerRef.current;
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
      const arcadeMarker: MarkerType = arcadeMarkerRef.current;

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
    <ArcadePopUp location={props.location} />
  </Marker>)
}

export default ArcadeMarker;
