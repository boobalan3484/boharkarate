import { React, useEffect } from 'react'

import AOS from 'aos'
import "aos/dist/aos.css"

import PageRoutes from './Utils/PageRoutes'



function App() {

  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 800,
    })
  }, [])

  return (
    <div className='App'>
      <PageRoutes />
    </div>
  );
}

export default App;