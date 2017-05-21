import * as React from "react";
import { gameStateStore } from "../stores";
import { rowComplete } from "../GameStateEventResolver"

export interface EventProps { }

export class Reset extends React.Component<EventProps,{}> {
isHidden: boolean;

constructor() {
    super();
    this.isHidden = true;
    gameStateStore.subscribe(this.handleStateChange.bind(this));
}

handleStateChange() {
    let state = gameStateStore.getState().game;
    if(rowComplete(state, 0) && rowComplete(state, 1) 
        && rowComplete(state, 2) && rowComplete(state, 3) && rowComplete(state, 4)) {
        this.isHidden = false;
    }

    this.setState({
        newForm : true
    });
  }

   handleClick() {
	  window.location.reload();
  }

render() {
        return (
            <div className={(this.isHidden ? "hiddenButton": "") + " resetButton"}>
                <button onClick={this.handleClick.bind(this)} >Restart</button>
            </div>
        );
  }
}
