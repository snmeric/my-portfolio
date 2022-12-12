import React from 'react'
import './about.css';
import { Card, Grid, Text, Link, Button } from "@nextui-org/react";
import { Progress } from "@nextui-org/react";
import Spline from '@splinetool/react-spline';
import AnimatedPage from '../AnimatedPage';

const About = () => {
  return (
   
      <section id='about'>
        <div className='flex flex-col items-center relative justify-start p-6'>
          <h1 className='absolute'>About</h1>
          <div className=' flex flex-col justify-center items-center h-screen'>
            <div className='flex items-center justify-center h-screen w-screen absolute'><Spline scene="https://prod.spline.design/WdJLDbT9brhEOxwd/scene.splinecode" /></div>

            <Card isHoverable css={{ p: "$6", mw: "400px", }} className="absolute">
              <Card.Header>
                <img
                  alt="github logo"
                  src="https://avatars.githubusercontent.com/u/82456006?s=200&v=4"
                  width="34px"
                  height="34px"
                />
                <Grid.Container css={{ pl: "$6" }}>
                  <Grid xs={12}>
                    <Text h4 css={{ lineHeight: "$xs" }}>
                      Meriç Şen
                    </Text>
                  </Grid>
                  <Grid xs={12}>
                    <Text css={{ color: "$accents8" }}>Computer Engineer</Text>
                  </Grid>
                </Grid.Container>
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  I am a 4th year Computer Engineering student at Selcuk University. I have more than <Text b>3 years of experience in Mobile Programming. </Text>  I am developing myself in the field of <Text b> mobile, web and blockchain.</Text> I like to work, learn and develop myself.
                  I am a person who fulfills responsibilities. I have a productive personality.
                </Text>
              </Card.Body>
              <Card.Footer className='gap-10 flex items-center justify-center'>



                <Link target="_blank"
                  href="https://github.com/snmeric" isExternal>
                  Visit My GitHub
                </Link>




                <Link target="_blank"
                  href="https://www.linkedin.com/in/meri%C3%A7-%C5%9Fen-827488258/" isExternal>
                  Visit My Linkedin
                </Link>


              </Card.Footer>
            </Card>
            <div className='flex flex-row items-center justify-center gap-10 p-8 w-full'>
              <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
                <Card.Body>
                  <Text className='text-center text-lg'>Sentius Yazılım</Text>
                  <Text className='text-center text-lg'>2020-2021</Text>
                </Card.Body>
              </Card>
              <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
                <Card.Body>
                  <Text className='text-center text-lg'>Entegre Yazılım</Text>
                  <Text className='text-center text-lg'>2021-2022</Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>



      </section>
   
  )
}

export default About