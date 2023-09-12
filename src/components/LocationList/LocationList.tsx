import { Dispatch, SetStateAction } from 'react';
import LocationItem from './LocationItem';
import styles from './LocationList.module.css';
import { Location } from '../../lib/types';

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
            (locationList || []).map((props) => 
              (<LocationItem {...props} locationSetter={locationSetter} isSelectedLocation={selectedLocation == props.id} />)
            )
          }
      </ul>
    </div>
  )
}

export default LocationList;