import React from 'react'
import Hero from './components/Hero'
import Demo from './components/Demo'


import "./App.css";
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main>
      <Navbar/>
        <div className="app">
            <Hero />
            <Demo/>
        </div>
    </main>
  )
}

export default App