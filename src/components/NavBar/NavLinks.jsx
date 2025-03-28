import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp} from "react-icons/fa"
import {BiEnvelope} from "react-icons/bi"
import {BsGithub} from "react-icons/bs"

const NavLinks = ({handleNav}) => {
    return (
        <ul className='nav-links'>
            <li onClick={handleNav} ><a  href="#" target='_blank' className='nav-link'><FaWhatsapp /></a></li>
            <li onClick={handleNav} ><Link  to="#" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
            <li onClick={handleNav} ><Link  to="https://github.com/GuillermoMontes" target='_blank' className='nav-link'><BsGithub /></Link></li>
            <li onClick={handleNav} ><a  href="#" target='_blank' className='nav-link' rel="noreferrer"><BiEnvelope /></a></li>
      </ul>
      )
}

export default NavLinks