export interface Arcade {
  id: string,
  name: string,
  lat: number,
  lng: number,
  games: number[],
  osm_id: number,
}

export interface Address {
  city: string,
  region: string,
  country: string,
  house_number: string,
  postcode: string,
  road: string,
}

export type ArcadeWithAddress = Arcade & Address

export type Game = {
  name: string,
  id: number,
  first_release_date: number,
  cover: {
    url: string
  }
}
