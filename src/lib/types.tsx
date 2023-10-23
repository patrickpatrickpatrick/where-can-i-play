export interface Location {
  id: string,
  name: string,
  lat: number,
  lng: number,
  place_id: number,
  games: any,
  osm_id: number,
  address: Address,
}

export interface Address {
  "ISO3166-2-lvl4": string,
  "ISO3166-2-lvl6": string,
  city: string,
  country: string
  country_code: string,
  house_number: string,
  leisure: string,
  neighbourhood: string,
  postcode: string,
  road: string,
  state: string,
  suburb: string
}

export interface Game {
  name: string,
  id: number,
  first_release_date: number,
  cover: {
    url: string
  }
}
