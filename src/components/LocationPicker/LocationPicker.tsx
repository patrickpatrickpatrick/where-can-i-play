import Overlay from './../Overlay/Overlay';
import Map from './../Map/Map';
import LocationList from './../LocationList/LocationList';
import LocationInfo from './../LocationInfo/LocationInfo';
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
  let selectedLocation;
  let game = {} as Game;

  if (gameId) {
    game = await fetchGame(gameId);
    locationList = await fetchLocations(gameId);
  }

  if (locationList && arcadeId) {
    selectedLocation = locationList.find(x => x.osm_id == parseInt(arcadeId))
  }

  return (
    <>
      <Overlay direction={'left'}>
        <LocationList
          selectedLocation={selectedLocation?.osm_id}
          locationList={locationList}
          game={game}
        />
      </Overlay>
      <div className={styles.mapContainer}>
        <Map
          listOfPoints={locationList}
          lat={selectedLocation?.lat}
          lng={selectedLocation?.lng}
        />
      </div>
      <Overlay direction={'right'}>
        {
          selectedLocation && <LocationInfo location={selectedLocation} />
        }
      </Overlay>    
    </>       
  )
}

export default LocationPicker;