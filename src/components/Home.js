import React, { Component } from 'react'
import EmployeeImg from  './img/EmployeeImg.jpg'

export default class Home extends Component {
  render() {
    return (
      <div>
        <img src={EmployeeImg} alt="bg"/>
      </div>
    )
  }
}
