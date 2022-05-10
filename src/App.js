import React from 'react'
import Intro from './components/intro/Intro'
import About from './components/about/about'
import List from './components/List/List'
import Contact from './components/contact/Contact'
import { useEffect } from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
const App = () => {
  useEffect(()=>{
   Aos.init({easing:"ease",duration:700})
  })
  return (
    <div>
     <Intro></Intro>
     <About></About>
     <List></List>
     <Contact></Contact>
    </div>
  )
}

export default App