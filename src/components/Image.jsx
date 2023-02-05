import { useState } from 'react'
import Slider from './Slider'

const Image = ({ image, images }) => {
  const [modalState, setModalState] = useState(false)
  const handleImageClick = () => {
    setModalState(!modalState)
  }
  return (
    <>
      <img onClick={handleImageClick} className='relative rounded max-w-full h-[110px] object-cover align-middle' src={image} alt='image' />
      <Slider image={image} modalState={modalState} images={images} setModalState={setModalState} />
    </>
  )
}

export default Image