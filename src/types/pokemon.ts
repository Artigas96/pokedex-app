

export interface Pokemon {
  id: number
  number: string
  name: string
  weight: PokemonDimension
  height: PokemonDimension
  classification: string
  types: PokemonType[]
  resistant: string[]
  attacks: PokemonAttack
  weaknesses: string[]
  fleeRate: number
  maxCP: number
  evolutions: Pokemon[]
  evolutionRequirements: PokemonEvolutionRequirement
  maxHP: number
  image: string
}

export interface PokemonDimension {
  minimum: string
  maximum: string
}

export interface PokemonAttack {
  fast: Attack[]
  special: Attack[]
}

export interface Attack {
  name: string
  type: string
  damage: number
}

export interface PokemonEvolutionRequirement {
  amount: number
  name: string
}

export enum PokemonType {
  Bug = "Bug",
  Dark = "Dark",
  Dragon = "Dragon",
  Electric = "Electric",
  Fairy = "Fairy",
  Fighting = "Fighting",
  Fire = "Fire",
  Flying = "Flying",
  Ghost = "Ghost",
  Grass = "Grass",
  Ground = "Ground",
  Ice = "Ice",
  Normal = "Normal",
  Poison = "Poison",
  Psychic = "Psychic",
  Rock = "Rock",
  Steel = "Steel",
  Water = "Water",
}