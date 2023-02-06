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
      <div className=' flex flex-col items-start justify-between mb-5'>
        <h3 className=' text-2xl leading-[30px] font-bold'>
          <span className=' text-secondary text-lg font-bold'>{number + ' '}</span>
          {title}
        </h3>
        <div className=' mt-2 grid grid-flow-col auto-cols-auto gap-[10px]'>
          {
            category.map((element, id) => {
              return (
                <p key={id + element} className=' py-[6px] px-5 text-xs rounded-full bg-primary font-semibold text-opacity-50 text-white'>{element}</p>
              )
            })
         }
        </div>
      </div>
      <div className={` grid gap-5 grid-cols-2 overflow-hidden w-full will-change-[height] transition-height duration-300 ease-out ${button ? 'h-[630px]' : ' h-[240px] '} `}>
        {
          images.map((image, id) => {
            return (
              <Image images={images} image={image} key={id} />
            )
          })
        }
      </div>
      <button onClick={handleButtonClick} className=' flex mt-5 py-4 px-12 justify-between items-center self-end rounded bg-secondary text-primary text-sm tracking-widest uppercase font-extrabold cursor-pointer'>View full gallery
        {button
          ? <span className='material-symbols-outlined'>expand_more</span>

          : <span className='material-symbols-outlined'>expand_less</span>}
      </button>
    </article>
  )
}

export default Work
