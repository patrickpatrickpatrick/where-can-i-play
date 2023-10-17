// 'use client';

import { useState, useContext, useEffect } from 'react';
import Map from './../Map/Map';
import LocationList from './../LocationList/LocationList';
import styles from './LocationPicker.module.css';
import { Location } from '../../lib/types';
import { ArcadesListContext } from './../../lib/contexts';

import { getArcades } from './../../lib/firebaseFunctions'

interface locationPickerProps {
  id?: string
}

const fetchLocations = async (id) => {
  let listOfArcades = await getArcades(id);
  return listOfArcades;
}

const LocationPicker = async ({ id }: locationPickerProps) => {
  // const locationList = useContext(ArcadesListContext) as Location[];

  let locationList = [] as Location[];

  console.log(id)

  if (id) {
    let locationList = await fetchLocations(id)  
  }

  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    if (locationList.length) {
      setSelectedLocation(locationList[0].id)  
    }
  }, [locationList])

  const currentLocation = locationList &&
    locationList.find(x => x.id == selectedLocation);

  return (
    <div className={styles.locationPickerContainer}>
      {
        !!locationList.length && <LocationList
          locationSetter={setSelectedLocation}
          selectedLocation={selectedLocation}
          locationList={locationList}
        />
      }
      <div className={styles.mapContainer}>
        <Map
          lat={currentLocation ? currentLocation?.lat : 51.51268}
          lng={currentLocation ? currentLocation?.lng : -0.13357}
        />
      </div>
    </div>        
  )
}

export default LocationPicker;