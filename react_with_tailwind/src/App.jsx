import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        

         <h1 className="text-purple-700 font-bold text-3xl">
          Ovili Ekene
         </h1>
         <h2 className="text-green-600 font-semibold text-xl">
          Software Developer
         </h2>
         <p className="text-gray-700 font-medium"> 
          i am a sofware developer(in training) who enjoys exploring and building web interfaces
          i am currently learning about tailwind, and when am not coding am creating amazing outfits or helping busy CEO's
         </p>
        
      </div>
      
   
  )
}

export default App
