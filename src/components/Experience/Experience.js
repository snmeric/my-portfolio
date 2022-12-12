import React from 'react'
import './experience.css';
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { Card, Grid, Text, Progress, Col, Button } from "@nextui-org/react";
import { RiFlutterFill } from 'react-icons/ri';
import { RiReactjsFill } from 'react-icons/ri';
import { RxFigmaLogo } from 'react-icons/rx';
import { SiPython } from 'react-icons/si';
import { SiAdobeaftereffects } from 'react-icons/si';
import { useState, useEffect } from 'react';
import { delay } from 'framer-motion';


const Experience = () => {

  // Name of the State Machine for this animation
  const STATE_MACHINE_NAME = "State Machine";
  // Name of the input used in the state machine to trigger states
  const STATE_MACHINE_INPUT_NAME = "Level";

  const { RiveComponent, rive } = useRive({
    src: "water_bar_demo.riv",
    autoplay: true,
    stateMachines: STATE_MACHINE_NAME,
    artboard: "New Artboard"
  });
  const flameRateInput = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    STATE_MACHINE_INPUT_NAME
  );

  const [flameRateValue, setFlameRateValue] = useState(0);

  // When the slider value updates, we'll trigger the state animation input value
  // to set the blend state
  useEffect(() => {
    if (flameRateInput) {

      flameRateInput.value = flameRateValue;
    }
  }, [flameRateValue, flameRateInput]);

  return (
    <section id='experience'>



      <div className='flex flex-col items-center justify-center p-6'>

        <h1 >Skills</h1>
        <Card css={{ p: "$2", mw: "600px", }}>
         
          <Card.Body className='flex flex-row items-start justify-center'>
            <div>
            <RiveComponent src="water_bar_demo.riv" className="h-72" />
            <h5 className='text-center text-zinc-600'>How good am I at which? Click to Learn</h5>
            </div>

            <div className='flex flex-col items-center py-4'><Grid.Container xs={9} sm={9} gap={2} >
              <Progress color="secondary" striped value={flameRateValue} />
            </Grid.Container></div>
            <div className='flex flex-wrap items-center justify-center gap-5'>
              <Button onClick={() => { setFlameRateValue(90) }} icon={<RiFlutterFill fill="currentColor" size={30} />} auto color="primary" flat >
                Flutter
              </Button>
              <Button onClick={() => { setFlameRateValue(60) }} icon={<RiReactjsFill fill="currentColor" size={30} />} auto color="secondary" flat >
                React JS, Native
              </Button>
              <Button onClick={() => { setFlameRateValue(70) }} icon={<RiFlutterFill fill="currentColor" size={30} />} auto color="success" flat >
                HTML, CSS, JS
              </Button>
              <Button onClick={() => { setFlameRateValue(55) }} icon={<SiPython fill="currentColor" size={30} />} auto color="warning" flat >
                Python, C#
              </Button>
              <Button onClick={() => { setFlameRateValue(40) }} icon={<RxFigmaLogo fill="currentColor" size={30} />} auto color="primary" flat >
                Figma
              </Button>
              <Button onClick={() => { setFlameRateValue(95) }} icon={<SiAdobeaftereffects fill="currentColor" size={30} />} auto color="error" flat >
                After Effect
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>




    </section>
  )
}

export default Experience