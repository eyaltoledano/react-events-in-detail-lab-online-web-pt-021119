// Code CoordinatesButton Component Here

import React from 'react'

export default class CoordinatesButton extends React.Component {
  handleButtonClick = (event) => {
    const x = event.clientX
    const y = event.clientY
    this.props.onReceiveCoordinates([x, y]) 
  }

  render() {
    return <button onClick={this.handleButtonClick}>Button</button>
  }
}
