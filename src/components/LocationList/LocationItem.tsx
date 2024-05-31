'use client';

import styles from './LocationItem.module.scss';
import { ArcadeWithAddress } from './../../lib/types';
import InfoCard from './../InfoCard/InfoCard';
import { useQueryState, parseAsInteger, Options } from 'next-usequerystate'

export type props = {
  arcadeId: number | null
  setArcadeId: (value: number | ((old: number | null) => number | null) | null, options?: Options | undefined) => Promise<URLSearchParams> | null
}

export const LocationItem = ({
  osm_id,
  name,
  arcadeId,
  setArcadeId,
}: ArcadeWithAddress & props) => <InfoCard
  isHoverable={true}
  isSelectable={arcadeId == osm_id}
>
  <a onClick={() => setArcadeId && setArcadeId(osm_id)}>
    <h3
      className={styles.locationItemName}
    >
      {name}
    </h3>
  </a>
</InfoCard>

export default (props: ArcadeWithAddress) => {
  const [arcadeId, setArcadeId] = useQueryState('arcadeId', parseAsInteger)

  return <LocationItem {...{...props, arcadeId, setArcadeId}} />
}
