import { GridPosition } from "../models/GridPosition";
import { createStore, Store } from "redux";
import { GameStateReducer, PhrasesReducer } from "../reducers";

export namespace Stores {

  export type GameState = { 
      game: any
      lastSquareActioned: GridPosition
    }

  export type Phrase = {
      Message: string,
      Weighting: number
  }

  export type Phrases = { 
      phrases: Phrase[]
    }

  export type All = {
    game: GameState
    phrases: Phrases
  }
}

export const gameStateStore: Store<Stores.GameState> = createStore(GameStateReducer);

export const phrasesStore: Store<Stores.Phrases> = createStore(PhrasesReducer);