import { createElement } from 'react';
import LocationItem from './LocationItem';
import styles from './LocationList.module.scss';
import { ArcadeWithAddress, Game } from '../../lib/types';
import GameBanner from './../GameBanner/GameBanner';

interface locationListProps {
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

export const LocationList = (locationItem: JSX.ElementType) => {
  const Item = locationItem;
  
  return ({ game, locationList }: locationListProps) => <>
    <div className={styles.locationListGameBannerContainer}>
      {
        game && <GameBanner
          {...{...game }}
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
          ((locationList) || []).map((itemProps: ArcadeWithAddress) =>
            (<li
              key={itemProps.osm_id}
            >
              <Item {...itemProps} />
            </li>)
          )
        }
        {
          !locationList.length && <NoResults />
        }
      </ul>
    </div>
  </>
} 

export default LocationList(LocationItem);