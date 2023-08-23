import { Dispatch, SetStateAction } from 'react';
import styles from './LocationList.module.css';
import SearchBox from '../SearchBox/SearchBox';

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
  selectedLocation?: string,
  locationSetter: Dispatch<SetStateAction<string>>
}

const LocationList = (props: props) => {

  const { locationList, locationSetter, selectedLocation } = props;

  return (
    <div>
      <ul>
          {
            (locationList || []).map(({ name, address, id }) => (<li
              key={id}
              onClick={() => locationSetter(id)}
              className={selectedLocation == id ? styles.locationSelected : styles.location }
            >
              <h2>{name} - {selectedLocation == id ? "SELECTED" : "NOT SELECTED"}</h2>
              <address>{address}</address>
            </li>))
          }
      </ul>
    </div>
  )
}

export default LocationList;