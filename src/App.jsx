import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Audio from "./components/Audio"
import Edge from "./components/Porn"
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
          <Route path="/audio" element={<Audio />} />
          <Route path="/about" element={<About />} />
          <Route path="/porn" element={<Edge />} />
        </Routes>
      </BrowserRouter>
    </div >
  )
}
export default App
