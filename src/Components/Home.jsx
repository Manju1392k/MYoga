import React from 'react'
import '../index.css'

export default function Home() {
  return (
    <>

      {/* Div for Navbar. */}
      <div className="Navbar w-[100vw] py-4 maincolor flex items-center justify-around flex-wrap">

        {/* Div for logo. */}
        <div className="logo">
          <img className='h-[2rem]' src="/Photos/MYoga.png" alt="" />
        </div>

        {/* Div for links. */}
        <div className="links text-white font-semibold dmsans text-sm">
          <a href='#' className='ml-2'>Prices</a>
          <a href='#' className='ml-2'>Blogs</a>
          <a href='#' className='ml-2'>Online Classes</a>
          <a href='#' className='ml-2'>Instructor</a>
        </div>

        {/* Div for buttons. */}
        <div className="btns">
          <button type='button' className='bg-white text-black border-none px-4 py-1 rounded-md dmsans'>Login</button>
          <button type='button' className='maincolor px-4 py-1 border-2 border-white text-white rounded-md dmsans ml-4'>Sigup</button>
        </div>

      </div>

      {/* Div for Image & text. */}
      <div className="Image&text w-[100vw] flex justify-around items-center mt-5 flex-wrap">

        {/* Div for Image. */}
        <div className="Image">
          <img className='h-[15rem]' src="/Photos/Yoga-image.png" alt="" />
        </div>

        {/* Div for text. */}
        <div className="text w-[60vw]">

          <h1 className='text-xl poppins font-bold'>Unlock Your Potential with MYoga Academy Transforming Lives Through Fitness, Weight Loss, and Emotional Mastery for 5 Years.</h1>
          <h1 className='text-lg my-5'>At MYoga, we believe in the holistic development of mind and body. Our expert instructors guide you through yoga practices designed to improve physical fitness, aid in weight loss, and help you gain control over anger and emotions. Join our vibrant community and experience the life-changing benefits of yoga. MYoga Academy is not just about poses, it's about creating a balanced and fulfilling life.</h1>

          <button className='py-2 px-4 maincolor text-white rounded-md font-semibold'>Book Free Trail Class</button>

        </div>

      </div>

    </>
  )
}
