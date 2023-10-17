'use client';

import { useEffect, useState } from 'react';

import styles from './page.module.css'
import AttractMode from './../components/AttractMode/AttractMode';
import Navbar from './../components/Navbar/Navbar';
import LocationPicker from './../components/LocationPicker/LocationPicker';

import { getArcades } from './../lib/firebaseFunctions';
import { SelectedGameContext, ArcadesListContext } from './../lib/contexts';

import HomeContent from './../components/HomeContent/HomeContext';

export default function Home() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [listOfArcades, setListOfArcades] = useState([]);

  const getListOfArcades = async () => {
    if (selectedGame) {
      const { id } = JSON.parse(selectedGame);
      let list = await getArcades(id);
      setListOfArcades(list);
    }
  }

  useEffect(() => {
    getListOfArcades();
  }, [selectedGame])

  return (
    <ArcadesListContext.Provider value={listOfArcades}>
    <SelectedGameContext.Provider value={{ selectedGame, setSelectedGame }}>
        <HomeContent />
    </SelectedGameContext.Provider>
    </ArcadesListContext.Provider>
  )
}