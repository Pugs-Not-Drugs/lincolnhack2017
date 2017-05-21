import { GridPosition } from "./models/GridPosition";

export function GameStateEventResolver(gameState: any, lastActionedPosition: GridPosition): string {
    if (rowComplete(gameState, 0)
        && rowComplete(gameState, 1)
        && rowComplete(gameState, 2)
        && rowComplete(gameState, 3)
        && rowComplete(gameState, 4)) {
        return "Parliamentary majority!";
    }
    if (rowComplete(gameState, lastActionedPosition.x)) {
        return "Seats gained! Drink 3 fingers!";
    }
    if (columnComplete(gameState, lastActionedPosition.y)) {
        return "Seats gained! Drink 3 fingers!";
    }
    return "Drink one finger!";
}

export function rowComplete(gameState: any, rowNumber: number): boolean {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        if (gameState[rowNumber + "-" + i]) {
            counter++;
        }
    }
    return counter === 5;
}

export function columnComplete(gameState: any, rowNumber: number): boolean {
    let counter = 0;
    for (let i = 0; i < 5; i++) {
        if (gameState[i + "-" + rowNumber]) {
            counter++;
        }
    }
    return counter === 5;
}
