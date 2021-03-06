import { GridPosition } from "../models/GridPosition";

export interface ISquareClickedAction {
  type: any;
  postion: GridPosition;
  newlySelected: boolean;
}

export const SQUARE_SELECTED = "SQUARE_SELECTED";
export const SQUARE_UNSELECTED = "SQUARE_UNSELECTED";
export const NICKNAME_UPDATED = "NICKNAME_UPDATED";

export const SQUARE_NO_LINK = "SQUARE_NO_LINK";
export const SQUARE_PARTIAL_LINK = "SQUARE_PARTIAL_LINK";
export const SQUARE_FULL_LINK = "SQUARE_FULL_LINK";

export const selectSquare = (gridPostion: GridPosition): ISquareClickedAction => ({
  newlySelected: true,
  postion: gridPostion,
  type: SQUARE_SELECTED,
});

export const unselectSquare = (gridPostion: GridPosition): ISquareClickedAction => ({
  newlySelected: false,
  postion: gridPostion,
  type: SQUARE_UNSELECTED,
});

export function squarePairClass(state: string): string {
  if (state === SQUARE_FULL_LINK) {
    return "complete";
  } else if (state === SQUARE_PARTIAL_LINK) {
    return "partial";
  } else {
    return "";
  }
}
