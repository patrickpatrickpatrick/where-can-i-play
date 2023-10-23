"use client"

import styles from './LocationItem.module.scss';
import { Address } from './../../lib/types';
import Link from 'next/link'

interface props {
  osm_id: number,
  name: string,
  isSelectedLocation: boolean,
  address: Address
}

const createAddress = ({ 
  city,
  // country,
  house_number,
  // neighbourhood,
  postcode,
  road,
  // state,
  // suburb
}: Address) => <address
    className={styles.locationItemAddress}
  >
    <p>{house_number} {road}</p>
    <p>{road}</p>
    <p>{city}</p>
    <p>{postcode}</p>
</address>

const LocationItem = ({
    osm_id,
    isSelectedLocation,
    name,
    address,
}: props) => <li
  key={osm_id}
  className={isSelectedLocation ? styles.locationItemSelected : styles.locationItem}
>
  <Link href={`?arcadeId=${osm_id}`}>
    <h3
      className={styles.locationItemName}
    >
      {name}
    </h3>
  </Link>
  {
    isSelectedLocation && <address>{createAddress(address)}</address>
  }
</li>

export default LocationItem;