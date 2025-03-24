import SeccionPrincipal from "../Seccion Principal/SeccionPrincipal"
import Proyectos from "../Proyectos/Proyectos"
import SobreMi from "../Sobre Mi/SobreMi"
import Skills from "../Skills/Skills"
import Servicios from "../Servicios/Servicios"
import Contacto from "../Contacto/Contacto"

const Menu = ({nav, handleNav, cerrarNav}) => {
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