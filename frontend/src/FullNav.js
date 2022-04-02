import React, { Component } from 'react'
import Titlenav from './Titlenav.js'
import Pagenav from './Pagenav.js'

export default class FullNav extends Component {
  render() {
    return (
        <div>
            <Titlenav />
            <Pagenav />
        </div>
    )
  }
}
