import React from 'react'
import { useState ,useEffect } from 'react'
import Navbar from './components/Navbar'


const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  return (
    <div>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}

export default App
