export interface Name {
  title: string
  first: string
  last: string
}

export interface Street {
  number: number
  name: string
}

export interface Coordinates {
  latitude: string
  longitude: string
}

export interface Timezone {
  offset: string
  description: string
}

export interface Location {
  street: Street
  city: string
  state: string
  country: string
  postcode: any
  coordinates: Coordinates
  timezone: Timezone
}

export interface Dob {
  date: string
  age: number
}

export interface Registered {
  date: string
  age: number
}

export interface Id {
  name: string | ''
  value: string | null
}

export interface Picture {
  large: string
  medium: string
  thumbnail: string
}

export interface Patient {
  gender: string
  name: Name
  location: Location
  email: string
  dob: Dob
  registered: Registered
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
  fullName: string
}

export interface Info {
  seed: string
  results: number
  page: number
  version: string
}

export interface ApiResponse {
  results: Patient[]
  info: Info
}

export type FilterTag = 'all' | 'female' | 'male'
