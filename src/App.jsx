import './App.css'
import { useState } from 'react';
import ColorScheme from './ColorScheme';
import NavBar from './NavBar';

function App() {
  const [theme, setTheme] = useState('');

  function handleThemeChange(newTheme) {
    setTheme(newTheme);
  }

  return (
  <div className={`bg-skin-base ${theme}`}>
      <h1 className="text-3xl text-skin-base font-bold underline">
      Hello world!
    </h1>
      <NavBar theme={theme}/>
      <ColorScheme onThemeChange={handleThemeChange} />
      
  </div>  

  

  )
}

export default App
