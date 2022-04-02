import { Component } from "react";
import FullNav from "../FullNav.js";
import wimg1 from "./wimg1.png";
import wimg2 from "./wimg2.png";
import wimg3 from "./wimg3.png";
import wimg4 from "./wimg4.png";
import wimg5 from "./wimg5.png";


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
            <div>
            <img src={wimg1} alt="Img could not load" className="pollImg" width="100" height="100"></img>
            <button className="pollBtn">Weapon 1</button>
            </div>
            <div>
            <img src={wimg2} alt="Img could not load" className="pollImg" width="100" height="100"></img>
            <button className="pollBtn">Weapon 2</button>
            </div>
            <div>
            <img src={wimg3} alt="Img could not load" className="pollImg" width="100" height="100"></img>
            <button className="pollBtn">Weapon 3</button>
            </div>
            <div>
            <img src={wimg4} alt="Img could not load" className="pollImg" width="100" height="100"></img>
            <button className="pollBtn">Weapon 4</button>
            </div>
            <div>
            <img src={wimg5} alt="Img could not load" className="pollImg" width="100" height="100"></img>
            <button className="pollBtn">Weapon 5</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}