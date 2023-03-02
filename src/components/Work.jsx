import { useState, useRef } from 'react'
import useObserver from '../hooks/useObserver'
import Image from './Image'

const Work = ({ images, number, title, category }) => {
  const [button, setButton] = useState(false)
  const animateRef = useRef()
  const observer = useObserver(animateRef)

  if (observer === true) {
    animateRef.current.classList.remove('opacity-0')
    animateRef.current.classList.add('opacity-100')
  }

  const handleButtonClick = () => {
    setButton(!button)
  }

  return (
    <article ref={animateRef} className='w-full flex flex-col items-stretch transition duration-700 ease-in opacity-0 '>
      <div className=' flex flex-col items-start justify-between mb-5 md:items-center md:flex-row '>
        <h3 className=' text-2xl leading-[30px] font-bold'>
          <span className=' text-secondary text-lg font-bold'>{number + ' '}</span>
          {title}
        </h3>
        <div className=' mt-2 grid grid-flow-col auto-cols-auto gap-[10px]'>
          {
            category.map((element, id) => {
              return (
                <p key={id + element} className=' py-[6px] px-5 text-xs rounded-full bg-primary font-semibold text-opacity-60 text-white md:text-sm'>{element}</p>
              )
            })
         }
        </div>
      </div>
      <div className={` grid gap-5 grid-cols-2 overflow-hidden w-full will-change-[height] transition-height duration-300 ease-out lg:grid-cols-3 lg:gap-10 ${button ? 'h-[630px] md:h-[1280px] lg:h-[800px]' : ' h-[240px] '} `}>
        {
          images.map((image, id) => {
            return (
              <Image images={images} image={image} key={id} />
            )
          })
        }
      </div>
      <button onClick={handleButtonClick} className=' w-full flex mt-5 py-4 px-12 justify-between items-center self-end rounded bg-secondary text-primary text-sm uppercase font-extrabold cursor-pointer'>View full gallery
        {button
          ? <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='20' width='20' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0z' /><path d='M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z' /></svg>

          : <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='20' width='20' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0z' /><path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' /></svg>}
      </button>
    </article>
  )
}

export default Work
