import { useEffect, useState } from "react"
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";
import './App.css'
import PagMenu from "./components/PagMenu/PagMenu";

const App = ()=> {
  // Stado
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    setTimeout(() => setCargando(false), 3000)
  }, []);

  const cargaText = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition:{
        duration: 1
      }
    }
  }




 
  return (
    cargando ? 
    <div className="bg-body h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
      <div className="relative">
        <svg height="60" width="320">
          <rect className="shape" height="60" width="320" />
        </svg>        
        <motion.p variants={cargaText} initial='hidden' animate='visible' className="text">Guillermo Montes</motion.p>
      </div>
    </div>
    :
    <div>
      <Router>
        <PagMenu/>
      </Router>
    </div>
  )
}

export default App
