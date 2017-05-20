import * as React from "react";
import { createStore, Store } from "redux";
import { GridPosition } from "../models/GridPosition";
import { gameStateStore } from "../stores";
import { selectSquare, unselectSquare } from "../actions"
import { GetSquareName } from "../SquareStateHelper"


export interface SquareProps { phrase: string; position: GridPosition}

export class Square extends React.Component<SquareProps,{}> {
    props: SquareProps;
    stateOfSquare: boolean;
    horizontalPair: boolean;
    verticalPair: boolean;

    constructor(props: SquareProps) {
        super();
        this.props = props;
        this.stateOfSquare = false;
        this.horizontalPair = false;
        this.verticalPair = false;
        gameStateStore.subscribe(this.handleStateChange.bind(this));
        gameStateStore.subscribe(this.handleConnectorUpdate.bind(this));
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

  handleConnectorUpdate() {
    let x = gameStateStore.getState();
  }
  
  render() {
    return (
      <button 
        id={"square-" + this.props.position.x + "-" + this.props.position.y}
        type="button" onClick={this.handleClick.bind(this)} 
        className={"square " + (this.stateOfSquare ? "complete" : "")} >
        {this.props.phrase}
        <div className={"separator-horizontal" + (this.horizontalPair ? " complete" : "")}></div><div className={"separator-vertical" + (this.verticalPair ? " complete" : "")}></div>
      </button>
    );
  }
}