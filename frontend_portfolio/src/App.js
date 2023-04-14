import './index.css';
import { About, Footer, Header, Projects, Skills } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className='app'>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>

      );
}

export default App;
