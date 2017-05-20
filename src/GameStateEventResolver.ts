
export function GameStateEventResolver(gameState: any): string {
    var rowZeroComplete = rowComplete(gameState, 0);
    return rowZeroComplete ? "Row zero smashed!!! Drink 3 fingers!" : "Drink one finger!";
}

export function rowComplete(gameState: any, rowNumber: number): boolean {
    var counter = 0;
    for(var i = 0; i < 5; i++) {
        if(gameState[i + "-" + rowNumber]) {
            counter++;
        }
    }
    return counter === 5;
}