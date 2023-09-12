'use client';

import React, { useState, useContext } from 'react';
import Map from './../Map/Map';
import LocationList from './../LocationList/LocationList';
import styles from './LocationPicker.module.css';
import { Location } from '../../lib/types';
import { ArcadesListContext } from '../../app/page';

interface props {
  locationList?: Location[],
}

const LocationPicker = (props: props) => {
    const locationList = useContext(ArcadesListContext);
    const [selectedLocation, setSelectedLocation] = useState("");

    if (selectedLocation && locationList?.length) {
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
          <Map lat={currentLocation ? currentLocation?.lat : 51.51268} lng={currentLocation ? currentLocation?.lng : -0.13357} />
        </div>
      </div>        
    )
}

export default LocationPicker;