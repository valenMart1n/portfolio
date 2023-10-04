
import './App.css';
import Menu from "./components/Menu/Menu";
import Sign from './components/Sign/Sign';

import SobreMi from './components/Sobre-Mi/Sobre-Mi';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
function App() {
  return (
    <div class="main-background">
      
      <Sign />
      <Menu />
      <SobreMi />
     
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
