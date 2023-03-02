import { useState } from 'react'
import Slider from './Slider'

const Image = ({ image, images }) => {
  const [modalState, setModalState] = useState(false)
  const handleImageClick = () => {
    setModalState(!modalState)
  }
  return (
    <>
      <img onClick={handleImageClick} className='relative rounded max-w-full h-[110px] w-full object-cover align-middle md:h-[240px]' src={image} alt='image' loading='lazy' />
      <Slider image={image} modalState={modalState} images={images} setModalState={setModalState} />
    </>
  )
}

export default Image
