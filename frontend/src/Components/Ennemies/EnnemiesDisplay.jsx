import React, { Component } from 'react'
import EnnemyBox from './EnnemyBox'

export class EnnemiesDisplay extends Component {
  render() {
    return (
      <div id="ennemies-display">
        <EnnemyBox />
        <EnnemyBox />
        <EnnemyBox />
        <EnnemyBox />
        <EnnemyBox />
      </div>
    )
  }
}

export default EnnemiesDisplay