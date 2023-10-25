"use client"

import styles from './LocationItem.module.scss';
import { LocationAddress } from './../../lib/types';
import Link from 'next/link';

interface props {
  osm_id: number,
  name: string,
  isSelectedLocation: boolean,
  address: LocationAddress
}

interface activeLocationItemProps {
  name: string,
  address: LocationAddress
}

const Address = ({
  city,
  house_number,
  postcode,
  road,
}: LocationAddress) => {
  return <address
    className={styles.locationItemAddress}
  >
    <p>{house_number} {road}</p>
    <p>{road}</p>
    <p>{city}</p>
    <p>{postcode}</p>
  </address>
}

const ActionContainer = ({ url }: { url: string }) => <div
    className={styles.actionContainer}
  >
    <a className={styles.actionContainerAction}>
      Share
    </a>
    <a className={styles.actionContainerAction}>
      Copy
    </a>
</div>

const LocationItem = ({
  osm_id,
  isSelectedLocation,
  name,
  address,
}: props) => <li
  key={osm_id}
  className={isSelectedLocation ? styles.locationItemSelected : styles.locationItem}
>
  <h3
    className={styles.locationItemName}
  >
    {
      isSelectedLocation ? name : <Link href={`?arcadeId=${osm_id}`}>{name}</Link>
    }
  </h3>  
  {
    isSelectedLocation && <>
      <Address {...address} />
      <ActionContainer url={`?arcadeId=${osm_id}`}/>
    </>
  }
</li>

export default LocationItem;