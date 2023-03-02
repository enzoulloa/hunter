import { useRef, useState } from 'react'

const Slider = ({ image, modalState, setModalState, images }) => {
  const firstIndex = images.indexOf(image) || 0
  const [selectedIndex, setSelectedIndex] = useState(firstIndex)
  const [selectedImage, setSelectedImage] = useState(image)
  const carrusel = useRef()

  const handleClick = (index) => {
    if (selectedIndex < index) {
      carrusel.current.scrollLeft = carrusel.current.scrollLeft + 120
    } else if (selectedIndex > index) {
      carrusel.current.scrollLeft = carrusel.current.scrollLeft - 120
    }
    setSelectedIndex(index)
    setSelectedImage(images[index])
  }
  const onClick = () => {
    setModalState(false)
  }

  return (
    <>
      {modalState &&
        <div className=' w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-90 flex items-center justify-center z-50'>
          <div className=' w-[86vh] shadow-xl'>
            <button onClick={onClick} className=' absolute top-3 right-1 w-7 h-7 cursor-pointer rounded text-white '>
              <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                <path fill='none' stroke='#fff' stroke-width='3' d='M3,3 L21,21 M3,21 L21,3' />
              </svg>
            </button>
            <img src={selectedImage} alt='image' loading='lazy' />
            <div ref={carrusel} className=' flex gap-4 p-4 w-full snap-mandatory overflow-x-auto scroll-p-3 absolute bottom-0 scroll-smooth'>
              {
                images.map((image, index) => {
                  return (
                    <figure onClick={() => handleClick(index)} className=' w-28 h-24 rounded overflow-hidden shadow-lg shrink-0 snap-center cursor-pointer ' key={index}>
                      <img className=' object-cover w-full h-full' src={image} alt={modalState + ' image'} />
                    </figure>
                  )
                })
              }
            </div>
          </div>
        </div>}
    </>
  )
}

export default Slider
