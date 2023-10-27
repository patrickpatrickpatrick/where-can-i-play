import styles from './LocationItem.module.scss';
import { LocationAddress } from './../../lib/types';
import InfoCard from './../InfoCard/InfoCard';
import Link from 'next/link';

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
}: props) => <li
  key={osm_id}
>
  <InfoCard
    isHoverable={true}
    isSelectable={isSelectedLocation}
  >
    <Link href={`?arcadeId=${osm_id}`}>
      <h3
        className={styles.locationItemName}
      >
        {name}
      </h3>
    </Link>
  </InfoCard>
</li>

export default LocationItem;