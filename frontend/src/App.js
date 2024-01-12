import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import './components/main.css'
import './components/responsive.css'


import Carrers from "./components/carrers";
import Aboutus from "./components/aboutus";
import Contactus from "./components/contactus";
import Service from "./components/service";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/service" element= {<Service/>}/>
          <Route path="/contactus" element= {<Contactus/>}/>
          <Route path="/aboutus" element= {<Aboutus/>}/>
          <Route path="/carrers" element= {<Carrers/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
