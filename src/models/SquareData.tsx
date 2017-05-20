import { GridPosition } from "../models/GridPosition";

export class SquareData {
	phrase: string;
	position: GridPosition;

	constructor(phrase: string, position: GridPosition) {
		this.phrase = phrase;
		this.position = position;
	}
}