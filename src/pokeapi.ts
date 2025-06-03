export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
    const fullUrl = pageURL ? pageURL : `${PokeAPI.baseURL}/location-area`;

    try {
      const response = await fetch(fullUrl, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();

      return json;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        return { count: 0, next: null, previous: null, results: [] };
      } else {
        console.error(error);
        return { count: 0, next: null, previous: null, results: [] };
      }
    }
  }

  async fetchLocation(locationName: string): Promise<Locations> {
    const fullUrl = `${PokeAPI.baseURL}/location/${locationName}`;
    try {
      const response = await fetch(fullUrl, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();

      return json;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
        return {id:0,name: "", game_index: 0, encounter_method_rates: [], location: "",names:[], pokemon_encounters: [] };
      } else {
        console.error(error);
        return {id:0,name: "", game_index: 0, encounter_method_rates: [], location: "",names:[], pokemon_encounters: [] };
      }
    }
  }
}

export type ShallowLocations = {
  count: number;
  next: string | null | undefined;
  previous: string | null | undefined;
  results: Results[];
};

export interface Results {
  name: string;
  url: string;
}

export type Locations = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: EncounterMethodRate[];
  location: Location | "";
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
};

export interface EncounterMethodRate {
  encounter_method: EncounterMethod;
  version_details: VersionDetail[];
}

export interface EncounterMethod {
  name: string;
  url: string;
}

export interface VersionDetail {
  rate: number;
  version: Version;
}

export interface Version {
  name: string;
  url: string;
}

export interface Location {
  name: string | "";
  url: string | "";
}

export interface Name {
  name: string;
  language: Language;
}

export interface Language {
  name: string;
  url: string;
}

export interface PokemonEncounter {
  pokemon: Pokemon;
  version_details: VersionDetail2[];
}

export interface Pokemon {
  name: string;
  url: string;
}

export interface VersionDetail2 {
  version: Version2;
  max_chance: number;
  encounter_details: EncounterDetail[];
}

export interface Version2 {
  name: string;
  url: string;
}

export interface EncounterDetail {
  min_level: number;
  max_level: number;
  condition_values: any[];
  chance: number;
  method: Method;
}

export interface Method {
  name: string;
  url: string;
}
