import React, {useState, useRef, useEffect} from "react";
import './Sobre-Mi.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJava, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
function SobreMi() {
return(
    <div className="about-background">
           <h2>SOBRE MÍ</h2>
          
           <div className="about-content">
               
               <p>Soy npmValentino Martin Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rerum dolores, laudantium cum velit modi fuga officiis, mollitia in veritatis nam, voluptatum quod rem saepe quos reprehenderit. Ad, ducimus maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati totam assumenda porro autem explicabo a nemo numquam aut tempore magnam labore veritatis ut omnis minima excepturi quam natus, maxime qui.</p>
               
               
            </div>
            <div className="skills-background">
                   
                
            <div className="skills-content">
                    <div className="skills-cards">
                            <FontAwesomeIcon className="icons" icon={faReact}/>React
                    </div>
                    <div className="skills-cards">
                            <FontAwesomeIcon className="icons" icon={faJs}/>JavaScript
                    </div>
                    <div className="skills-cards">
                            <FontAwesomeIcon className="icons" icon={faNodeJs}/>Node
                    </div>
                    <div className="skills-cards">
                            <FontAwesomeIcon className="icons" icon={faJava}/>Java
                    </div>
                    <div className="skills-cards">
                            <FontAwesomeIcon className="icons" icon={faDatabase}/>SQL
                    </div>
                       
                </div>
            </div>
        </div>
);
}

export default SobreMi;