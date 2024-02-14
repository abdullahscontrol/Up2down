import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
const someData = [
    {
        name: "abdullah",
        age: 19,
        occupation: "frontend Developer"
    }
];
function Header() {
    return (
        <div>
            <div className="koyona">
                <h1>Up2down<span id="">!</span></h1>
            </div>
            <div>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/About" element={<About />} />
                    </Routes>
                </BrowserRouter>
            </div >
        </div>

    )
}
export default Header;




