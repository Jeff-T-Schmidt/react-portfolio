import * as React from 'react';
import './style.scss'
import { NavLink, Link } from 'react-router-dom';
import myPic from "../../../assets/jeff.jpg"
import {FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faFile, faBriefcase} from '@fortawesome/free-solid-svg-icons';



export default function Nav() {
  return (
    <div className='nav-bar'>
      <Link className='picture' to='/'>
        <img src={myPic}alt='developer' />
      </Link>
      <nav>
      <NavLink exact='true' activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
      </NavLink>     
      <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
      </NavLink>     
      <NavLink exact='true' activeclassname="active"className="about-link"to="/about">
        <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
      </NavLink>
      {/* Have the resume link go back to /home?      */}
      <NavLink  activeclassname="active"className="resume-link" to="/resume"
       onClick={() => window.open("https://docs.google.com/document/d/1J2W-EwZhN78MEM4jtZG55BTixvjfRRuGzd62zhy7-0g/edit?usp=sharing")}>
        <FontAwesomeIcon icon={faFile} color='#4d4d4e'/>
         </NavLink>     
      <NavLink exact='true' activeclassname="active"className="projects-link" to="/projects">
        <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e'/>
      </NavLink>     
   
      </nav> 

    </div>
  );
}
