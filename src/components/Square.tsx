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
    state: string;

    constructor(props: SquareProps) {
        super();
        this.props = props;
        store.subscribe(this.handleStateChange)
    }

  render() {
    return (
      <button type="button" onClick={this.handleClick.bind(this)} className="square">
        {this.props.phrase}
        <div className={this.state}></div>
      </button>
    );
  }

  private handleClick() {
      if(this.state === "off" || this.state === null) {
        store.dispatch(selectSquare(this.props.position))
        console.log("turning on");
      } else {
          console.log("turning off");
        store.dispatch(unselectSquare(this.props.position))
      }
  }

  private handleStateChange() {
    if(store.getState().A1 === 1) {
        this.state = "on";
    } else { 
        this.state = "off";
    }
    
    console.log(this.state);
  }
}