"use client"; // This is a client component

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface props {
  id?: string
}

const Navbar = (props: props) => {
  
  const [menuBarOpen, setMenuBarOpen] = useState(false);
  const toggleMenuBar = () => setMenuBarOpen(!menuBarOpen);

  return (<>
  <div className={styles.container}>
    <div className={styles.button_container}>
      <button className={menuBarOpen ? styles.buttonOpen : styles.button} onClick={() => toggleMenuBar()}>
        <Image
          className={menuBarOpen ? styles.buttonSvgOpen : ''}
          src="./images/hamburger.svg"
          alt=""
          width={30}
          height={30}
        />
      </button>
    </div>
  </div>
  <nav className={menuBarOpen ? styles.menuOpen : styles.menu}>
      <ul>
        <li><a href="">Sign In</a></li>
        <li><a href="">Another Link</a></li>
        <li><a href="">Even More Links</a></li>
      </ul>
    </nav>  
  </>)
};

export default Navbar;