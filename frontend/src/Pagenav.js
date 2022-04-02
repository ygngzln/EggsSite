import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Pagenav extends Component {
  reset(){
    document.getElementById("webname").style.color = "blueviolet"
  }

  render() {
    return (
      <nav id="header">
          <span id="point">Pages: </span>
          <Link to="/EggBurger" className="link">Eggburger</Link> / /&nbsp;
          <Link to="/Wcpoll" className="link">Wynncraft Weapon Poll</Link> / /&nbsp;
          <Link to="/Blog" className="link">Blog</Link>
      </nav>
    )
  }
}
