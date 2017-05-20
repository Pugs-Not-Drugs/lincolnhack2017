import * as React from "react";
import { gameStateStore } from "../stores";
import { rowComplete, columnComplete, GameStateEventResolver } from "../GameStateEventResolver"

export interface EventProps { }

export class DrinkingBuddy extends React.Component<EventProps,{}> {
    imageUrl: string;
    winUrl: string
    timerId: NodeJS.Timer;
    images: string[]

    constructor() {
        super();
        gameStateStore.subscribe(this.handleStateChange.bind(this));
        this.imageUrl = "";
        this.winUrl = "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/db.png";
        this.images = [
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/1.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/2.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/3.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/4.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/5.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/6.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/7.png",
        ]
    }

    handleStateChange() {
        var state = gameStateStore.getState();
        if(rowComplete(state.game, 0) && rowComplete(state.game, 1) && rowComplete(state.game, 2) && rowComplete(state.game, 3) && rowComplete(state.game, 4)) {
            console.log("You win!");
            this.imageUrl = this.winUrl;
            clearInterval(this.timerId);
            this.timerId = setInterval(() => this.tick(), 4000);
            this.setState({
                newForm : true
            });
        } else if(rowComplete(state.game, state.lastSquareActioned.x) || columnComplete(state.game, state.lastSquareActioned.y)) { 
            console.log("Row or Column Complete!");
            this.imageUrl = this.images[Math.floor(Math.random() * this.images.length)];
            clearInterval(this.timerId);
            this.timerId = setInterval(() => this.tick(), 4000);
            this.setState({
                newForm : true
            });
        }
    }

  tick() {
    this.imageUrl = "";
    clearInterval(this.timerId);
    this.setState({
        newForm: true
    });
  }

  render() {
        return (
            <div id="drinkingBuddy" className={(this.imageUrl == "" ? "" : " animate")}><img src={this.imageUrl}/></div>
        );
  }
}
