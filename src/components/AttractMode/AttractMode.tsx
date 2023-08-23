'use client';

import SearchBox from "../SearchBox/SearchBox";
import guidGenerator from './../../lib/guidGenerator';
import styles from './AttractMode.module.css';
import React, { useEffect, useState, useContext } from 'react';

interface props {
  id?: string
}

type Option = {label: string, value: string}

const options: Option[] = [];

export default function AttractMode(props: props) {
  const { id } = props;
  const searchBoxId: string = guidGenerator();

  return (
    <div className={styles.container} id={id}>
      <h1 className={styles.header}>Where Can I Play?</h1>
      <div className={styles.searchBoxContainer}>
        <SearchBox id={searchBoxId} options={options} />
      </div>
    </div>
  );
}