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
      <NavLink exact='true' activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
      </NavLink>     
      <NavLink exact='true' activeclassname="active" className="contact-link" to="/">
        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
      </NavLink>     
      <NavLink exact='true' activeclassname="active"className="about-link"to="/">
        <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
      </NavLink>     
      <NavLink exact='true' activeclassname="active"className="resume-link" to="/">
        <FontAwesomeIcon icon={faFile} color='#4d4d4e'/>
      </NavLink>     
      <NavLink exact='true' activeclassname="active"className="projects-link" to="/">
        <FontAwesomeIcon icon={faBriefcase} color='#4d4d4e'/>
      </NavLink>     
   
      </nav> 

    </div>
  );
}

 // const [value, setValue] = React.useState(0);
{/* <Box sx={{ width: 500 }} >
<BottomNavigation
  showLabels
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Home" icon={<HomeIcon />} to='/' />
  <BottomNavigationAction label="About me" icon={<InfoIcon />} to='/about' />
  <BottomNavigationAction label="Projects" icon={<AccountTreeIcon />} to='/projects'/>
  <BottomNavigationAction label="Contact" icon={<PermContactCalendarIcon />} to='/contact' />
  <BottomNavigationAction label="Resume" icon={<DocumentScannerIcon />} to='/resume' />
</BottomNavigation>
</Box> */}