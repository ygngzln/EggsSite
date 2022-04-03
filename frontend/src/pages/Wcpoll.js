import { Component } from "react";
import axios from 'axios';
import FullNav from "../FullNav.js";
import wimg1 from "./wimg1.png";
import wimg2 from "./wimg2.png";
import wimg3 from "./wimg3.png";
import wimg4 from "./wimg4.png";
import wimg5 from "./wimg5.png";

const uri = '/api/swords/'
var picked = false;

export default class Wcpoll extends Component {
  constructor() {
    super();
    this.state = {
      pollChoice: "Not picked"
    }
  }

  decayButtons = async() => {
    var btn = document.getElementsByClassName("pollBtn")
    for(var i=0;i<btn.length;i++){
      btn[i].style.backgroundColor = "silver";
      btn[i].style.color = "black";
      btn[i].style.border = "2px solid black"
    }
  }

  buttonClick = async(n) => {
    if(picked){
      return;
    }
    picked = true;
    await axios.post(uri, {
      sword: n
    })
    await this.updateResults()
    await window.alert("Thanks for voting in this poll!")
    await this.decayButtons()
  }

  showResults = async() => {
    const results = document.getElementById("results")
    if(results.style.visibility === "visible"){
      results.style.visibility = "hidden"
    }else{
      results.style.visibility = "visible"
      this.updateResults()
    }
  }

  updateResults = async() => {
    const res = await axios.get(uri)
    const onev = document.getElementById("1v")
    const twov = document.getElementById("2v")
    const threev = document.getElementById("3v")
    const fourv = document.getElementById("4v")
    const fivev = document.getElementById("5v")
    var cone = 0;
    var ctwo = 0;
    var cthree = 0;
    var cfour = 0;
    var cfive = 0;
    for(var x=0;x<res.data.length;x++){
      switch(res.data[x].sword){
        case 1:
          cone++
          break;
        case 2:
          ctwo++
          break;
        case 3:
          cthree++
          break;
        case 4:
          cfour++
          break;
        case 5:
          cfive++
          break;
      }
      onev.innerHTML = cone
      twov.innerHTML = ctwo
      threev.innerHTML = cthree
      fourv.innerHTML = cfour
      fivev.innerHTML = cfive
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
            <button className="pollBtn" onClick={(e) => this.buttonClick(1)}>Weapon 1</button>
            </div>
            <div>
            <img src={wimg2} alt="Img could not load" className="pollImg" width="100" height="100"></img>
            <button className="pollBtn" onClick={(e) => this.buttonClick(2)}>Weapon 2</button>
            </div>
            <div>
            <img src={wimg3} alt="Img could not load" className="pollImg" width="100" height="100"></img>
            <button className="pollBtn" onClick={(e) => this.buttonClick(3)}>Weapon 3</button>
            </div>
            <div>
            <img src={wimg4} alt="Img could not load" className="pollImg" width="100" height="100"></img>
            <button className="pollBtn" onClick={(e) => this.buttonClick(4)}>Weapon 4</button>
            </div>
            <div>
            <img src={wimg5} alt="Img could not load" className="pollImg" width="100" height="100"></img>
            <button className="pollBtn" onClick={(e) => this.buttonClick(5)}>Weapon 5</button>
            </div>
          </div>
          <button id="showRes" onClick={this.showResults}>Poll Results</button>
          <div id="results" style={{visibility: "hidden"}}>
            <div> Weapon 1 got <span className="vote" id="1v"></span> votes</div><br />
            <div> Weapon 2 got <span className="vote" id="2v"></span> votes</div><br />
            <div> Weapon 3 got <span className="vote" id="3v"></span> votes</div><br />
            <div> Weapon 4 got <span className="vote" id="4v"></span> votes</div><br />
            <div> Weapon 5 got <span className="vote" id="5v"></span> votes</div><br />
          </div>
        </div>
      </div>
    )
  }
}