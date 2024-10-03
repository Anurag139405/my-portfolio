import { useState } from 'react';
import Main from './components/Main';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import BackgroundView from './Layout/BackgroundView';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const [colorTheme, setColorTheme] = useState('light');

  return (
    <BackgroundView colorTheme={colorTheme}>
      <div className={`font-poppins select-none text-black bg-white dark:bg-[#20262E] dark:text-white transition duration-500`}>
        <Navbar setColorTheme={setColorTheme} />
        <Main />
        <Projects />
        <Education />
        <Experiences />
        <Contact />
        <Footer />

      </div>
    </BackgroundView>
  );
}

export default App;
