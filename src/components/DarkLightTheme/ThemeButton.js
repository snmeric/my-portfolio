import React,{useState} from 'react'
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import themebutton from "./themebutton.css"

const ThemeButton = () => {
    const [themeSwitch, setSwitch]=useState("lighttheme");
    const STATE_MACHINE_NAME = "State Machine 1";
    const TOGGLE_NAME = "ON, Hover";

    const { RiveComponent, rive } = useRive({
        src: "fire_button.riv",
        stateMachines: [STATE_MACHINE_NAME],
        autoplay: true,
        artboard: "New Artboard"
    });
    const handleThemeSwitch=()=>{
        setSwitch(themeSwitch==="lighttheme"?"darktheme":"lighttheme");
    };

    const onClickInput = useStateMachineInput(
        rive,
        STATE_MACHINE_NAME,
        TOGGLE_NAME
    );
    return (
        <div className='fixed z-50 bottom-24 -right-12 w-52 h-52 flex justify-center items-center '>
          
            <RiveComponent src="fire_button.riv" 
                onClick={() => {
                    handleThemeSwitch();
                    onClickInput.value = !onClickInput.value;
                }}
                
            />
            
        </div>
    )
}

export default ThemeButton