import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/pages/home";
import ContactUs from "./components/pages/contactus";
import AboutUs from "./components/pages/aboutus";
import BasicFormHandling from "./components/pages/BasicFormHandling";

import ClassState from "./components/ClassState";
import FunctionalState from "./components/FunctionalState";
import FormGetter from "./components/pages/FormGetter";
import Timer from "./components/pages/Timer";
import {useContext} from "react";
import UserContext from "./components/ContextProvider";
import UseRefTimer from "./components/pages/UseRefTimer";
import StopWatch from "./components/pages/StopWatch";
import UseReducerIncrementDecrement from "./components/pages/UseReducerIncrementDecrement";


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
          <Route path="/about" element={<AboutUs/>}></Route>
          <Route path="/contact" element={<ContactUs/>}></Route>
          <Route path="/FunctionalUseState" element={<FunctionalState/>}></Route>
          <Route path="/basicFormHandling" element={<BasicFormHandling/>}></Route>
          <Route path="/FormHandlingUsingTwoComponents" element={<FormGetter/>}></Route>
          <Route path="/Timer" element={<Timer/>}></Route>
          <Route path="/UseRefTimer" element={<UseRefTimer></UseRefTimer>}></Route>
          <Route path="/UseRefUseStateStopWatch" element={<StopWatch/>}></Route>
          <Route path="/UseReducerIncrementDecrement" element={<UseReducerIncrementDecrement/>}></Route>
          
          {/* Using it as a component*/}
          <Route path="/classState" element={<ClassState/>}></Route>

          {/* Using it as a component*/}
          <Route path="/functionalUseState" element={<FunctionalState/>}></Route>
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
