'use client';

import styles from './page.module.css'
import 'leaflet/dist/leaflet.css'
import AttractMode from './../components/AttractMode/AttractMode';
import Navbar from './../components/Navbar/Navbar';
import LocationPicker from './../components/LocationPicker/LocationPicker';
import { useEffect, useState, createContext, useContext } from 'react';
import { getIgdbToken } from './../lib/igdbFunctions';
import { getArcades } from './../lib/firebaseFunctions';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from './../components/StoreProvider';

const HomeContent = () => <main className={styles.contentContainer}>
  <Navbar />
  <div className={styles.attractModeContainer} >
    <AttractMode />
  </div>
  <LocationPicker />
</main>

export const IgbdContext = createContext({});
export const SelectedGameContext = createContext({});
export const ArcadesListContext = createContext([]);

interface igdbDetailsType {
  accessToken: string|null,
  clientId: string,
  clientSecret: string,
}

export default function Home() {
  const count = useSelector((state: RootState) => state.igdbCredentials);

  console.log(count);

  const [igdbDetails, setIgdbDetails] = useState<igdbDetailsType>({
    accessToken: null,
    clientId: "3tu8lo9egl3ww65udjby7y3yeo8ozb",
    clientSecret: "tewyroejliy73uiulgr6nib0u3f9fa",
  });

  const [selectedGame, setSelectedGame] = useState(null);
  const [listOfArcades, setListOfArcades] = useState([]);
  
  const getAccessToken = () => {
    const { accessToken, clientId, clientSecret } = igdbDetails;
    // need to take into account when it expires also but will do that l8r
    if (!accessToken) {
      getIgdbToken(clientId, clientSecret).then(
        (access_token: string) => setIgdbDetails({ ...igdbDetails, accessToken: access_token })
      )
    }
  }

  const getListOfArcades = async () => {
    if (selectedGame) {
      let list = await getArcades(selectedGame);
      setListOfArcades(list);
    }
  }

  useEffect(() => {
    getAccessToken();
    getListOfArcades();
  }, [igdbDetails, selectedGame])

  return (
    <ArcadesListContext.Provider value={listOfArcades}>
    <SelectedGameContext.Provider value={{ selectedGame, setSelectedGame }}>
    <IgbdContext.Provider value={igdbDetails}>
        <HomeContent />
    </IgbdContext.Provider>
    </SelectedGameContext.Provider>
    </ArcadesListContext.Provider>
  )
}