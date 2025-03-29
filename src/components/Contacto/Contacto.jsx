import React from "react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contacto.css";
import QRimg from '../../image/QR_2.png'

const Contacto = () => {
  const fade = {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  };

  const verticalLeft = {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
    },
  };


  const form = useRef();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm("service_zadrrj2", "template_wxxipbw", form.current, {
        publicKey: import.meta.env.VITE_APIKEY,
      })
      .then(
        () => {
          toast.success("Gracias por tu mensaje! Te voy a responder pronto.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          setIsSubmitting(false);
          form.current.reset();
        },
        (error) => {
          toast.error("Falló el envío.Por favor, hacelo de nuevo.", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.log("FAILED...", error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="container">
          <motion.div
            className="heading"
            initial={{ opacity: 0 }}
            whileInView={fade}
            viewport={{ once: true }}
          >
            <p className="heading-sub-text">Cómo</p>
            <p className="heading-text">Contactarme</p>
          </motion.div>
          <div className="contact-box">
            <motion.div
              className="left-box"
              initial={{ opacity: 0, y: "-50px" }}
              whileInView={verticalLeft}
            >
              <div className="contact-heading">
                <p>
                  Estoy interesado en oportunidades de trabajo remotos o
                  presenciales, especialmente con proyectos ambiciosos o de gran
                  envergadura. Si tenés alguna pregunta en particular, no dudes
                  en consultarme.
                </p>
              </div>
              <div className="contact-hello">
                <p>Decime Hola</p>
                <a
                  className="hello-links"
                  href="https://wa.me/1160366102?text=I%27m%20interested%20in%20your%20car%20for%20sale"
                  target="_blank"
                >
                  Mi Whatsapp
                </a>
                {/* QR de Whatsapp */}
                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-50 ">
                  <img src={QRimg} alt="imagen_QR" className="flex w-50 rounded-2xl"/>
                </motion.button>

                <div className="hello-links">gmontes.dev@gmail.com</div>
              </div>
            </motion.div>
            <motion.div
              className="right-box"
              initial={{ opacity: 0, y: "50px" }}
              whileInView={verticalLeft}
            >
              <form ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="form-name" value="contact-form" />
                <div className="form-top">
                  <div className="name">
                    <label htmlFor="name">Tu Nombre</label>
                    <input
                      type="text"
                      name="user_name"
                      id="name"
                      placeholder="Introduce tu nombre"
                      required
                    />
                  </div>

                  <div className="email">
                    <label htmlFor="email">Tu Email</label>
                    <input
                      type="email"
                      name="user_email"
                      id="email"
                      placeholder="Introduce tu email"
                      required
                    />
                  </div>
                </div>

                <div className="form-mid">
                  <div className="message">
                    <label htmlFor="message">Mensaje</label>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      placeholder="Escribre tu mensaje"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="form-btn">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="hero-contact"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contacto;
