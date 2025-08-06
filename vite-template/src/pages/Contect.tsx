function contect() {
  return (
    <div id='contact_section' className='bg-slate-50 dark:bg-black w-full h-auto flex justify-center items-center py-10 px-3 lg:py-28'>
        <div className='w-full lg:w-[80%] mx-auto h-auto rounded-2xl bg-white dark:bg-neutral-950 shadow-[0_3px_10px_rgb(0,0,0,0.2)] grid grid-cols-1 lg:grid-cols-2 gap-2'>
            <div className='flex justify-center'>
                <div className='py-8 px-8 lg:px-20 lg:py-20 space-y-4'>
                    <h2 className='text-2xl poppins-bold'>Contect Us</h2>
                    <h1 className='text-4xl lg:text-6xl poppins-medium'>Elevate Your Online Presence</h1>
                    <p className='lg:px-10 lg:w-2/3 poppins-regular py-2 text-xl'>From creative design to seamless execution, we combine innovation and experience to bring your vision to life.</p>
                </div>
            </div>
            <div className='flex justify-center items-center p-4 lg:p-6 '>
                <div className='bg-gray-100 dark:bg-neutral-900 w-full h-[400px] rounded-2xl shadow-sm py-5 px-5'>
                    <form className='space-y-2'>
                        <div className=''>
                            <label className='poppins-medium text-md'>Your Email</label>
                            <input type="email" required placeholder='Enter Email:- ' className='my-2 dark:bg-neutral-800 bg-white outline-none w-full py-4 rounded-lg px-2 py-2' />
                        </div>
                        <div className=''>
                            <label className='poppins-medium text-md'>Message</label>
                            <textarea placeholder='Your thoughts:- ' className='my-2 resize-none outline-none w-full h-[120px] dark:bg-neutral-800 bg-white rounded-lg px-2 py-2'></textarea>
                        </div>
                        <div className='flex justify-center items-center '>
                            <button className='poppins-bold cursor-pointer py-4 bg-neutral-950 dark:bg-white dark:text-black w-full rounded-lg text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contect