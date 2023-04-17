import "./index.css";
import { About, Footer, Header, Projects, Skills } from "./container";
import { Navbar } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Header />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
