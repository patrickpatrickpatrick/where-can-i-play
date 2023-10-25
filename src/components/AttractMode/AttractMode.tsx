'use client';

import SearchBox from "../SearchBox/SearchBox";
import styles from './AttractMode.module.css';

// the header will be something else at some point...
// plan is to make a random image which looks like
// an arcade game title.

const AttractMode = () => <div className={styles.container}>
  <div className={styles.contentContainer}>
    <h1 className={styles.header}>Where Can I Play...</h1> 
    <div className={styles.searchBoxContainer}>
      <SearchBox />
    </div>
  </div>
</div>

export default AttractMode