import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./Home";
import About from "./pages/About";
import Contact from "../src/pages/Contact";
import NoPage from "./pages/NoPage";
import Shop from './pages/Shop';
import Team from './pages/Team';
import Cart from './pages/Cart';


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path='shop' element={<Shop />} />
            <Route path='team' element={<Team />} />
            <Route path='cart' element={<Cart />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes> 
    </BrowserRouter>
  )
}

export default App
