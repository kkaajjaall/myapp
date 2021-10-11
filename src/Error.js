import React from 'react'
import { NavLink } from 'react-router-dom'
import "./App.css"

const Error = () => {
    return (
        <>
           <div className="container error-container">
               <div className="main-error">
                   <h2 className="sub-heading"> We are sorry,page is not found</h2>
                   <p  classNamee="para"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias rem temporibus <br/>exercitationem quae incidunt laborum debitis molestiae sit, cum facilis?</p>
                   <NavLink  className="btn" to ="/">  Back  </NavLink>
               </div>
           </div>
        </>
    );
}

export default Error;
