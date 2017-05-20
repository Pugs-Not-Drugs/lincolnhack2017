import { GridPosition } from "../models/GridPosition";
import { createStore, Store } from "redux";
import { GameStateReducer } from "../reducers";

export namespace Stores {

  export type GameState = { 
      game: any
      lastSquareActioned: GridPosition
    }
      
  export type All = {
    game: GameState
  }
}

export const gameStateStore: Store<Stores.GameState> = createStore(GameStateReducer)