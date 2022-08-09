import React, { Component } from 'react'

export default class Alert extends Component {
  render() {
    return (
      <div className={this.props.messageType} role='alert'>
         {this.props.message}
      </div>
    )
  }
}
