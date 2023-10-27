import LocationItem from './LocationItem';
import SearchBox from '../SearchBox/SearchBox';
import styles from './LocationList.module.scss';
import { Location, Game } from '../../lib/types';
import Image from 'next/image';

interface props {
  locationList: Location[],
  selectedLocation?: number,
  game: Game
}

const getYear = (date: number) => (new Date(date * 1000)).getFullYear()

const GameBanner = ({
 name, first_release_date, cover: { url } 
}: Game) => <div
    className={styles.gameBanner}
  >
  <h2 className={styles.gameBannerTitle}>
    { name } ({ getYear(first_release_date) })
  </h2>
  <div
    className={styles.gameBannerImageContainer}
  >
    <Image
      src={`https:${url.replace('t_thumb', 't_cover_big')}`}
      width={264}
      height={352}
      alt={`Cover art for ${name}}`}
    />
  </div>
</div>

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
  <div className={styles.locationListSearchBoxContainer}>
    <SearchBox selectedGame={game} />
  </div>
  <div className={styles.locationListGameBannerContainer}>
    <GameBanner {...game} />
  </div>
  <div className={styles.locationList}>
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