import { motion } from "framer-motion";
import './Proyectos.css'
import CardProyectos from "./CardProyectos";
import { dataProyectos } from "../../data/proyectosData";


const Proyectos = () => {

  const fade = {
		opacity: 1,
		transition: {
			duration: 1.4,
		},
	};

  return (
    <div className='works' id='works'>
        <div className="container">
            {/* Titulo */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={fade}
              viewport={{ once: true }}
              className='heading'>
              <p className='heading-sub-text'>Construyo constantemente</p>
              <p className='heading-text'>Proyectos</p>
            </motion.div> 

            {/* Boton */}
            <div className="tabs">
              <button className="tab">React</button>
            </div>

            {/* Card de Proyectos */}
            <motion.div
					    className='works-box'
					    initial={{ opacity: 0 }}
					    whileInView={fade}>
                {dataProyectos.map((dataP)=>(
                  <div key={dataP.id}>
                    <CardProyectos dataP={dataP}/>
                  </div>
                ))}
                
					
				    </motion.div>

        </div>
    </div>
  )
}

export default Proyectos