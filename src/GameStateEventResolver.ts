
export function GameStateEventResolver(gameState: any): string {
    if(rowComplete(gameState, 0)) {
        return "First row smashed!!! Drink 3 fingers!";
    }
    if(rowComplete(gameState, 1)) {
        return "Second row smashed!!! Drink 3 fingers!";
    }
    if(rowComplete(gameState, 2)) {
        return "Third row smashed!!! Drink 3 fingers!";
    }
    if(rowComplete(gameState, 3)) {
        return "Fourth row smashed!!! Drink 3 fingers!";
    }
    if(rowComplete(gameState, 4)) {
        return "Fifth row smashed!!! Drink 3 fingers!";
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