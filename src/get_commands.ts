import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";

import type { CLICommand, State } from "./state.js";
import { commandMap, commandMapb } from "./command_map.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "display next 20 locations",
      callback: commandMap,
    },
    mapb: {
      name: "map",
      description: "display next 20 locations",
      callback: commandMapb,
    },
  };
}
