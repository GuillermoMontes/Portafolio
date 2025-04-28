import { motion } from "framer-motion";
import "./SobreMi.css";
import PerfilImg from "../../image/fotoPerfil3.jpg";

const SobreMi = () => {
  const horizontal = {
    x: 0,
    opacity: 1,
    transition: { type: "spring", duration: 2, bounce: 0.3 },
  };

  return (
    <div className="about" id="about">
      <div className="container">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={horizontal}
          viewport={{ once: true }}
          className="heading"
        >
          <p className="heading-text">Sobre Mi</p>
        </motion.div>
        <div className="split-about">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={horizontal}
            className="about-content"
          >
            <p>
              Mi interés por el desarrollo web comenzó en 2022 cuando me anoté
              en el curso "Maxi Programa". Fui muy autodidacta en los comienzos
              hasta que pude sentir el progreso cuando continué haciendo cursos
              como en "Codearock","Coder House" y "Educación It". Desde ahí, me
              apasiona crear productos digitales accesibles e inclusivos que
              puedan marcar la diferencia.{" "}
            </p>
            <br />
            <p>
              Actualmente estudio Node Js con Express y busco ampliar mi campo
              laboral en el mundo del desarrollo web. Soy una persona
              responsable y comprometida con mi trabajo. Constantemente estoy
              aprendiendo nuevas tecnologías y herramientas para mejorar mis
              habilidades. También disfruto incursionar en Base de datos!
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={horizontal}
            className="about-img"
          >
            <img src={PerfilImg} alt="Profile" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SobreMi;
