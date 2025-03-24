import { useState } from "react"
import Navbar from "../NavBar/Navbar"
import Menu from "../Menu/Menu"



const PagMenu = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () =>{
    setNav(!nav)
  }

  const cerrarNav = () =>{
   if(nav){
     setNav(false)
   }
  }
  return (
    <>
      <Navbar nav={nav} handleNav={handleNav}/>
      <Menu nav={nav} cerrarNav={cerrarNav} handleNav={handleNav}/>
    </>
  )
}

export default PagMenu