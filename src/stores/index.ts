import { GridPosition } from "../models/GridPosition";

export namespace Stores {

  export type GameState = { 
      game: any
    }
      
  export type All = {
    game: GameState
  }
}

