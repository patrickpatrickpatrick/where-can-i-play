import LocationItem from './LocationItem';
import styles from './LocationList.module.scss';
import { ArcadeWithAddress, Game } from '../../lib/types';
import GameBanner from './../GameBanner/GameBanner';

interface props {
  locationList: ArcadeWithAddress[],
  selectedLocation?: number,
  game: Game | undefined
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
    If you know, please consider contributing!
  </p>
</li>

const LocationList = ({ game, locationList }: props) => <>
  <div className={styles.locationListGameBannerContainer}>
    {
      game && <GameBanner
        {...{...game, cover: { url: `https:${game.cover.url.replace('t_thumb', 't_cover_big')}` }}}
      />
    }
  </div>
  <div className={styles.locationList}>
    {
      locationList.length && <div>
          <span className={styles.locationListResults}>
            {locationList.length} result{locationList.length > 1 ? 's' : ''}
          </span>
        </div>
    }
    <ul>
      {
        ((locationList) || []).map((props: ArcadeWithAddress) =>
          (<li
            key={props.osm_id}
          >
            <LocationItem

              {...props}
            />
          </li>)
        )
      }
      {
        !locationList.length && <NoResults />
      }
    </ul>
  </div>
</>

export default LocationList;