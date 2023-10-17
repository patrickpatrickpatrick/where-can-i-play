"use client"; // This is a client component

// thx 2 https://stackoverflow.com/questions/74289687/leaflet-implementation-on-next-js-13
// this workaround is wild, will it actually work... yes...
// i guess it makes sense, just weird 

import 'leaflet/dist/leaflet.css'

import React, { useState, useEffect, FunctionComponent } from 'react';

interface props {
  lat: number|undefined,
  lng: number|undefined,
}

const Map: FunctionComponent<props> = (props) => {
  const [Client, setClient] = useState<FunctionComponent<props>>();

  useEffect(() => {
    (async () => {
      if (typeof global.window !== "undefined") {
        const newClient = (await import('./MapClient')).default
        setClient(() => newClient);
      }
    })();
  }, [])

  if (typeof global.window === "undefined" || !Client) {
      return null;
  }
  
  return Client ? <Client {...props} /> : null;
}

export default Map;