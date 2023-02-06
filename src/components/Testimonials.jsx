import { useState } from 'react'
import coma from '../assets/icons/QuoteIcon.svg'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  const people = testimonials
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedTest, setSelectedTest] = useState(people[0])

  const selectNewTest = (index, people, next = true) => {
    const condition = next ? selectedIndex < people.length - 1 : selectedIndex > 0
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : people.length - 1
    setSelectedTest(people[nextIndex])
    setSelectedIndex(nextIndex)
  }

  const previous = () => {
    selectNewTest(selectedIndex, people, false)
  }

  const next = () => {
    selectNewTest(selectedIndex, people)
  }

  return (
    <section className=' mt-20 max-w-3xl mx-auto text-center relative '>
      <div className='z-10 left-0 right-0 block h-full whitespace-nowrap relative '>
        <div className=' align-top w-full h-full whitespace-normal text-left flex gap-12 overflow-hidden p-4'>

          <div className='flex flex-col justify-start items-center w-full shrink-0 '>
            <p className=' mb-5 text-2xl italic text-center font-normal leading-[1.788]'>{selectedTest.paragraph}</p>
            <div className=' flex items-center'>
              <img className=' overflow-hidden w-10 h-10 mr-2 rounded-full object-cover' src={selectedTest.image} alt='' />
              <div>
                <p className=' mb-1 font-medium'>{selectedTest.name}</p>
                <p className=' text-white text-[10px] text-opacity-50 font-bold tracking-widest uppercase'>{selectedTest.comp}</p>
              </div>
            </div>
          </div>

        </div>
        <div className=' mx-auto w-4/5 flex justify-evenly items-center mt-10'>
          <button onClick={previous} className=' w-20 h-8 rounded-full bg-secondary text-primary_dark m-auto cursor-pointer text-4xl flex justify-center items-center'>
            <span className='material-symbols-outlined'>
              arrow_back_ios
            </span>
          </button>
          <button onClick={next} className=' w-20 h-8 rounded-full bg-secondary text-primary_dark m-auto cursor-pointer text-4xl flex justify-center items-center'>
            <span className='material-symbols-outlined'>
              navigate_next
            </span>
          </button>
        </div>
      </div>

      <img className='absolute left-auto top-0 right-0 bottom-auto w-[60px] opacity-20' src={coma} alt='coma' />
    </section>
  )
}

export default Testimonials
