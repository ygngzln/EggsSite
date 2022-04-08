import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class Titlenav extends Component {
  render(){
        return (
            <div id="title">
                <Link to="/" id="webname" onClick={this.reset}>Egg's Website</Link>
            </div>
        )
    }
}