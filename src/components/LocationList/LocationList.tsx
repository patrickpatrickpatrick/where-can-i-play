import LocationItem from './LocationItem';
import SearchBox from '../SearchBox/SearchBox';
import styles from './LocationList.module.scss';
import { Location, Game } from '../../lib/types';
import Image from 'next/image';
import InfoCard from './../InfoCard/InfoCard';
import GameBanner from './../GameBanner/GameBanner';

interface props {
  locationList: Location[],
  selectedLocation?: number,
  game: Game
}

const NoResults = () => <li
  className={styles.locationListNoResults}
>
  <h3
    className={styles.locationListNoResultsHeader}
  >
    We don&lsquo;t know where you can play this.
  </h3>
  <p>
    If you know, please considering contributing!
  </p>
</li>

const LocationList = ({ game, locationList, selectedLocation }: props) => <>
  <div className={styles.locationListGameBannerContainer}>
    <GameBanner {...game} />
  </div>
  <div className={styles.locationList}>
    {
      locationList.length && <InfoCard><span className={styles.locationListResults}>
        {locationList.length} result{locationList.length > 1 ? 's' : ''}
      </span></InfoCard>
    }
    <ul>
      {
        ((locationList) || []).map((props: Location) =>
          (<LocationItem
            key={props.osm_id}
            {...props}
            isSelectedLocation={selectedLocation == props.osm_id}
          />)
        )
      }
      {
        !locationList.length && <NoResults />
      }
    </ul>
  </div>
</>

export default LocationList;