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
        <img src={myPic} alt="picture of me" />
      </Link>
      <nav>
      <NavLink exact='true' activeclassname="active" to="/home">
        <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
      </NavLink>     
      <NavLink exact='true' activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
      </NavLink>     
      <NavLink exact='true' activeclassname="active"className="about-link"to="/about">
        <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
      </NavLink>     
      <NavLink exact='true' activeclassname="active"className="resume-link" to="/resume">
        <FontAwesomeIcon icon={faFile} color='#4d4d4e'/>
      </NavLink>     
      <NavLink exact='true' activeclassname="active"className="projects-link" to="/projects">
        <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e'/>
      </NavLink>     
   
      </nav> 

    </div>
  );
}
