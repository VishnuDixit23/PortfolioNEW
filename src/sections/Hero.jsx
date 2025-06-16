import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { calculateSizes } from '../constants';
import { useMediaQuery } from 'react-responsive';

import HeroCamera from '../components/HeroCamera';
import CanvasLoader from '../components/Loading';
import Button from '../components/button';
import ComputersCanvas from '../components/canvas/computers';

const Hero = () => {

    
    const isSmall = useMediaQuery(
        {maxWidth: 480}
    );

    const isMobile = useMediaQuery(
        {maxWidth : 768} 
    );

    const isTablet = useMediaQuery(
        {minWidth : 768 , maxWidth : 1024}
    );

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative" id="home'>
       <div className="w-full0 mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Vishnu <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Web Developer</p>
      </div>

      <div className='w-full h-full  absolute inset-0'>
           <ComputersCanvas />
      </div>

       <div className="absolute bottom-0 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit mt-15 w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero
