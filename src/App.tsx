import './styles/App.css'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Contact from './components/Contact'
import Navbar from './components/ui/navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Services/>
      <Contact/>
    </>
  )
}

export default App
