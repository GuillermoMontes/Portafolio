import "./seccionPrincipal.css" 
import { useContext } from "react";
import { dataContext } from "../contex";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import { BiDownload } from "react-icons/bi";

const SeccionPrincipal = () => {

	const { nav } = useContext(dataContext);

	const { handleNav } = useContext(dataContext);


  	const menuVariants = {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			scale: [1, 1.2, 1.5, 1.2, 1],
			rotate: [0, 0, 360, 360, 360],
			borderRadius: ["50%", "50%", "50%", "50%", "50%"],
			transition: {
				duration: 1,
			},
		},
	};

	const heroVariants = {
		hidden: {
			opacity: 0,
			y: "-50%",
		},
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.4,
			},
		},
	};

	const contactVariants = {
		hidden: {
			opacity: 0,
			x: "-50%",
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1.4,
			},
		},
	};




  return (
    <div className='hero-section' name='home' id='home'>

		
		

		{/* Boton menu */}
		<motion.div
				variants={menuVariants}
				initial='hidden'
				whileInView='visible'
				onClick={handleNav}
				className='menu-icon'>
				{nav ? <FaTimes /> : <FaBars />}
		</motion.div>


		{/* Nombre */}
		<motion.div
				variants={heroVariants}
				initial='hidden'
				whileInView='visible'
				className='hero-content'>
				<p className='hero-intro'>
					<span>Guillermo</span> <span>Montes.</span>
				</p>
				<p className='hero-desc'>
					Soy <span className='hero-desc-sub'>Desarrollador Front-End.</span>
				</p>
			</motion.div>

			{/* CV */}
			<motion.span
				variants={contactVariants}
				initial='hidden'
				whileInView='visible'>
				<a
					href='GMontes_CV.pdf'
					download='CV_Guillermo_Montes'
					className='hero-contact'>
					Descargar CV <BiDownload className='cv-icon' />
				</a>
			</motion.span>

    </div>
  )
}

export default SeccionPrincipal