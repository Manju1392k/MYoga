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
      <div className="Image&text w-[100vw] flex justify-around items-center my-5 flex-wrap">

        {/* Div for Image. */}
        <div className="Image">
          <img className='h-[15rem]' src="/Photos/Yoga-image.png" alt="" />
        </div>

        {/* Div for text. */}
        <div className="text w-[60vw]">

          <h1 className='text-xl poppins font-bold'>Unlock Your Potential with MYoga Academy Transforming Lives Through Fitness, Weight Loss, and Emotional Mastery for 5 Years.</h1>
          <h1 className='text-lg my-5'>At MYoga, we believe in the holistic development of mind and body. Our expert instructors guide you through yoga practices designed to improve physical fitness, aid in weight loss, and help you gain control over anger and emotions. Join our vibrant community and experience the life-changing benefits of yoga. MYoga Academy is not just about poses, it's about creating a balanced and fulfilling life.</h1>
          <button className='py-2 px-4 maincolor text-white rounded-md font-semibold inter hover:opacity-75 active:opacity-50'>Book Free Trail Class</button>

        </div>

      </div>

      {/* Div for Yoga Images. */}
      <div className="yogaimages w-[100vw] py-14 maincolor flex items-center justify-around flex-wrap">

        {/* Div for whitebox. */}
        <div className='whitebox py-3 px-4 flex flex-col bg-white rounded-sm items-center'>
          <img className='h-[8rem]' src="/Photos/Bow.png" alt="" />
          <h1 className='inter font-bold mt-2 text-xl'>BOW</h1>
        </div>
        {/* Div for whitebox. */}
        <div className='whitebox py-3 px-4 flex flex-col bg-white rounded-sm items-center'>
          <img className='h-[8rem]' src="/Photos/Child.png" alt="" />
          <h1 className='inter font-bold mt-2 text-xl'>Child</h1>
        </div>
        {/* Div for whitebox. */}
        <div className='whitebox py-3 px-4 flex flex-col bg-white rounded-sm items-center'>
          <img className='h-[8rem]' src="/Photos/Camel.png" alt="" />
          <h1 className='inter font-bold mt-2 text-xl'>Camel</h1>
        </div>

      </div>

      <h1 className='poppins text-2xl font-bold italic text-center my-2'>Our Customers Reviewers</h1>

      {/* Div for Reviews. */}
      <div className="Reviews w-[100vw] flex justify-center items-center">

        {/* Div for Reviewcard. */}
        <div className="reviewcard cardcolor w-[22rem] rounded-md py-3 px-4">
          {/* Div for stars. */}
          <div className="flex">
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
          </div>
          <h1 className='inter text-lg font-bold text-white'>~ Ravi Kumar</h1>
          <h1 className='inter text-base text-white'>MYoga has completely transformed my fitness journey. Manjunath’s expertise and compassionate teaching style have helped me achieve flexibility and strength I never thought possible. The sense of community here is unparalleled highly recommend!</h1>
        </div>

        {/* Div for Reviewcard. */}
        <div className="reviewcard cardcolor w-[22rem] rounded-md py-3 px-4 mx-3">
          {/* Div for stars. */}
          <div className="flex">
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
          </div>
          <h1 className='inter text-lg font-bold text-white'>~ S Vikram</h1>
          <h1 className='inter text-base text-white'>I have been practicing yoga for years, but Manjunath’s classes at MYoga take it to the next level. His tailored approach ensures every session is engaging and effective. I feel more balanced and energized every day thanks to MYoga.</h1>
        </div>

        {/* Div for Reviewcard. */}
        <div className="reviewcard cardcolor w-[22rem] rounded-md py-3 px-4">
          {/* Div for stars. */}
          <div className="flex">
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
          </div>
          <h1 className='inter text-lg font-bold text-white'>~ Radhika P</h1>
          <h1 className='inter text-base text-white'>Joining MYoga has been the best decision for my physical and mental well-being. Manjunath’s passion for yoga is evident in every class, and his guidance has made a significant difference in my fitness journey. I look forward to each session.</h1>
        </div>

      </div>

    </>
  )
}
