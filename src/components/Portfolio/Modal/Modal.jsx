import React from "react";
import './Modal.css';
import { Icon } from "../../Icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Modal = ({children, estado, cambiarEstado}) => {

    const childrenArray = React.Children.toArray(children);
    return(
        <>
            {estado && 
            <div className="overlay">
                <div className="modal">
                    
                    <div className="image"><img src={childrenArray[0].props.children}></img></div> 
                    
                    <div className="modal-header">
                    <h3>{childrenArray[1].props.children}</h3>   
                    <div onClick={() => cambiarEstado(false)}><Icon css="close-button" icon={faXmark}/></div>
                        <p className="project-details">{childrenArray[2].props.children}</p>
                        <div className="visit-button">Ver Sitio</div>
                    </div>
                    
                                    
                </div>
            </div>
            }
        </>
    )
   
 }

 export default Modal;

