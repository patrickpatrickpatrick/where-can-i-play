'use client';

import React, { useState, useContext } from 'react';
import Map from './../Map/Map';
import LocationList from './../LocationList/LocationList';
import styles from './LocationPicker.module.css';

interface Location {
  id: string,
  name: string,
  lat: number,
  lng: number,
  node: string,
  address: string,
}

interface props {
  locationList?: Location[],
}

const LocationPicker = (props: props) => {
    const { locationList } = props;
    const [selectedLocation, setSelectedLocation] = useState("");

    if (!selectedLocation.length && locationList) {
      setSelectedLocation(locationList[0].id)
    }

    const currentLocation = locationList && locationList.find(x => x.id == selectedLocation);

    return (
      <div className={styles.locationPickerContainer}>
        {
          locationList && <div className={styles.locationListContainer}>
            <LocationList locationSetter={setSelectedLocation} selectedLocation={selectedLocation} locationList={locationList} />
          </div>  
        }
        <div className={styles.mapContainer}>
          <Map lat={currentLocation?.lat} lng={currentLocation?.lng} />
        </div>
      </div>        
    )
}

export default LocationPicker;