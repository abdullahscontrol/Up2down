import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Header from "./header"
// import Advertise from "../ads"
// import Topic from "../topic"
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}
export default App
