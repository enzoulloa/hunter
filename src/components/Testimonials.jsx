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
    <section className=' mt-20 max-w-[800px] mx-auto text-center relative md:mt-[100px]'>
      <div className=' h-full relative w-full pb-[80px] text-center '>
        <div className=' w-full h-full whitespace-nowrap  gap-12 overflow-hidden p-4 relative left-0 right-0 z-10'>

          <div className=' relative align-top whitespace-normal text-left flex flex-col justify-start items-center w-full shrink-0 h-[235px]'>
            <p className=' mb-5 text-2xl italic text-center font-normal leading-[1.788]'>{selectedTest.paragraph}</p>
            <div className=' flex items-center'>
              <img className=' overflow-hidden w-10 h-10 mr-[10px] rounded-full object-cover' src={selectedTest.image} alt='' />
              <div>
                <p className=' mb-[2px] font-medium'>{selectedTest.name}</p>
                <p className=' text-white text-[10px] text-opacity-50 font-bold tracking-widest uppercase'>{selectedTest.company}</p>
              </div>
            </div>
          </div>

        </div>

        <button onClick={previous} className=' absolute right-[53%] top-auto bottom-0 left-auto w-20 h-8 rounded-full bg-secondary text-primary_dark m-auto cursor-pointer'>
          <span className='material-symbols-outlined'>
            navigate_before
          </span>
        </button>
        <button onClick={next} className=' absolute left-[53%] top-auto bottom-0 right-auto w-20 h-8 rounded-full bg-secondary text-primary_dark m-auto cursor-pointer  '>
          <span className='material-symbols-outlined'>
            navigate_next
          </span>
        </button>

      </div>

      <img className='absolute left-auto top-0 right-0 bottom-auto w-[60px] opacity-20' src={coma} alt='coma' />
    </section>
  )
}

export default Testimonials
