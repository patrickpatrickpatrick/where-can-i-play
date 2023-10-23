import LocationItem from './LocationItem';
import SearchBox from '../SearchBox/SearchBox';
import styles from './LocationList.module.scss';
import { Location, Game } from '../../lib/types';
import Image from 'next/image';

interface props {
  locationList: Location[],
  selectedLocation: number,
  game: Game
}

const GameBanner = ({ name, first_release_date, cover: { url }  }: Game) => <div
    className={styles.gameBanner}
  >
  <h2 className={styles.gameBannerTitle}>
    { name } ({ (new Date(first_release_date * 1000)).getFullYear() })
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

const LocationList = (props: props) => {
  const { locationList, selectedLocation, game } = props;

  return (
    <div className={styles.locationListContainer}>
      <div className={styles.locationListSearchBoxContainer}>
        <SearchBox selectedGame={game} />
      </div>
      <div className={styles.locationListGameBannerContainer}>
        <GameBanner {...game} />
      </div>
      <div className={styles.locationList}>
        <ul>
            {
              ((selectedLocation && locationList) || []).map((props: Location) => 
                (<LocationItem
                    key={props.osm_id}
                    {...props}
                    isSelectedLocation={selectedLocation == props.osm_id}
                />)
              )
            }
        </ul>
      </div>
    </div>
  )
}

export default LocationList;