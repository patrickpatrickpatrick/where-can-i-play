import { Dispatch, SetStateAction } from 'react';
import styles from './LocationList.module.css';
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
}: address) => `${house_number} ${road} ${neighbourhood} ${suburb} ${city} ${state} ${postcode} ${country}`

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