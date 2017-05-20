import * as React from "react";
import { gameStateStore } from "../stores";

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
        //gameStateStore.getState().game;
        this.text = "Drink!"
        this.timerId = setInterval(
            () => this.tick(),
            2000
            );
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

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

    render() {
        return (
            <div className="eventTicker">{this.text}</div>
        );
  }
}
