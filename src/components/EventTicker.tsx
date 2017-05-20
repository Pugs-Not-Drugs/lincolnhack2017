import * as React from "react";
import { gameStateStore } from "../stores";
import { GameStateEventResolver } from "../GameStateEventResolver"

export interface EventProps { }

export class EventTicker extends React.Component<EventProps,{}> {
    text: string;
    timerId: NodeJS.Timer;

    constructor() {
        super();
        gameStateStore.subscribe(this.handleStateChange.bind(this));
        this.state = {
          newForm : null
        };
    }

    handleStateChange() {
        var state = gameStateStore.getState();
        this.text = GameStateEventResolver(state.game, state.lastSquareActioned);
        this.timerId = setInterval(() => this.tick(), 5000);
        this.setState({
            newForm : true
        });
    }

  tick() {
    this.text = ""
    this.setState({
        newForm: true
    });
  }

  render() {
        return (
            <div id="eventTicker">{this.text}g</div>
        );
  }
}
