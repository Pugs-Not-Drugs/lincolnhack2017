import { GridPosition } from "../models/GridPosition";

export interface SquareClickedAction {
  type: any
  postion: GridPosition
}

export const SQUARE_SELECTED = "SQUARE_SELECTED";
export const SQUARE_UNSELECTED = 'SQUARE_UNSELECTED'
export const NICKNAME_UPDATED = 'NICKNAME_UPDATED'


export const selectSquare = (gridPostion: GridPosition): SquareClickedAction => ({
  type: SQUARE_SELECTED,
  postion: gridPostion,
})

export const unselectSquare = (gridPostion: GridPosition): SquareClickedAction => ({
  type: SQUARE_UNSELECTED,
  postion: gridPostion,
})