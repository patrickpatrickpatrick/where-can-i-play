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
  console.log('ayyy')
  // let game = await getGameFromIgdb(id);
  // return game;

  console.log(`http://localhost:3000/game/${id}`)

  try {
    const res = await fetch(`http://localhost:3000/game/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });

       if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch dataaaa')
  }
 
  const json = await res.json();


  console.log(json)

  return res.json()
  } catch(e) {
    console.log(e)
  }





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
    console.log(game)
    locationList = await fetchLocations(gameId);
  }

  if (locationList) {
    selectedLocation = (arcadeId ? locationList.find(x => x.id == arcadeId) : locationList[0].id) as Location;
  }

  return (
    <div className={styles.locationPickerContainer}>
      {
        !!locationList.length && <LocationList
          selectedLocation={selectedLocation.id}
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