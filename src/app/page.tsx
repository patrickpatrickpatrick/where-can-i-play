'use client';

import styles from './page.module.css'
import 'leaflet/dist/leaflet.css'
import AttractMode from './../components/AttractMode/AttractMode';
import Navbar from './../components/Navbar/Navbar';
import LocationPicker from './../components/LocationPicker/LocationPicker';
import { useEffect, useState, createContext, useContext } from 'react';
import { getIgdbToken } from './../lib/igdbFunctions';

const exampleList = [
  {
    id: "1",
    name: "Las Vegas Arcade",
    lat: 51.51268,
    lng: -0.13357,
    node: "5480809514",
    address: "Basement, 89, 91 Wardour St, London W1F 0UB",
  },
  {
    id: "2",
    name: "Ferfect Fried Chicken",
    lat: 51.43952,
    lng: -0.05496,
    node: "289555898",
    address: "24 London Rd, London SE23 3HF",
  },
  {
    id: "3",
    name: "Larry's Hall of Amusements",
    lat:  51.46802,
    lng: -0.06643,
    node: "78765526",
    address: "187 Rye Ln, London SE15 4TW",
  }
]

const HomeContent = () => <main className={styles.contentContainer}>
  <Navbar />
  <div className={styles.attractModeContainer} >
    <AttractMode />
  </div>
  <LocationPicker locationList={exampleList} />
</main>

export const IgbdContext = createContext({});
export const SelectedGameContext = createContext({});

interface igdbDetailsType {
  accessToken: string|null,
  clientId: string,
  clientSecret: string,
}

export default function Home() {
  const [igdbDetails, setIgdbDetails] = useState<igdbDetailsType>({
    accessToken: null,
    clientId: "3tu8lo9egl3ww65udjby7y3yeo8ozb",
    clientSecret: "tewyroejliy73uiulgr6nib0u3f9fa",
  });

  const [selectedGame, setSelectedGame] = useState(null);
  
  const getAccessToken = () => {
    const { accessToken, clientId, clientSecret } = igdbDetails;
    // need to take into account when it expires also but will do that l8r
    if (!accessToken) {
      getIgdbToken(clientId, clientSecret).then(
        (access_token: string) => setIgdbDetails({ ...igdbDetails, accessToken: access_token })
      )
    }
  }

  const getListOfArcades = () => {

  }

  useEffect(() => {
    getAccessToken();
    getListOfArcades();
  }[accessToken, selectedGame])

  return (
    <SelectedGameContext.Provider value={{ selectedGame, setSelectedGame }}>
    <IgbdContext.Provider value={igdbDetails}>
        <HomeContent />
    </IgbdContext.Provider>
    </SelectedGameContext.Provider>
  )
}
