import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/MainContent/About'; // Import About component
import Project from './components/MainContent/Projects'; // Import Services component
import Gallery from './components/MainContent/Gallery';
import Event from './components/MainContent/Events';
import Team from './components/MainContent/Team';
import Contact from './components/MainContent/Contact';
import Footer from './components/Footer';
import Projects from './components/MainContent/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Gallery /> 
      <Event />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
