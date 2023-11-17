export interface Location {
  id: string,
  name: string,
  lat: number,
  lng: number,
  games: number[],
  osm_id: number,
  address: LocationAddress,
}

export interface LocationAddress {
  city: string,
  region: {
    name: string,
    country: {
      name: string
    }
  },
  house_number: string,
  postcode: string,
  road: string,
}

export interface Game {
  name: string,
  id: number,
  first_release_date: number,
  cover: {
    url: string
  }
}
