import * as React from "react";
import { createStore, Store } from "redux";
import { GridPosition } from "../models/GridPosition";
import { Stores } from "../stores";
import { GameStateReducer } from "../reducers";
import { selectSquare, unselectSquare } from "../actions"

const store: Store<Stores.GameState> = createStore(GameStateReducer)

export interface SquareProps { phrase: string; position: GridPosition}

export class Square extends React.Component<SquareProps,{}> {
    props: SquareProps;
    stateOfSquare: boolean;

    constructor(props: SquareProps) {
        super();
        this.props = props;
        this.stateOfSquare = false;
        store.subscribe(this.handleStateChange.bind(this));
    }

    handleStateChange() {
        let x = store.getState();
        if(x.A1 === 1) {
            this.stateOfSquare = true;
        } else { 
            this.stateOfSquare = false;
        }
    }

   handleClick() {
      if(this.stateOfSquare === false) {
        store.dispatch(selectSquare(this.props.position))
      } else {
        store.dispatch(unselectSquare(this.props.position))
      }
  }

  render() {
    return (
      <button 
        id={this.props.position.x + "-" + this.props.position.y}
        type="button" onClick={this.handleClick.bind(this)} 
        className={"square " + (this.stateOfSquare ? "complete" : "")} >
        {this.props.phrase}
        <div className="separator-horizontal"></div><div className="separator-vertical"></div>
      </button>
    );
  }
}