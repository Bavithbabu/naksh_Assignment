import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import  Products  from './pages/Products'


function App() {
    return (
      // <div className='min-h-screen bg-gradient-to-br from-gray-100 to-blue-200p'>
      <div className='min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex justify-center items-start py-10'>
        <div className="w-full max-w-7xl px-4">
            <Products />
        </div>
      </div>
    );
}

export default App
