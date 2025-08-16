import {BrowserRouter, Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import BlueBackgroundWrapper from "./components/BlueBackgroundWrapper"
import Services from "./pages/Services"
import Test from "./pages/Test"

function App() {

  return (
<div className="">

<BrowserRouter>
  <BlueBackgroundWrapper>
<Routes>
<Route path="/" element={<Home/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/projects" element={<Projects/>} />
<Route path="/services" element={<Services/>} />
<Route path="/test" element={<Test/>} />
<Route path="*" element={<NotFound/>} />
</Routes>
</BlueBackgroundWrapper>
</BrowserRouter>
</div>
  )
}

export default App
