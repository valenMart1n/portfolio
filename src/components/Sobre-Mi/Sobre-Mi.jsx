import React, {useState, useRef, useEffect} from "react";
import './Sobre-Mi.css';
import Bar from '../Bar/Bar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
function SobreMi() {
        const [about, setAbout] = useState("");
        const divRef = useRef();
        useEffect(() => {
            const handleScroll = () => {
                const div = divRef.current;
                const { y } = div.getBoundingClientRect();
                console.log("Coordenadas about: " + y);
                if(y <= 500 && about != "active"){
                  setAbout("active");  
                       
                }
                
                
            }
            window.addEventListener("scroll", handleScroll);
        
            return () =>{
                window.removeEventListener("scroll", handleScroll);
            }
        }, []);
return(
    <div ref={divRef} className={`about-background ${about}`}>
           <h2>SOBRE MÍ</h2>
           <Bar className="bar"/>
           <div className="about-content">
                <div className="photo"></div>
                <div className="information">
                    <div className="fullname">Valentino Martin</div>
                    <div className="about">¡Hola! 👋 Soy Valentino Martin, estudiante de licenciatura en sistemas. Me encuentro buscando un trabajo que me permita aplicar mis habilidades y aprender de profesionales del sector. Cuento con conocimientos en Java, y en Desarrollo Web (tanto Backend como Frontend) </div>
                </div>
               
               
            </div>
          
           <div className={`skills-background ${about}`}>
                   
                
                   <div className="skills-content">
                           <div className="skills-cards">
                                <div className="skills-icons"><FontAwesomeIcon className="icons" icon={faReact}/></div>
                                <div className="skills-title">React</div>
                           </div>
                           <div className="skills-cards">
                                <div className="skills-icons" style={{animationDelay: '0.4s'}}><FontAwesomeIcon className="icons" icon={faJs}/></div>
                                <div className="skills-title">JavaScript</div>
                           </div>
                           <div className="skills-cards">
                                <div className="skills-icons" style={{animationDelay: '0.6s'}}><FontAwesomeIcon className="icons" icon={faNodeJs}/></div>
                                <div className="skills-title">Node</div>
                           </div>
                           <div className="skills-cards">
                                <div className="skills-icons" style={{animationDelay: '0.8s'}}><FontAwesomeIcon className="icons" icon={faJava}/></div>
                                <div className="skills-title">Java</div>
                           </div>
                           <div className="skills-cards">
                                <div className="skills-icons" style={{animationDelay: '1s'}}><FontAwesomeIcon className="icons" icon={faDatabase}/></div>
                                <div className="skills-title">SQL</div>
                           </div>
                              
                       </div>
                   </div>            
        </div>
);
}

export default SobreMi;