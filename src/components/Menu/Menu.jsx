import SeccionPrincipal from "../Seccion Principal/SeccionPrincipal"
import Proyectos from "../Proyectos/Proyectos"
import SobreMi from "../Sobre Mi/SobreMi"
import Skills from "../Skills/Skills"
import Servicios from "../Servicios/Servicios"
import Contacto from "../Contacto/Contacto"
import { useContext } from "react";
import { dataContext } from "../contex"


const Menu = () => {
  
  const { cerrarNav } = useContext(dataContext);

 

  return (
    <div onClick={cerrarNav}>
      <SeccionPrincipal/>
      <Proyectos/>
      <SobreMi/>
      <Skills/>
      <Servicios/>
      <Contacto/>
    </div>
  )
}

export default Menu