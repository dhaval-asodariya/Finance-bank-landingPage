import React from 'react'
import play from '../asset/images/play-btn.png'
import arrow from '../asset/images/arrow-right.png'
import imgHeroLeft from '../asset/images/hero left bottom.png'
import star from '../asset/images/Star 3.png'
import splash from '../asset/images/hero-splash.png'
import heroImg from '../asset/images/hero-right-full.png'


function Hero() {
  return (
    <div id='hero' className='flex items-center justify-start max-w-screen-xl mx-auto relative pt-20 px-4 text-lg font-medium font-clash_Regular capitalize'>
       <img src={star} className='absolute w-xl top-20 -left-20'></img>
       <img src={splash} className='absolute w-xl top-8 left-0 z-[-1]'></img>
        <div id='hero-left' className='flex flex-col items-start w-1/2'>
            <h1 className='font-bold text-6xl font-clash_bold text-left bg-transparent mt-8'>Make The Best <br/> Financial Decisions</h1>
            <p className='text-left bg-transparent mt-4'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br/> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div id='hero-btns-grp' className='flex gap-4 mt-6'>
            <button class="flex gap-2 items-center bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded">
                
               Get Started
               <img src={arrow}></img>
             </button>
            <button class= "flex gap-2 bg-transparent  text-black font-semibold  py-2 px-4 border rounded">
                <img className='w-6' src={play}></img>
                Watch Video
            </button>
            </div>

            <img className='w-96' src={imgHeroLeft}></img>
        </div>
        <div className='w-1/2 -mt-2'  id='hero-right'>
            <img src={heroImg} className=''></img>
        </div>

    </div>
  )
}

export default Hero