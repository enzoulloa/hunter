const Form = () => {
  return (
    <form className=' px-5 py-10 rounded bg-secondary text-primary_dark flex justify-start items-center flex-col' action=''>
      <div className=' grid gap-4 grid-cols-1'>
        <div>
          <label className=' mb-1 text-[10px] font-bold tracking-widest uppercase' htmlFor='name'>First name</label>
          <input className=' h-[50px] p-4 border-[1px] border-white w-full text-sm align-middle bg-white hover:outline-none' id='name' type='text' />
        </div>
        <div>
          <label className=' mb-1 text-[10px] font-bold tracking-widest uppercase' htmlFor='company'>Company</label>
          <input className=' h-[50px] p-4 border-[1px] border-white w-full text-sm align-middle bg-white hover:outline-none' id='company' type='text' />
        </div>
        <div>
          <label className=' mb-1 text-[10px] font-bold tracking-widest uppercase' htmlFor='mail'>Mail</label>
          <input className=' h-[50px] p-4 border-[1px] border-white w-full text-sm align-middle bg-white hover:outline-none' id='mail' type='mail' />
        </div>
        <div>
          <label className=' mb-1 text-[10px] font-bold tracking-widest uppercase' htmlFor='phone'>Phone</label>
          <input className=' h-[50px] p-4 border-[1px] border-white w-full text-sm align-middle bg-white hover:outline-none' id='phone' type='tel' />
        </div>
      </div>
      <div className=' my-5 self-start'>
        <p className=' mb-1 text-[10px] font-bold tracking-widest uppercase'>I would like to</p>
        <label className=' text-sm font-normal block cursor-pointer'>
          <input className=' accent-black' type='checkbox' />Hire you for a project
        </label>
        <label className=' text-sm font-normal block cursor-pointer'>
          <input className=' accent-black' type='checkbox' />Ask a question
        </label>
        <label className=' text-sm font-normal block cursor-pointer'>
          <input className=' accent-black' type='checkbox' />Talk partnership
        </label>
      </div>
      <div className=' self-start w-full'>
        <p className='mb-1 text-[10px] font-bold tracking-widest uppercase'>Message</p>
        <textarea className=' caret-primary_dark text-sm leading-snug w-full h-auto min-h-[160px] p-4 align-middle bg-white hover:outline-none resize-none' name='' id='' />
      </div>
      <input className=' mt-10 py-4 px-10 bg-primary_dark text-white font-bold cursor-pointer rounded self-end' type='submit' value='Submit' />
    </form>
  )
}

export default Form
