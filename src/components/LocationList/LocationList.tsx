'use client';

import { Dispatch, SetStateAction, useContext, useEffect } from 'react';
import LocationItem from './LocationItem';
import SearchBox from '../SearchBox/SearchBox';
import styles from './LocationList.module.scss';
import { Location } from '../../lib/types';
import { SelectedGameContext } from './../../lib/contexts';

interface props {
  locationList?: Location[],
  selectedLocation?: string,
  locationSetter: Dispatch<SetStateAction<string>>
}

const LocationList = (props: props) => {
  const { locationList, locationSetter, selectedLocation } = props;
  const { selectedGame } = useContext(SelectedGameContext);
  const { name, first_release_date, cover_url } = JSON.parse(selectedGame);
  const release_year = (new Date(first_release_date * 1000)).getFullYear();

  return (
    <div className={styles.locationList}>
      <SearchBox />
      <h2>Results for: { name } { release_year }</h2>
      <img src={cover_url} />
      <ul>
          {
            (locationList || []).map((props) => 
              (<LocationItem
                key={props.id}
                {...props}
                locationSetter={locationSetter}
                isSelectedLocation={selectedLocation == props.id}
              />)
            )
          }
      </ul>
    </div>
  )
}

export default LocationList;