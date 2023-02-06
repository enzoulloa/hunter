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
            <button onClick={onClick} className=' absolute top-5 right-10 w-7 h-7 cursor-pointer rounded text-white '>
              <span className='material-symbols-outlined text-6xl'>
                close
              </span>
            </button>
            <img src={selectedImage} alt='' />
            <div ref={carrusel} className=' flex gap-4 p-4 w-full snap-mandatory overflow-x-auto scroll-p-3 absolute bottom-0 scroll-smooth'>
              {
                images.map((image, index) => {
                  return (
                    <figure onClick={() => handleClick(index)} className=' w-28 h-24 rounded overflow-hidden shadow-lg shrink-0 snap-center cursor-pointer ' key={index}>
                      <img className=' object-cover w-full h-full' src={image} alt='' />
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
