import React from 'react'
import "../App.css"

const NAVBAR = () => {
  return (
    <div className='navbar'>
       <img 
       src={require("./pic.png")} 
       alt={"Bek"}
       width={70}
       height={70}
       />  
    <h1 id='navTitle'>Food Recipe Finder</h1>
    </div>
    
  )
}

export default NAVBAR