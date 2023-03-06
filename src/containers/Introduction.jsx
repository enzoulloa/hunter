import { useRef } from 'react'
import useObserver from '../hooks/useObserver'
import img from '../assets/HunterHeroImage.webp'

const Introduction = () => {
  const animateRef = useRef()
  const observer = useObserver(animateRef)

  if (observer === true) {
    animateRef.current.classList.remove('opacity-0')
    animateRef.current.classList.add('opacity-100')
  }

  return (
    <section ref={animateRef} id='introduction' className=' pt-40 px-5 md:pt-[180px] md:px-10 flex w-full mx-auto flex-col justify-center items-start max-w-[1360px] transition duration-700 ease-in opacity-0 lg:pt-[220px] lg:px-[5%] lg:pb-[120px] relative'>
      <div className=' flex w-full flex-col items-start max-w-[600px]'>
        <h1 className='text-[40px] leading-[48px] mt-0 mb-5 font-bold md:text-[64px] md:leading-[76px] '>Hi! I'm Hunter, <br />Freelance photograper </h1>
        <p className=' mt-3 text-base font-medium leading-7 text-white opacity-50 md:text-[22px] md:leading-[1.8]'>Based in Amsterdam, I specialize in conceptual photography and love to take photos with creativity and passion. </p>
        <a className=' flex items-center mt-10 px-10 py-4 text-center align-middle rounded bg-secondary text-sm text-primary_dark tracking-widest uppercase font-extrabold' href='#works'>Explore my work
          <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='30' width='30' xmlns='http://www.w3.org/2000/svg'>
            <path fill='none' d='M0 0h24v24H0V0z' /><path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
          </svg>
        </a>
      </div>
      <img className=' w-[280px] h-[280px] mt-10 opacity-80 lg:absolute lg:left-auto lg:top-auto lg:right-0 lg:bottom-0 max-h-[90%] -z-10 md:w-[688px] md:h-[688px] lg:w-[710px] lg:h-[710px]' src={img} alt='Introduction Image' loading='eager' />
    </section>
  )
}

export default Introduction
