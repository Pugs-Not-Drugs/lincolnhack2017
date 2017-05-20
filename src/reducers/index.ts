import * as Redux from "redux";
import { selectSquare, unselectSquare, SquareClickedAction, SQUARE_SELECTED, SQUARE_UNSELECTED } from '../actions'
import { Stores } from '../stores'

const initialState: Stores.GameState = {
      A1: 0,
      A2: 0,
      A3: 0,
      A4: 0,
      A5: 0,
      B1: 0,
      B2: 0,
      B3: 0,
      B4: 0,
      B5: 0,
      C1: 0,
      C2: 0,
      C3: 0,
      C4: 0,
      C5: 0,
      D1: 0,
      D2: 0,
      D3: 0,
      D4: 0,
      D5: 0,
      E1: 0,
      E2: 0,
      E3: 0,
      E4: 0,
      E5: 0,
}

export function GameStateReducer (state: Stores.GameState = initialState, action: SquareClickedAction): Stores.GameState {
  var currentState: Stores.GameState = state
  switch (action.type) {
    case SQUARE_SELECTED:
        currentState.A1 = 1;
        return currentState
    case SQUARE_UNSELECTED:
        currentState.A1 = 0;
        return currentState
  }
  return currentState
}