import React, {useState, useRef, useEffect} from "react";
import './Menu.css';
import logo from "./logo.jpg";
import {BrowserRouter, Link, Route} from "react-router-dom";

import BurgerButton from "./burger-button/BurgerButton";


function Menu() {
  let headerName= "";
  const [scrollY, setScrollY] = useState(0);
  const [header, setHeader] = useState("");
  const divRef = useRef();
  const handleButtonClick = (targetY) => {

    window.scrollTo({
      top: targetY,
      behavior: "smooth"
    });

    setScrollY(targetY);
  };
  useEffect(() => {
    const handleScroll = () => {
        const div = divRef.current;
        const { y } = div.getBoundingClientRect();
   
        
        if(y <= -32.5 && header != "fixed"){
          setHeader("fixed");  
               
        }else if(y >= 40.5){
          setHeader("");
        }
        
        console.log(headerName);
    }
    window.addEventListener("scroll", handleScroll);

    return () =>{
        window.removeEventListener("scroll", handleScroll);
    }
}, []);
  //
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  const handleClick = () => {
    setClicked(!clicked);
  }

    return (
      <div ref={divRef} className="background">
        <div className={`header ${header}`}>
             
         
          <div className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick}/>
         </div>
         <div className="navbar">
          <Link className="navbar-element" onClick={() => handleButtonClick(650)} to="/sobreMi">SOBRE MI</Link>
          <Link className="navbar-element" onClick={() => handleButtonClick(1270)} to="/proyectos">PROYECTOS</Link>
          <Link className="navbar-element" to="/contacto">CONTACTO</Link>
        </div>
        </div>
        <div className={`links ${clicked ?  "active" : ""} ${header}`}>
          <Link className="option" to="/sobreMi">SOBRE MI</Link>
          <Link className="option" to="/proyectos">PROYECTOS</Link>
          <Link className="option" to="/contacto">CONTACTO</Link>
          </div>
       
       </div>

    );
  }
  
  export default Menu;
  