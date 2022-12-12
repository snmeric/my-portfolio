import logo from './logo.svg';
import { useRef } from 'react';
import React, { useState } from 'react'
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import './index.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import { createTheme, NextUIProvider, Text,Spacer } from '@nextui-org/react';
import ThemeButton from './components/DarkLightTheme/ThemeButton';
import './App.css'
import AnimatedPage from './components/AnimatedPage';



function App(props) {

  const [themeSwitch, setSwitch] = useState("lighttheme");
  const STATE_MACHINE_NAME = "State Machine 1";
  const TOGGLE_NAME = "ON, Hover";

  const { RiveComponent, rive } = useRive({
    src: "fire_button.riv",
    stateMachines: [STATE_MACHINE_NAME],
    autoplay: true,
    artboard: "New Artboard"
  });
  const handleThemeSwitch = () => {
    themeSwitch === "lighttheme" ? setSwitch("darktheme") : setSwitch("lighttheme");
  };

  const onClickInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    TOGGLE_NAME
  );

  const darktheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
      colors: {
        background: '#121316',
        text: 'black',
        text: "white",
        // you can also create your own color



        // ...  more colors
      },
      space: {},
      fonts: {
        sans: " 'Ubuntu', sans-serif;",
        mono: "Monaco"
      }
    }
  })
  const lighttheme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
      colors: {
        background: '#e3eaff',
        text: 'black',
        // you can also create your own color



        // ...  more colors
      },
      space: {},
      fonts: {
        sans: " 'Ubuntu', sans-serif;",
        mono: "Monaco"
      }
    }
  })
  return (
    <NextUIProvider theme={themeSwitch === "lighttheme" ? lighttheme : darktheme}>

     

<div className='fire-rive p-1 relative z-50 bottom-8 -right-2 w-32 h-48 flex justify-center items-center '>

<div className='absolute text-center max-w-16 m-0'>
  <Spacer y={1} />
  <Text
    h1
    className='theme-text'

    size={16}
    color="#858585"
    weight="semibold"
  >
    Click For {themeSwitch==="lighttheme"?"Dark":"Light"} Theme
  </Text>

</div>
<div className='w-24 h-36 top-0 absolute'>

</div>

<RiveComponent src="fire_button.riv"
  onClick={() => {
    handleThemeSwitch();
    onClickInput.value = !onClickInput.value;
  }}
/>

</div>

      
      <Header />
      <Navbar />

      <About />
      <Experience />
      <Contact />
    </NextUIProvider>


  );
}

export default App;
