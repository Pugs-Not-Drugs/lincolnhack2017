import * as React from "react";

import { GridPosition } from "../models/GridPosition";
import { SquareData } from "../models/SquareData";

import { Square } from "./Square";

export interface GridProps { }

// supply to API the number of rows/cols
let numColumns = 5;

// message, weight
let phrases = [
	{message: "A1", weight: 10},
	{message: "A2", weight: 10},
	{message: "A3", weight: 10},
	{message: "A4", weight: 10},
	{message: "A5", weight: 10},
	{message: "B1", weight: 10},
	{message: "B2", weight: 10},
	{message: "B3", weight: 10},
	{message: "B4", weight: 10},
	{message: "B5", weight: 10},
	{message: "C1", weight: 10},
	{message: "C2", weight: 10},
	{message: "C3", weight: 10},
	{message: "C4", weight: 10},
	{message: "C5", weight: 10},
	{message: "D1", weight: 10},
	{message: "D2", weight: 10},
	{message: "D3", weight: 10},
	{message: "D4", weight: 10},
	{message: "D5", weight: 10},
	{message: "E1", weight: 10},
	{message: "E2", weight: 10},
	{message: "E3", weight: 10},
	{message: "E4", weight: 10},
	{message: "E5", weight: 10},
]

var phraseList: SquareData[][] = [];

// create phraseList with grid positions
for (var i = 0; i < numColumns; i++) {
	phraseList[i] = [];
	for (var j = 0; j < numColumns; j++) {
		phraseList[i][j] = new SquareData(phrases[(i * 5) + j].message, new GridPosition(i, j));
	}
}

export const Grid = () => 	<div className="grid">
								{phraseList.map(function(row: SquareData[]) { 
									return <div>
										<Square phrase={row[0].phrase} position={row[0].position}/>
										<Square phrase={row[1].phrase} position={row[1].position}/>
										<Square phrase={row[2].phrase} position={row[2].position}/>
										<Square phrase={row[3].phrase} position={row[3].position}/>
										<Square phrase={row[4].phrase} position={row[4].position}/>
									</div> 
								})}
							</div>
								