
import './App.css';
import { Projects } from './components/Projects/Projects';
import { About } from './components/about/About';
import { DigitalClock } from './components/clock/DigitalClock';
import { Contact } from './components/contact/Contact';
import { Education } from './components/education/Education';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { ScrollUp } from './components/scrollup/ScrollUp';
import { Services } from './components/services/Services';
import { Skills } from './components/skills/Skills';

function App() {
  return (
    <div>
      <Header/>
      <main className='main'>
      <DigitalClock/>
        <Home/>
        <About/>
        <Skills/>
        <Services/>
        <Education/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
      <ScrollUp/>
    </div>
  );
}

export default App;
