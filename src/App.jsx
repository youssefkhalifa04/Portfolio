import {About} from "./components/aboutSection/About"
import { Navbar } from "./components/navbar/navbar"
import { Hero } from "./components/hero/Hero"
import { Myservice } from "./components/myservice/Myservice"
function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Myservice/>
    </>
  )
}

export default App
