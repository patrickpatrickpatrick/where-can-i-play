import Map from './../Map/Map';
import LocationList from './../LocationList/LocationList';
import styles from './LocationPicker.module.css';
import { Location, Game } from '../../lib/types';
import { getArcades } from './../../lib/firebaseFunctions'
import { getGameFromIgdb } from './../../lib/igdbFunctions';

interface locationPickerProps {
  gameId?: string
  arcadeId?: string
}

const fetchGame = async (id: string) => {
  let game = await getGameFromIgdb(id);
  return game;
}

const fetchLocations = async (id: string) => {
  let listOfArcades = await getArcades(id);
  return listOfArcades;
}

const LocationPicker = async ({ gameId, arcadeId }: locationPickerProps) => {
  let locationList = [] as Location[];
  let selectedLocation = {} as Location;
  let game = {} as Game;

  if (gameId) {
    game = await fetchGame(gameId);
    locationList = await fetchLocations(gameId);
  }

  if (locationList) {
    selectedLocation = (arcadeId ? locationList.find(x => x.osm_id == parseInt(arcadeId)) : locationList[0]) as Location;
  }

  return (
    <div className={styles.locationPickerContainer}>
      {
        !!locationList.length && <LocationList
          selectedLocation={selectedLocation.osm_id}
          locationList={locationList}
          game={game}
        />
      }
      <div className={styles.mapContainer}>
        <Map
          lat={selectedLocation ? selectedLocation?.lat : 51.51268}
          lng={selectedLocation ? selectedLocation?.lng : -0.13357}
        />
      </div>
    </div>        
  )
}

export default LocationPicker;