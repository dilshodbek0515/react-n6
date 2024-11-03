import './App.scss'
import Header from './components/header/Header'
import Hero from "./components/hero/Hero"
import Food from "./components/food/Food"
import About from "./components/about/About"
import Menu from "./components/menu/Menu"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Food />
      <About />
      <Menu />

      <ToastContainer />
    </>
  )
}

export default App
