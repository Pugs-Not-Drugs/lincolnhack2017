import { GridPosition } from "./models/GridPosition";

export function GameStateEventResolver(gameState: any, lastActionedPosition: GridPosition): string {
    if(rowComplete(gameState, lastActionedPosition.x)) {
        return "Row smashed!!! Drink 3 fingers!";
    }
    if(columnComplete(gameState, lastActionedPosition.y)) {
        return "Column smashed!!! Drink 3 fingers!";
    }
    return "Drink one finger!";
}

export function rowComplete(gameState: any, rowNumber: number): boolean {
    var counter = 0;
    for(var i = 0; i < 5; i++) {
        if(gameState[rowNumber + "-" + i]) {
            counter++;
        }
    }
    return counter === 5;
}

export function columnComplete(gameState: any, rowNumber: number): boolean {
    var counter = 0;
    for(var i = 0; i < 5; i++) {
        if(gameState[i + "-" + rowNumber]) {
            counter++;
        }
    }
    return counter === 5;
}