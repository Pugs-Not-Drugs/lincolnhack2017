import * as React from "react";
import { gameStateStore } from "../stores";
import { rowComplete, columnComplete, GameStateEventResolver } from "../GameStateEventResolver"

export interface EventProps { }

export class WinningBuddies extends React.Component<EventProps,{}> {
    display: boolean;
    images: string[]
    animations: string[]

    constructor() {
        super();
        gameStateStore.subscribe(this.handleStateChange.bind(this));
        this.display = false;
        
        this.images = [
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/1.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/2.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/3.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/4.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/5.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/6.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/7.png",
            "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/db.png"
        ]
        this.animations = [
            "animateFive",
            "animateSix",
            "animateSeven",
            "animateEight",
        ]
    }

    handleStateChange() {
        var state = gameStateStore.getState();
        if(rowComplete(state.game, 0) && rowComplete(state.game, 1) && rowComplete(state.game, 2) && rowComplete(state.game, 3) && rowComplete(state.game, 4)) {
            this.display = true
            this.setState({
                newForm : true
            });
        }
    }

  render() {
        return (
            <div id="winningBuddies">
                <img className={"winningBuddies " + (!this.display ? "" : this.animations[0])} src={this.display ? this.images[0] : ""}/>
                <img className={"winningBuddies " + (!this.display ? "" : this.animations[1])} src={this.display ? this.images[1] : ""}/>
                <img className={"winningBuddies " + (!this.display ? "" : this.animations[2])} src={this.display ? this.images[2] : ""}/>
                <img className={"winningBuddies " + (!this.display ? "" : this.animations[3])} src={this.display ? "https://s3-eu-west-1.amazonaws.com/gebingo.co.uk/Politicians/db.png" : ""}/>
            </div>
        );
  }
}
