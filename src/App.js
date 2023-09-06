import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/pages/home";
import ContactUs from "./components/pages/contactus";
import AboutUs from "./components/pages/aboutus";

import ClassState from "./components/ClassState";
import FunctionalState from "./components/FunctionalState";
import BasicFormHandling from "./components/pages/BasicFormHandling";
function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          <Route path="/FunctionalUseState" element={<FunctionalState/>}></Route>
          <Route path="/basicFormHandling" element={<BasicFormHandling/>}></Route>
          
          {/* Using it as a component*/}
          <Route path="/classState" element={<ClassState/>}></Route>

          {/* Using it as a component*/}
          <Route path="/functionalUseState" element={<FunctionalState/>}></Route>
      </Routes>
    </BrowserRouter>
    <h1 className="text-warning">hello world</h1>
    </>
  );
}

export default App;
