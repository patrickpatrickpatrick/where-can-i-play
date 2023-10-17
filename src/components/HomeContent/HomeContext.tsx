'use client';

import AttractMode from './../AttractMode/AttractMode';
import LocationPicker from './../LocationPicker/LocationPicker';
import styles from './HomeContent.module.css';
import { useContext } from 'react';
import { SelectedGameContext } from './../../lib/contexts';

export default () => {
  const { selectedGame } = useContext(SelectedGameContext);

  return (<main className={styles.contentContainer}>
    {
      !selectedGame && <AttractMode />
    }
    <LocationPicker />
  </main>);
} 
