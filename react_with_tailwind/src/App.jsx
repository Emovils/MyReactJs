import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-100 p-10 m-4 border border-gray-400 rounded-lg">
      <div className="flex items-center justify-between bg-white p-4 mb-6 border-b border-gray-300">
        

         <h1 className="text-purple-700 font-bold text-3xl capatilize text-center">
          Ovili Ekene
          
         </h1>
         <h2 className="text-green-600 font-semibold text-xl">
          Software Developer
         </h2>
         

         <p className="text-gray-700 font-medium font-mono text-justify"> 
          i am a sofware developer(in training) who enjoys exploring and building web interfaces
          i am currently learning about tailwind, and when am not coding am creating amazing outfits or helping busy CEO's
         </p>
         
        
      </div>
      </div>
      
   
  )
}

export default App
