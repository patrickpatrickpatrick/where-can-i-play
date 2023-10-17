import { Dispatch, SetStateAction } from 'react';
import styles from './LocationItem.module.scss';
import { address } from './../../lib/types';

interface props {
    id: string,
    locationSetter: Dispatch<SetStateAction<string>>,
    name: string,
    isSelectedLocation: boolean,
    address: address
}

const createAddress = ({ 
    city,
    country,
    house_number,
    neighbourhood,
    postcode,
    road,
    state,
    suburb
}: address) => <address>
    <p>{house_number} {road}</p>
    <p>{road}</p>
    <p>{city}</p>
    <p>{postcode}</p>
</address>

const LocationItem = ({
    id,
    locationSetter,
    isSelectedLocation,
    name,
    address,
}: props) => <li
  key={id}
  onClick={() => locationSetter(id)}
  className={isSelectedLocation ? styles.locationSelected : styles.location }
>
  <h2>{name} - {isSelectedLocation ? "SELECTED" : "NOT SELECTED"}</h2>
  <address>{createAddress(address)}</address>
</li>

export default LocationItem;