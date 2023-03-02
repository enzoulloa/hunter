import { useRef } from 'react'
import useObserver from '../hooks/useObserver'
const About = () => {
  const animateRef = useRef()
  const observer = useObserver(animateRef)

  if (observer === true) {
    animateRef.current.classList.remove('opacity-0')
    animateRef.current.classList.add('opacity-100')
  }

  return (
    <section ref={animateRef} id='about' className=' py-20 w-full px-5 mx-auto max-w-7xl transition duration-700 ease-in opacity-0 md:py-[100px] md:px-10 lg:py-[120px] lg:px-[5%]'>
      <div className=' grid justify-start justify-items-start items-center content-center grid-cols-1 gap-x-32 gap-y-20 grid-flow-row lg:grid-cols-2 lg:gap-x-[120px]'>
        <div className='lg:w-[440px]'>
          <img className=' w-full max-w-md object-cover align-middle rotate-12' src='https://assets.website-files.com/6005526df587c631c25dcda8/6009822aad8764b44f03310f_About%20Image%201.jpg' alt='AboutImage1' loading='lazy' />
          <img className=' w-full max-w-md object-cover align-middle -rotate-12' src='https://assets.website-files.com/6005526df587c631c25dcda8/6009822a840944eb78c55198_About%20Image%202.jpg' alt='AboutImage2' loading='lazy' />
        </div>
        <div className=' -order-12 flex flex-col items-start md:order-1'>
          <h2 className=' text-4xl mb-5 font-bold text-[36px] leading-[42px] md:text-[56px] md:leading-[60px]'>Why I fell in love with photography</h2>
          <p className=' mt-5 text-opacity-50 text-white leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, <span className=' text-secondary'>eros dolor interdum nulla</span>, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.<span className=' text-secondary'> Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</span> Nunc ut sem vitae risus tristique posuere.
          </p>
          <a className=' align-middle mt-5 bg-secondary py-4 px-10 flex justify-between items-center rounded text-primary_dark text-sm font-extrabold tracking-widest no-underline uppercase md:mt-10' href='#contact'> <p>Work with me</p>
            <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='30' width='30' xmlns='http://www.w3.org/2000/svg'>
              <path fill='none' d='M0 0h24v24H0V0z' /><path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default About
