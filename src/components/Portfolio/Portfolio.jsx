import React, {useState, useRef, useEffect} from "react";
import './Portfolio.css';
import Bar from '../Bar/Bar';
import Modal from "./Modal/Modal";
import { useFetch } from "./useFetch";



function Portfolio() {
    let result;
    const {data, loading} = useFetch("https://api-portfolio-18zj.onrender.com/");

    const [estadoModal, cambiarEstadoModal] = useState(false); 

    const [projects, setProjects] = useState("");
    const divRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current;
            const { y } = div.getBoundingClientRect();
            console.log("Coordenadas project: " + y);
            if(y <= 650.5 && projects != "active"){
              setProjects("active");  
                   
            }
            
            
        }
        window.addEventListener("scroll", handleScroll);
    
        return () =>{
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
   
return(

    
    <div ref={divRef} className={`projects-background ${projects}`}>
           <h2>PROYECTOS</h2>
           <Bar className="bar"/>
           <div className="projects-content">
           <div className={`projects ${projects}`}><div className="images" id="imagen1"></div><span className="text">Ver Más</span><div onClick={() => cambiarEstadoModal(!estadoModal)}className="botton">Ver Más</div></div> 
           <div className={`projects ${projects}`}><div className="images" id="imagen2"></div><span className="text">asdasd</span><div onClick={() => cambiarEstadoModal(!estadoModal)} className="botton">Ver Más</div></div> 
           <div className={`projects ${projects}`}><div className="images" id="imagen3"></div><span className="text">asdasd</span><div  onClick={() => cambiarEstadoModal(!estadoModal)}className="botton">Ver Más</div></div> 
           <div className={`projects ${projects}`}><div className="images" id="imagen4"></div><span className="text">asdasd</span><div  onClick={() => cambiarEstadoModal(!estadoModal)} className="botton">Ver Más</div>
           
           </div> 
            </div>

           
             
          
            <Modal
                estado={estadoModal}
                cambiarEstado={cambiarEstadoModal}>
                {!loading && console.log("Loaded " + data.projects[0].title)}
                
                
                <p>Ventana</p>
                <h3>OLe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nulla! Provident, impedit tempore veritatis, ab accusamus asperiores nihil nesciunt quas reprehenderit iste ullam tenetur blanditiis beatae ratione recusandae laboriosam eos.</p>
               
            </Modal>
           
    </div>
    
);
}

export default Portfolio;