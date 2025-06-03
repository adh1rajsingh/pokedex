import { createInterface, type Interface } from "readline";
import { getCommands } from "./get_commands.js";
import { PokeAPI } from "./pokeapi.js";
import type { ShallowLocations, Locations } from "./pokeapi.js";

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};

export type State = {
  readline: Interface;
  commands: Record<string, CLICommand>;
  pokeapi: PokeAPI;
  nextLocationsURL?: string
  prevLocationsURL?: string
};

export function initState() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "pokedex > ",
  });
  const pokeapi= new PokeAPI();

  return {
    readline: rl,
    pokeapi,
    commands: getCommands(),
    nextLocationsURL: undefined,
    prevLocationsURL: undefined,
  };
}
