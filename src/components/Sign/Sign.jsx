import React, {useState} from "react";
import './Sign.css';
import background from "./background.jpg";
import profile from "./perfil.png";
import { Icon } from "../Icons";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

function Sign() {
    return(
        <div className="fondo">
            <div className="flex">
                <div className="data">
                    <h1>Valentino Martin</h1>
                    <p>Desarrollador Web Full-Stack - Java</p>
                 </div>
            <div className="button-work-link">
                Ver mi trabajo
                <Icon css="arrow" icon={faArrowRight}/>
            </div>
        </div>
        {/*
     
                <img className="profile" src={profile}></img>
            
              <h2>Estudios</h2>
                    <div className="estudios-content">
                        <ul className="estudios-list">
                            <li>Bachiller con orientación en "Ciencias Naturales" Instituto Cristo Redentor</li>
                            <li>Desarrollo Web Full Stack - Digital House 2022-2023</li>
                            <li>Nivel de Ingles B2 AACI Paraná</li>
                        </ul>
    </div>
                
                
                 <div className="habilidades-content">
                    <h3>Habilidades</h3>
                 </div> */}
            
        </div>    
           
        
             
       
      
    )
}
export default Sign;