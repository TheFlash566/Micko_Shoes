import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./Home";
import About from "./pages/About";
import Contact from "../src/pages/Contact";
import NoPage from "./pages/NoPage";
import Team from './pages/Team';
import Cart from './pages/Cart';
import { Store }  from './pages/Store';
import { ShoppingCartProvider } from "./context/ShoppingCartContext"




function App() {

  return (
    <ShoppingCartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path='store' element={<Store />} />
              <Route path='team' element={<Team />} />
              <Route path='cart' element={<Cart />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes> 
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
