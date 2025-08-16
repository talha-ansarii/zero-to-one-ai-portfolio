import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import BlueBackgroundWrapper from "./components/BlueBackgroundWrapper"
import Services from "./pages/Services"
import MarbleCup from "./pages/MarbleCup"

function App() {
  interface Marble {
    id: number;
    technology: string;
    color: string;
  }
    const marbles: Marble[] = [
      { id: 1, technology: "React", color: "bg-blue-500" },
      { id: 2, technology: "TypeScript", color: "bg-blue-600" },
      { id: 3, technology: "JavaScript", color: "bg-yellow-500" },
      { id: 4, technology: "Node.js", color: "bg-green-500" },
      { id: 5, technology: "Python", color: "bg-yellow-600" },
      { id: 6, technology: "GSAP", color: "bg-purple-500" },
      { id: 7, technology: "Three.js", color: "bg-red-500" },
      { id: 8, technology: "MongoDB", color: "bg-green-600" },
    ];

  return (
<div className="">

<BrowserRouter>
  <BlueBackgroundWrapper>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/services" element={<Services/>} />
<Route path="/test" element={<MarbleCup marbles={marbles} cupName="Test Cup" />} />
<Route path="*" element={<NotFound/>} />
</Routes>
</BlueBackgroundWrapper>
</BrowserRouter>
</div>
  )
}

export default App
