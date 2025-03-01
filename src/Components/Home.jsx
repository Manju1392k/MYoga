import React from 'react'
import '../index.css'

export default function Home() {
  return (
    <>

      {/* Div for Navbar. */}
      <div className="Navbar w-[100vw] py-4 maincolor flex items-center justify-around flex-wrap sm:hidden lg:hidden">

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

      {/* Mobile Navbar. */}
      <div className="MobileNavbar hidden sm:flex lg:flex w-[100vw] maincolor justify-around items-center py-4">

        {/* Div for logo. */}
        <div className="logo">
        <img className='h-[2rem]' src="/Photos/MYoga.png" alt="" />
        </div>

        {/* Div for Menu. */}
        <div className="menu">
        <img className='h-[2.3rem]' src="/Photos/Menu.png" alt="" />
        </div>

      </div>

      {/* Div for Image & text. */}
      <div className="Image&text w-[100vw] flex justify-around items-center my-5 flex-wrap">

        {/* Div for Image. */}
        <div className="Image">
          <img className='h-[15rem]' src="/Photos/Yoga-image.png" alt="" />
        </div>

        {/* Div for text. */}
        <div className="text w-[60vw] sm:w-[95vw] sm:mt-4 lg:w-[95vw] lg:mt-4">

          <h1 className='text-xl poppins font-bold'>Unlock Your Potential with MYoga Academy Transforming Lives Through Fitness, Weight Loss, and Emotional Mastery for 5 Years.</h1>
          <h1 className='text-lg my-5'>At MYoga, we believe in the holistic development of mind and body. Our expert instructors guide you through yoga practices designed to improve physical fitness, aid in weight loss, and help you gain control over anger and emotions. Join our vibrant community and experience the life-changing benefits of yoga. MYoga Academy is not just about poses, it's about creating a balanced and fulfilling life.</h1>
          <button className='py-2 px-4 maincolor text-white rounded-md font-semibold inter hover:opacity-75 active:opacity-50'>Book Free Trail Class</button>

        </div>

      </div>

      {/* Div for Yoga Images. */}
      <div className="yogaimages w-[100vw] py-14 maincolor flex items-center justify-around flex-wrap sm:py-10 lg:py-10">

        {/* Div for whitebox. */}
        <div className='whitebox py-3 px-4 flex flex-col bg-white rounded-md items-center'>
          <img className='h-[8rem] sm:h-[12rem] lg:h-[12rem]' src="/Photos/Bow.png" alt="" />
          <h1 className='inter font-bold mt-2 text-xl'>BOW</h1>
        </div>
        {/* Div for whitebox. */}
        <div className='whitebox py-3 px-4 flex flex-col bg-white rounded-md items-center sm:my-16 lg:my-16'>
          <img className='h-[8rem] sm:h-[12rem] lg:h-[12rem]' src="/Photos/Child.png" alt="" />
          <h1 className='inter font-bold mt-2 text-xl'>Child</h1>
        </div>
        {/* Div for whitebox. */}
        <div className='whitebox py-3 px-4 flex flex-col bg-white rounded-md items-center'>
          <img className='h-[8rem] sm:h-[12rem] lg:h-[12rem]' src="/Photos/Camel.png" alt="" />
          <h1 className='inter font-bold mt-2 text-xl'>Camel</h1>
        </div>

      </div>

      <h1 className='poppins text-2xl font-bold italic text-center my-2'>Our Customers Reviewers</h1>

      {/* Div for Reviews. */}
      <div className="Reviews w-[100vw] flex justify-center items-center mb-4 flex-wrap">

        {/* Div for Reviewcard. */}
        <div className="reviewcard cardcolor w-[18rem] rounded-md py-3 px-4 sm:w-[95vw] lg:w-[95vw]">
          {/* Div for stars. */}
          <div className="flex">
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
          </div>
          <h1 className='inter text-base font-bold text-white'>~ Ravi Kumar</h1>
          <h1 className='inter text-xs text-white'>MYoga has completely transformed my fitness journey. Manjunath’s expertise and compassionate teaching style have helped me achieve flexibility and strength I never thought possible. The sense of community here is unparalleled highly recommend!</h1>
        </div>

        {/* Div for Reviewcard. */}
        <div className="reviewcard cardcolor w-[18rem] rounded-md py-3 px-4 mx-3 sm:w-[95vw] lg:w-[95vw] sm:my-3 lg:my-3">
          {/* Div for stars. */}
          <div className="flex">
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
          </div>
          <h1 className='inter text-base font-bold text-white'>~ S Vikram</h1>
          <h1 className='inter text-xs text-white'>I have been practicing yoga for years, but Manjunath’s classes at MYoga take it to the next level. His tailored approach ensures every session is engaging and effective. I feel more balanced and energized every day thanks to MYoga.</h1>
        </div>

        {/* Div for Reviewcard. */}
        <div className="reviewcard cardcolor w-[18rem] rounded-md py-3 px-4 sm:w-[95vw] lg:w-[95vw]">
          {/* Div for stars. */}
          <div className="flex">
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
            <img className='h-[1.2rem] ml-1' src="/Photos/Star.png" alt="" />
          </div>
          <h1 className='inter text-base font-bold text-white'>~ Radhika P</h1>
          <h1 className='inter text-xs text-white'>Joining MYoga has been the best decision for my physical and mental well-being. Manjunath’s passion for yoga is evident in every class, and his guidance has made a significant difference in my fitness journey. I look forward to each session.</h1>
        </div>

      </div>

      {/* Div for Founder. */}
      <div className="Founder flex w-[100vw] justify-around items-center maincolor py-6">

        {/* Div for FounderInformation */}
        <div className="FounderInformation flex justify-around items-center bg-white rounded-lg w-[55rem] flex-wrap sm:w-[85vw] lg:w-[85vw] sm:p-4 lg:p-4">

          {/* Div for Image. */}
          <div className='Image'>
            <img className='h-[13rem]' src="/Photos/Profile-Image.png" alt="" />
          </div>

          {/* Div for text. */}
          <div className="text w-[35rem]">
            <h1 className='poppins text-xl font-bold'>Manjunath is the Founder of MYoga</h1>
            <h1 className='sourcesanpro text-lg mt-4'>Empowering Fitness Journeys with Manjunath: Founder of MYoga and Seasoned Yoga Teacher Committed to Helping Others Achieve Their Fitness Goals.</h1>
          </div>

        </div>

      </div>

      {/* Div for Footer. */}
      <div className="Footer flex justify-center items-start bg-black w-[100vw] py-12 flex-wrap">

        {/* Div for FollowUs. */}
        <div className="FollowUs">
          <h1 className='text-white inter font-bold text-base'>Follow Us</h1>
          {/* Div for Icons. */}
          <div className="Icons flex mt-5">
            <img className='bg-white py-2 px-2 cursor-pointer rounded-full h-[2.5rem]' src="/Photos/Instagram.png" alt="" />
            <img className='bg-white ml-3 py-2 px-2 cursor-pointer rounded-full h-[2.5rem]' src="/Photos/Facebook.png" alt="" />
            <img className='bg-white ml-3 py-2 px-2 cursor-pointer rounded-full h-[2.5rem]' src="/Photos/X.png" alt="" />
            <img className='bg-white ml-3 py-2 px-2 cursor-pointer rounded-full h-[2.5rem]' src="/Photos/Whatsapp.png" alt="" />
          </div>
        </div>

        {/* Div for Address. */}
        <div className="Address mx-14 sm:my-10 lg:my-10">
          <h1 className='text-white inter font-bold text-base'>Address</h1>
          <h1 className='text-white inter font-semibold text-base mt-5'>MYoga Academy India</h1>
          <h1 className='text-white inter text-base'><span className='font-medium'>Opp:</span> Devi School</h1>
          <h1 className='text-white inter text-base'><span className='font-medium'>Contact:</span> +91 987772222</h1>
        </div>

        {/* Div for Subscirbe. */}
        <div className="subscribe flex flex-col">
          <h1 className='text-white inter font-bold text-base'>Subscribe</h1>
          <h1 className='text-white inter text-xs mt-5'>Email</h1>
          {/* Inpute field for email. */}
          <input className='rounded-sm w-[20rem]' type="email" />
          <button className='mt-2 text-sm py-1 w-[20rem] maincolor text-white rounded-sm font-semibold inter hover:opacity-75 active:opacity-50'>Subscribe</button>
        </div>

      </div>

    </>
  )
}
