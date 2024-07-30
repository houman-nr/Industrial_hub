import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MapComponent from './MapComponent'


function App() {
  return(
    <div>
      <h1>OpenStreetMap With Django and React</h1>
      <MapComponent />
    </div>
  );
}

export default App
