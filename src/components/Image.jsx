import { useState } from 'react'
import Slider from './Slider'

const Image = ({ image, images }) => {
  const [modalState, setModalState] = useState(false)
  const handleImageClick = () => {
    setModalState(!modalState)
  }
  return (
    <div className=' group'>
      <img className=' rounded max-w-full h-[110px] w-full object-cover align-middle md:h-[240px] ' src={image} alt='image' loading='lazy' />
      <div onClick={handleImageClick} className=' absolute left-0 top-0 bottom-0 right-0 z-30 flex justify-center items-center rounded cursor-pointer group-hover:bg-secondary group-hover:bg-opacity-80'>
        <button className='hidden group-hover:block px-5 py-2 rounded-full bg-primary_dark text-white text-xs font-bold uppercase '>View</button>
      </div>
      <Slider image={image} modalState={modalState} images={images} setModalState={setModalState} />
    </div>
  )
}

export default Image
