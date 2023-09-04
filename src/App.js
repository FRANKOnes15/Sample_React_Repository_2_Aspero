import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./components/pages/home";
import ContactUs from "./components/pages/contactus";
import AboutUs from "./components/pages/aboutus";

function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<AboutUs/>}></Route>
            <Route path="/contact" element={<ContactUs/>}></Route>
      </Routes>
    </BrowserRouter>
    <h1 className="text-warning">hello world</h1>
    </>
  );
}

export default App;
