import * as React from "react";

import { GridPosition } from "../models/GridPosition";

export interface SquareProps { phrase: string; position: GridPosition}

export const Square = (props: SquareProps) => <button className="square">{props.phrase}</button>;
