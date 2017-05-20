import { GridPosition } from "./models/GridPosition";

export function GetSquareName(pos: GridPosition): string {
    return pos.x + "-" + pos.y;
}