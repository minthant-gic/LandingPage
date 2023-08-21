import './App.css'
import Nav from './components/Nav'
import BgImage from './assets/bg-initial.svg'
import Intro from './components/Intro'
import Task from './components/Task'
import Carousel from './components/Carousel'
import Progress from './components/Progress'
import Footer from './components/Footer'
import { useState } from 'react'


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div style={{ backgroundImage: `url(${BgImage})`}}>
    <Nav onMenuClick={handleMenuClick}/> 
    <Intro isMenuOpen={isMenuOpen}/>
    <Task />
    <Carousel />
    <Progress />
    <Footer />
    </div>
  )
}

export default App
