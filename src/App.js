import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import {useContext} from "react";
import UserContext from "./components/ContextProvider";

import Home from "./components/pages/home";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import Skills from "./components/pages/skills";
import Projects from "./components/pages/projects";
import Footer from "./components/footer";

function App() {
  let data = [
    {
       name: "Franklin Aspero",
       age: 2000
    },
    {
      name: "Franko Aspero",
      age: 3000
   }
  ];
  return (
    <>
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <UserContext.Provider value={data}>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/Skills" element={<Skills/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
         
      </Routes>
      </UserContext.Provider>
      <br></br>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
}

export default App;
