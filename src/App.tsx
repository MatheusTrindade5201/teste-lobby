import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CheckboxWithLabel from './components/checkbox/checkbox'

function App() {

  return (
    <div className="App">
      <CheckboxWithLabel 
        labelOff='Off'
        labelOn='On'
      />
    </div>
  )
}

export default App
