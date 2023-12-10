import React, {useState, useRef, useEffect} from "react";
import trabajo1 from "./trabajo1.jpg";
import trabajo2 from "./trabajo2.jpg";
import trabajo3 from "./trabajo3.jpg";
import './Portfolio.css';
import Bar from '../Bar/Bar';

function Portfolio() {
   
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
           <div className={`projects ${projects}`}><img src={trabajo1}></img><div className="card">asdASdasd</div></div> 
           <div className={`projects ${projects}`}><img src={trabajo2}></img></div> 
           <div className={`projects ${projects}`}><img src={trabajo3}></img></div> 
           <div className={`projects ${projects}`}><img src={trabajo3}></img></div> 
            </div>
            
    </div>
);
}

export default Portfolio;