import * as Redux from "redux";
import { selectSquare, unselectSquare, SquareClickedAction, SQUARE_SELECTED, SQUARE_UNSELECTED } from '../actions'
import { Stores } from '../stores'
import { GetSquareName } from "../SquareStateHelper"
var request = require('sync-request');

const initialGameState: Stores.GameState = {
      lastSquareActioned: null,
      game: {
        "0-0": 0,
        "0-1": 0,
        "0-2": 0,
        "0-3": 0,
        "0-4": 0,
        "1-0": 0,
        "1-1": 0,
        "1-2": 0,
        "1-3": 0,
        "1-4": 0,
        "2-0": 0,
        "2-1": 0,
        "2-2": 0,
        "2-3": 0,
        "2-4": 0,
        "3-0": 0,
        "3-1": 0,
        "3-2": 0,
        "3-3": 0,
        "3-4": 0,
        "4-0": 0,
        "4-1": 0,
        "4-2": 0,
        "4-3": 0,
        "4-4": 0,
      }
}

// console.log(request("GET", "https://mqc1zmxqw2.execute-api.eu-west-1.amazonaws.com/Hackathon/").body);

const initialPhrases: Stores.Phrases = {
  phrases: eval(request("GET", "https://mqc1zmxqw2.execute-api.eu-west-1.amazonaws.com/Hackathon/").body)
}

console.log(initialPhrases);

export function GameStateReducer (state: Stores.GameState = initialGameState, action: SquareClickedAction): Stores.GameState {
  var currentState: Stores.GameState = state
  switch (action.type) {
    case SQUARE_SELECTED:
        currentState.game[GetSquareName(action.postion)] = 1;
        currentState.lastSquareActioned = action.postion;
        return currentState
    case SQUARE_UNSELECTED:
        currentState.game[GetSquareName(action.postion)] = 0;
        currentState.lastSquareActioned = action.postion;
        return currentState
  }
  return currentState
}

export function PhrasesReducer (state: Stores.Phrases = initialPhrases): Stores.Phrases {
  return state;
}