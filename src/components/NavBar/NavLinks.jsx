import { Link } from 'react-router-dom';
import { FaLinkedin, FaWhatsapp} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import { TbFileCv } from "react-icons/tb";

const NavLinks = ({handleNav}) => {
    return (
        <ul className='nav-links'>
            <li onClick={handleNav} ><a  href="https://wa.me/1160366102?text=I%27m%20interested%20in%20your%20car%20for%20sale" target='_blank' className='nav-link'><FaWhatsapp /></a></li>
            <li onClick={handleNav} ><Link  to="https://www.linkedin.com/in/guillermo-montes-723890164/" target='_blank' className='nav-link'><FaLinkedin /></Link></li>
            <li onClick={handleNav} ><Link  to="https://github.com/GuillermoMontes" target='_blank' className='nav-link'><BsGithub /></Link></li>
            <li onClick={handleNav} ><a  href="GMontes_CV.pdf" download='CV_Guillermo_Montes' target='_blank' className='nav-link' rel="noreferrer"><TbFileCv /></a></li>
      </ul>
      )
}

export default NavLinks