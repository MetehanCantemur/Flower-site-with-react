import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./companents/Home";
import { Navbar } from "./companents/Navbar";
import { Flowers } from "./companents/Flowers";
import { About } from "./companents/About";
import { Contact } from "./companents/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/flowers" exact element={<Flowers />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
