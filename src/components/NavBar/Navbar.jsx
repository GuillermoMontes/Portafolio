import './Navbar.css'
import { useContext } from "react";
import { dataContext } from "../contex";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Link } from 'react-scroll';
import perfilImg from '../../image/IMG_1795.jpg'
import NavLinks from './NavLinks';
import { FaHome, FaLaptop } from "react-icons/fa";
import { BiBookContent, BiServer, BiEnvelope } from "react-icons/bi";
import { FiUser } from "react-icons/fi";


const Navbar = () => {

  const { nav } = useContext(dataContext);

	const { handleNav } = useContext(dataContext);

  const navVariants = {
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  return (
    <AnimatePresence>

      {/* Barra de navegacion */}
      <motion.nav
        initial={{ width: "0" }}
        animate={
        nav ? { width: "300px" } : { width: "0", transition: { delay: 1 } }
        }
        className={nav ? "navbar active" : "navbar"}>

          {/* Nav Container */}
          <motion.div initial='hidden'
					whileInView={nav ? "visible" : "hidden"}
					variants={navVariants}
					exit='hidden'
					className='navbar-container'>

          {/* img perfil , barra de links (git , linkedin, whatsapp, email) */}
          <div className='top-details'>
						<div className='img__cover'>
							<img src={perfilImg} alt='Main' className='profile-pic-small' />
						</div>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							onClick={handleNav}
							to='home'
							className='profile-name'>
							Guillermo Montes
						</Link>
						<NavLinks handleNav={handleNav}/>
					</div>

          {/* Barra de navegacion */}
          <ul className='mid-details'>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='home'
							className='mid-links'>
							<FaHome className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Menu
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='works'
							className='mid-links'>
							<BiBookContent className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Proyectos
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='about'
							className='mid-links'>
							<FiUser className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Sobre mi
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='skills'
							className='mid-links'>
							<FaLaptop className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Skills
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='services'
							className='mid-links'>
							<BiServer className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Servicios
							</li>
						</Link>
						<Link
							activeClass='active'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							to='contact'
							className='mid-links'>
							<BiEnvelope className='mid-icon' />
							<li className='mid-link' onClick={handleNav}>
								Contacto
							</li>
						</Link>
					</ul>

          </motion.div>

      </motion.nav>
    </AnimatePresence>
  )
}

export default Navbar