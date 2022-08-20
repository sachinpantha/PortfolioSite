import React from 'react'
import Intro from './components/intro/Intro'
import Loader from "./components/Loader/Loader";
import About from './components/about/about'
import Contact from './components/contact/Contact'
import { useEffect,useState } from 'react'
import "aos/dist/aos.css"
import Aos from 'aos'
const App = () => {
 
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(()=>{
   Aos.init({easing:"ease",duration:700})
  })
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });
  
  
  if (isLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div>
     <Intro></Intro>
     <About></About>
     <Contact></Contact>
    </div>
  )
}

export default App