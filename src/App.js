import React from 'react'

import Home from './components/common/Home'
import About from './components/common/About'

function App() {

  
  return ( 
    <>


      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="mainapp col-11">
            <Home/>
            <About/>

          </div>
        </div>
      </div>
    </>
  )
}
export default App
