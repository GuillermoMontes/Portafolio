import { Link } from "react-router-dom";
import { FiFolder, FiGithub } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";

const CardProyectos = ({ dataP }) => {
  return (
    <>
      <div  className="work-link-group">
        <div className="works-card">
          <div className="works-container">
            <div className="top-work">
              <FiFolder className="work-folder" />
              <div className="right">
                <Link className="work-git" to={dataP.gitlink} target="_blank">
                  <FiGithub />
                </Link>
                <Link className="work-link" to={dataP.sitio} target="_blank">
                  <IoOpenOutline />
                </Link>
              </div>
            </div>

            <div className="mid-work">
              <p className="work-title ">{dataP.titulo}</p>
              <p className="work-desc ">{dataP.desc}</p>
            </div>

            <div className="bottom-work ">
              {dataP.tec.map((e, index) => {
                return <small key={index}>{e}</small>;
              })}
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default CardProyectos;
