import * as React from "react";

import { GridPosition } from "../models/GridPosition";
import { SquareData } from "../models/SquareData";
import { Square } from "./Square";
import { phrasesStore } from '../stores'

export interface GridProps { }

// supply to API the number of rows/cols
let numColumns = 5;

let phrases = phrasesStore.getState().phrases

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
								