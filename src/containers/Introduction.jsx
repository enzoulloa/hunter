import { useRef } from 'react'
import useObserver from '../hooks/useObserver'
import img from '../assets/HunterHeroImage.png'

const Introduction = () => {
  const animateRef = useRef()
  const observer = useObserver(animateRef)

  if (observer === true) {
    animateRef.current.classList.remove('opacity-0')
    animateRef.current.classList.add('opacity-100')
  }

  return (
    <section ref={animateRef} id='introduction' className=' pt-40 px-5 md:pt-[180px] md:px-10 flex w-full mx-auto flex-col justify-center items-start max-w-7xl transition duration-700 ease-in opacity-0 '>
      <div className=' flex w-full flex-col items-start max-w-[600px]'>
        <h1 className='text-[40px] leading-[48px] mt-0 mb-5 font-bold md:text-[64px] md:leading-[76px] '>Hi! I'm Hunter, <br />Freelance photograper </h1>
        <p className=' mt-3 text-base font-medium leading-7 text-white opacity-50 md:text-[22px] md:leading-[1.8]'>Based in Amsterdam, I specialize in conceptual photography and love to take photos with creativity and passion. </p>
        <a className=' flex items-center mt-10 px-10 py-4 text-center align-middle rounded bg-secondary text-sm text-primary_dark tracking-widest uppercase font-extrabold' href='#works'>Explore my work
          <span className='material-symbols-outlined '>
            keyboard_arrow_right
          </span>
        </a>
      </div>
      <img className=' mt-10 opacity-80 ' src={img} alt='' />
    </section>
  )
}

export default Introduction
