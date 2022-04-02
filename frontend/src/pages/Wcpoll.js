import { Component } from "react";
import FullNav from "../FullNav.js";

export default class Wcpoll extends Component {
  constructor() {
    super();
    this.state = {
      pollChoice: "Not picked"
    }
  }
  render(){
    return(
      <div>
        <FullNav />
        <div id="wctitle">
          WYNNCRAFT WEAPON POLL<br />
          <div>--------------------------------------------------------------------------------------------------------</div>
          
          <div id="wcad">
          Wynncraft is a fun Minecraft MMORPG and I wanted to see what weapon you would think looks the best.
          </div>
          <div id="poll">
            <button className="pollBtn">Weapon 1</button>
            <button className="pollBtn">Weapon 2</button>
            <button className="pollBtn">Weapon 3</button>
            <button className="pollBtn">Weapon 4</button>
            <button className="pollBtn">Weapon 5</button>
            <button className="pollBtn">Weapon 6</button>
          </div>
        </div>
      </div>
    )
  }
}