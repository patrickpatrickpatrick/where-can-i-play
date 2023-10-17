import LocationItem from './LocationItem';
import SearchBox from '../SearchBox/SearchBox';
import styles from './LocationList.module.scss';
import { Location, Game } from '../../lib/types';

interface props {
  locationList: Location[],
  selectedLocation: string,
  game: Game
}

const GameBanner = ({ name, first_release_date, cover_url  }: Game) => <>
  <h2>Results for: { name } { (new Date(first_release_date * 1000)).getFullYear() }</h2>
  <img src={cover_url} />
</>

const LocationList = (props: props) => {
  const { locationList, selectedLocation, game } = props;

  return (
    <div className={styles.locationList}>
      <SearchBox />
      <GameBanner {...game} />
      <ul>
          {
            (locationList || []).map((props) => 
              (<LocationItem
                  key={props.id}
                  {...props}
                  isSelectedLocation={selectedLocation == props.id}
              />)
            )
          }
      </ul>
    </div>
  )
}

export default LocationList;