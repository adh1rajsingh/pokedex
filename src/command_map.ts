import type { State } from "./state";
import { PokeAPI } from "./pokeapi";

export async function commandMap(state: State) {
  let data;
  try {
    if(state.nextLocationsURL){
         data = await state.pokeapi.fetchLocations(state.nextLocationsURL);
    }else{
         data = await state.pokeapi.fetchLocations();
    }
      
      for (const cmd of Object.values(data.results)) {
        console.log(`${cmd.name}`);
      }
      state.nextLocationsURL = data.next ?? undefined
      state.prevLocationsURL = data.previous ?? undefined
  } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(error);
            }
  }
}

export async function commandMapb(state: State){
  let data;
  try {
    if(state.prevLocationsURL){
         data = await state.pokeapi.fetchLocations(state.prevLocationsURL);
    }else{
         console.log("you're on the first page")
         return;
    }
      
      for (const cmd of Object.values(data.results)) {
        console.log(`${cmd.name}`);
      }
      state.nextLocationsURL = data.next ?? undefined
      state.prevLocationsURL = data.previous ?? undefined
  } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error(error);
            }
  }
}
