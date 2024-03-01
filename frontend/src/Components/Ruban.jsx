import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export class Ruban extends Component {
  render() {
    return (
     <nav id="navbar">
        <div>
        <a href="#home">War Thunder Assistant</a>
    </div>
    <div>
    
    <Link to="/">Helper</Link>
        <Link to="/about">About This Project</Link>
    </div>
        
     </nav>
    )
  }
}

export default Ruban