import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'
import styles from '../MainComp/banner.css'

import bannerImage from '../../Resource/BannerImage/Banner3.png'
import mascot from '../../Resource/character.png'

function MainBanner(){
  const ref = useRef([])
  const [items, set] = useState([])
  const isMobile = window.innerWidth < 768; //check whether the screen is mobile or not



  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: 'perspective(600px) rotateX(0deg)',
      color: '#8fa5b6',
    },
    enter: [
      { opacity: 1, height: isMobile ? 40 : 80, innerHeight: isMobile ? 40 : 80 },
      { transform: 'perspective(600px) rotateX(180deg)', color: '#DA1710' },
      { transform: 'perspective(600px) rotateX(0deg)' },
    ],
    leave: [{ color: '#c23369' }, { innerHeight: 0 }, { opacity: 0, height: 0 }],
    update: { color: '#28b4d7' },
  })

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Bank', 'Of', 'Future']), 2000))
    // ref.current.push(setTimeout(() => set(['40 ', 'Years','History']), 5000))
    // ref.current.push(setTimeout(() => set(['Australia', 'Based', 'Financial Service']), 8000))
  }, [])

  useEffect(() => {
    reset();

    // Set up a setInterval to trigger the transition every 3 seconds
    const intervalId = setInterval(() => {
      reset();
    }, 6000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
      ref.current.forEach(clearTimeout);
    };
  }, []);

  return (

    <div>
      <div className='relative  flex justify-center items-center '>
        <img className='h-auto w-full max-h-96 rounded-lg' src={bannerImage}/>
        <div className=' absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div className=" overflow-hidden w-full  flex justify-start items-center uppercase will-change-transform will-change-opacity will-change-height whitespace-nowrap cursor-pointer mb: text-xl leading-none md:text-5xl leading-9 xl:text-6xl leading-20" style={rest} onClick={reset}>
            <animated.div className="" style={{fontWeight:'bold'}} >{item}</animated.div>
          </animated.div>
        ))}
        </div>

      </div>
    </div>
  )
}

export default MainBanner;