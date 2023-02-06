import { useRef } from 'react'
import useObserver from '../hooks/useObserver'
import Testimonials from '../components/Testimonials'

const Clients = () => {
  const animateRef = useRef()
  const observer = useObserver(animateRef)

  if (observer === true) {
    animateRef.current.classList.remove('opacity-0')
    animateRef.current.classList.add('opacity-100')
  }

  return (
    <section ref={animateRef} id='clients' className=' bg-primary_dark py-20 px-5 w-full max-w-[1360px] mx-auto transition duration-700 ease-in opacity-0 md:py-[100px] md:px-10'>
      <div className=' grid gap-5 grid-cols-2 md:grid-cols-3 md:gap-10'>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c71ecc25a227696a572_Logo%20Ipsum.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c84e2459050b1cac87b_Logo%20Ipsum%203.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c84b0ac197fa5cb6c59_Logo%20Ipsum%204.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c84a0951e8ef85b92a5_Logo%20Ipsum%202.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c84e2459050b1cac87b_Logo%20Ipsum%203.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c84b0ac197fa5cb6c59_Logo%20Ipsum%204.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c84a0951e8ef85b92a5_Logo%20Ipsum%202.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c71ecc25a227696a572_Logo%20Ipsum.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c71ecc25a227696a572_Logo%20Ipsum.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c84a0951e8ef85b92a5_Logo%20Ipsum%202.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c84e2459050b1cac87b_Logo%20Ipsum%203.svg' alt='client-logo' />
        </div>
        <div className=' h-[100px] w-full flex flex-col justify-center items-center rounded bg-primary md:h-[200px]'>
          <img className=' w-[100px] opacity-50 max-w-full align-middle border-none active:opacity-100 md:w-[140px]' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097c84b0ac197fa5cb6c59_Logo%20Ipsum%204.svg' alt='client-logo' />
        </div>
      </div>
      <Testimonials />
    </section>
  )
}

export default Clients
