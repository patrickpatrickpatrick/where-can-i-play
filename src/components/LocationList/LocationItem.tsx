'use client';

import styles from './LocationItem.module.scss';
import { LocationAddress } from './../../lib/types';
import InfoCard from './../InfoCard/InfoCard';
import Link from 'next/link';
import { useQueryState, parseAsInteger } from 'next-usequerystate'

interface props {
  osm_id: number,
  name: string,
  isSelectedLocation: boolean,
  address: LocationAddress
}

const LocationItem = ({
  osm_id,
  isSelectedLocation,
  name,
  address,
}: props) => {

  const [arcadeId, setArcadeId] = useQueryState('arcadeId', parseAsInteger)

  return (<li
    key={osm_id}
  >
    <InfoCard
      isHoverable={true}
      isSelectable={arcadeId == osm_id}
    >
      <a onClick={() => setArcadeId(osm_id)}>
        <h3
          className={styles.locationItemName}
        >
          {name}
        </h3>
      </a>
    </InfoCard>
  </li>)
} 

export default LocationItem;