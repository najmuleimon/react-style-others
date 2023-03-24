import React, { useEffect, useState } from 'react'
import { Body, H1 } from './ThemePlay.style';
import { ThemeProvider } from 'styled-components';
import './ThemePlay.css';


const darkTheme = {
  body: '#1c1c1c',
  title: '#fff'
}
const lightTheme = {
  body: '#f4f4f4',
  title: '#222'
}

function ThemePlay() {

  useEffect(() => {
    document.title = 'Real Estate | Theme ';
  },[])

  const [theme, setTheme] = useState('light');
  const [isToggled, setisToggled] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const onToggle = () => {
    setisToggled(!isToggled);
    toggleTheme();
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <Body>
    <label className="switch">
      <input type="checkbox" checked={isToggled} onChange={onToggle}/>
      <span className="slider"></span>
    </label>
      <H1>This is Theme play</H1>
    </Body>
    </ThemeProvider>
  )
}

export default ThemePlay