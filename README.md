# Pokedex CLI

A command-line Pokedex application built with TypeScript and Node.js that allows you to explore the Pokemon world, catch Pokemon, and manage your collection using data from the PokeAPI.

## Features

- **Interactive REPL Interface**: Command-line interface for seamless Pokemon exploration
- **Location Exploration**: Navigate through Pokemon world locations and discover Pokemon
- **Pokemon Catching**: Catch Pokemon with realistic success rates based on their stats
- **Collection Management**: Track and inspect your caught Pokemon
- **Performance Caching**: Smart caching system for improved response times
- **Full TypeScript Support**: Type-safe development with comprehensive error handling

## Installation

### Prerequisites

- Node.js v22.15.0 (recommended to use with nvm)

### Setup

1. Clone the repository:
```bash
git clone https://github.com/<Your-Username>/pokedex.git
cd pokedex-cli
```

2. Install Node.js version (if using nvm):
```bash
nvm use
```

3. Install dependencies:
```bash
npm install
```

4. Build the project:
```bash
npm run build
```

## Usage

Start the Pokedex REPL:
```bash
npm run dev
```

This will launch an interactive command-line interface where you can enter various commands to explore the Pokemon world.

## Commands

### Core Commands
- `help` - Display available commands and usage information
- `exit` - Exit the Pokedex application

### Exploration Commands
- `map` - Display the next 20 location areas in the Pokemon world
- `mapb` - Display the previous 20 location areas (map back)
- `explore <location-name>` - Explore a specific location and see Pokemon found there

### Pokemon Management Commands
- `catch <pokemon-name>` - Attempt to catch a specific Pokemon
- `inspect <pokemon-name>` - View details of a caught Pokemon (name, height, weight, stats, types)
- `pokedex` - List all Pokemon in your collection

### Example Session
```
Pokedex > map
canalave-city-area
eterna-city-area
pastoria-city-area
...

Pokedex > explore pastoria-city-area
Exploring pastoria-city-area...
Found Pokemon:
 - tentacool
 - tentacruel
 - magikarp
...

Pokedex > catch pikachu
Throwing a Pokeball at pikachu...
pikachu was caught!
You may now inspect it with the inspect command.

Pokedex > inspect pikachu
Name: pikachu
Height: 4
Weight: 60
Stats:
  -hp: 35
  -attack: 55
  -defense: 40
  -special-attack: 50
  -special-defense: 50
  -speed: 90
Types:
  - electric
```

## Technical Details

### Architecture
- **TypeScript**: Fully typed codebase for better development experience
- **Modular Design**: Separated concerns with dedicated modules for commands, API, caching, and state
- **State Management**: Centralized state handling for user data and application state
- **Error Handling**: Comprehensive error handling for network requests and user input

### Performance Features
- **Intelligent Caching**: Responses from PokeAPI are cached to reduce network requests
- **Automatic Cache Cleanup**: Background process removes expired cache entries
- **Pagination Support**: Efficient handling of large datasets with forward/backward navigation

### Pokemon Catching System
Pokemon catch rates are determined by their base experience values, making rare and powerful Pokemon more challenging to catch, similar to the actual Pokemon games.

## Development

### Scripts
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run the compiled application
- `npm run dev` - Build and run in one command
- `npm run test` - Run the test suite

### Testing
The project includes comprehensive unit tests using Vitest:
```bash
npm run test
```

## Configuration

The project uses:
- **TypeScript Configuration**: Configured for ES modules with strict type checking
- **Node Version**: Locked to v22.15.0 via `.nvmrc`
- **ES Modules**: Modern JavaScript module system
- **Vitest**: Fast unit testing framework

## Dependencies

### Production
- Node.js built-in modules (readline, fs, etc.)

### Development
- `typescript` - TypeScript compiler
- `@types/node` - Node.js type definitions
- `vitest` - Testing framework

## API Integration

This application integrates with the [PokeAPI](https://pokeapi.co/) to fetch:
- Location area data for exploration
- Pokemon encounter data for specific locations  
- Detailed Pokemon information including stats, types, and physical characteristics

All API responses are cached locally to improve performance and reduce API load.