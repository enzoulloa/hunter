const About = () => {
  return (
    <section className=' py-20 w-full px-5 mx-auto max-w-7xl '>
      <div className=' grid justify-start justify-items-start items-center content-center grid-cols-1 gap-x-32 gap-y-20 grid-flow-row'>
        <div>
          <img className=' w-full max-w-md object-cover align-middle rotate-12' src='https://assets.website-files.com/6005526df587c631c25dcda8/6009822aad8764b44f03310f_About%20Image%201.jpg' alt='' />
          <img className=' w-full max-w-md object-cover align-middle -rotate-12' src='https://assets.website-files.com/6005526df587c631c25dcda8/6009822a840944eb78c55198_About%20Image%202.jpg' alt='' />
        </div>
        <div className=' -order-12 flex flex-col items-start'>
          <h2 className=' text-4xl mb-5 font-bold'>Why I fell in love with photography</h2>
          <p className=' mt-5 text-opacity-50 text-white leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, <span className=' text-secondary'>eros dolor interdum nulla</span>, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.<span className=' text-secondary'> Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</span> Nunc ut sem vitae risus tristique posuere.
          </p>
          <a className=' mt-5 bg-secondary py-5 px-10 flex justify-between items-center rounded text-primary_dark text-sm font-extrabold tracking-widest no-underline uppercase' href=''> <p>Work with me</p>
            <span>Icon</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default About
