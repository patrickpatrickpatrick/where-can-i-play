export interface Location {
  id: string,
  name: string,
  lat: number,
  lng: number,
  games: number[],
  osm_id: number,
}

export interface LocationAddress {
  city: string,
  region: string,
  country: string,
  house_number: string,
  postcode: string,
  road: string,
}

export type LocationWithAddress = Location & LocationAddress

export interface Game {
  name: string,
  id: number,
  first_release_date: number,
  cover: {
    url: string
  }
}
