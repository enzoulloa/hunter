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
    <section className=' mt-20 max-w-[800px] mx-auto text-center relative md:mt-[100px] md:h-[346px]'>
      <div className=' h-full relative w-full pb-[80px] text-center '>
        <div className=' w-full h-full whitespace-nowrap  gap-12 overflow-hidden p-4 relative left-0 right-0 z-10'>

          <div className=' relative align-top whitespace-normal text-left flex flex-col justify-start items-center w-full shrink-0 '>
            <p className=' mb-5 text-2xl italic text-center font-normal leading-[1.788]'>{selectedTest.paragraph}</p>
            <div className=' flex items-center'>
              <img className=' overflow-hidden w-10 h-10 mr-[10px] rounded-full object-cover' src={selectedTest.image} alt={selectedTest.name} loading='lazy' />
              <div className=''>
                <p className=' mb-[2px] font-medium'>{selectedTest.name}</p>
                <p className=' text-white text-[10px] text-opacity-50 font-bold tracking-widest uppercase'>{selectedTest.company}</p>
              </div>
            </div>
          </div>

        </div>

        <button onClick={previous} className=' absolute right-[53%] top-auto bottom-0 left-auto w-20 h-8 rounded-full bg-secondary text-primary_dark m-auto cursor-pointer flex items-center justify-center' id='previous' aria-label='previous'>
          <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='30' width='30' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0z' /><path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z' /></svg>
        </button>
        <button onClick={next} className=' absolute left-[53%] top-auto bottom-0 right-auto w-20 h-8 rounded-full bg-secondary text-primary_dark m-auto cursor-pointer flex items-center justify-center ' id='next' aria-label='next'>
          <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 24 24' height='30' width='30' xmlns='http://www.w3.org/2000/svg'><path fill='none' d='M0 0h24v24H0z' /><path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' /></svg>
        </button>

      </div>

      <img className='absolute left-auto top-0 right-0 bottom-auto w-[60px] opacity-20' src={coma} alt='coma' loading='lazy' />
    </section>
  )
}

export default Testimonials
