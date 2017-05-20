import * as React from "react";
import { createStore, Store } from "redux";
import { GridPosition } from "../models/GridPosition";
import { gameStateStore } from "../stores";
import { selectSquare, unselectSquare, squarePairClass } from "../actions"
import { GetSquareName } from "../SquareStateHelper"
import { SQUARE_NO_LINK, SQUARE_PARTIAL_LINK, SQUARE_FULL_LINK,  } from '../actions'
import { rowComplete, columnComplete } from "../GameStateEventResolver"

export interface SquareProps { phrase: string; position: GridPosition}

export class Square extends React.Component<SquareProps,{}> {
	props: SquareProps;
	stateOfSquare: boolean;
	horizontalPairState: string;
	verticalPairState: string;

	constructor(props: SquareProps) {
		super();
		this.props = props;
		this.stateOfSquare = false;
		this.horizontalPairState = SQUARE_NO_LINK;
		this.verticalPairState = SQUARE_NO_LINK;
		gameStateStore.subscribe(this.handleStateChange.bind(this));
		gameStateStore.subscribe(this.handlePairUpdate.bind(this));
		this.state = {
		  newForm : null
		};
	}

	handleStateChange() {
		if(gameStateStore.getState().game[GetSquareName(this.props.position)] === 1) {
			this.stateOfSquare = true;
		} else { 
			this.stateOfSquare = false;
		}

		this.setState({
		  newForm : true
		});
	}

   handleClick() {
	  if(this.stateOfSquare === false) {
		gameStateStore.dispatch(selectSquare(this.props.position))
	  } else {
		gameStateStore.dispatch(unselectSquare(this.props.position))
	  }
  }

  handlePairUpdate() {
	let x = gameStateStore.getState();

	let horizontalPairPosition: GridPosition = new GridPosition(this.props.position.x, this.props.position.y + 1)
	let verticalPairPosition: GridPosition = new GridPosition(this.props.position.x - 1, this.props.position.y)

	if(rowComplete(x.game, this.props.position.x)) {
	  this.horizontalPairState = SQUARE_FULL_LINK;
	} else if(this.stateOfSquare && gameStateStore.getState().game[GetSquareName(horizontalPairPosition)] === 1) {
	  this.horizontalPairState = SQUARE_PARTIAL_LINK;
	} else {
	  this.horizontalPairState = SQUARE_NO_LINK;
	}
	
	if(columnComplete(x.game, this.props.position.y)) {
	  this.verticalPairState = SQUARE_FULL_LINK
	} else if(this.stateOfSquare && gameStateStore.getState().game[GetSquareName(verticalPairPosition)] === 1) {
	  this.verticalPairState = SQUARE_PARTIAL_LINK
	} else {
	  this.verticalPairState = SQUARE_NO_LINK;
	}

	this.setState({
	  newForm : true
	});
  }
  
  render() {
	return (
	  <button 
		id={"square-" + this.props.position.x + "-" + this.props.position.y}
		type="button" onClick={this.handleClick.bind(this)} 
		className={"square " + (this.stateOfSquare ? "complete" : "")} >
		{this.props.phrase}
		<div className={"separator-horizontal " + squarePairClass(this.horizontalPairState) }></div><div className={"separator-vertical " + squarePairClass(this.verticalPairState)}></div>
	  </button>
	);
  }
}