import React from 'react'
import apple from '../asset/images/apple.png'
import star from '../asset/images/Star 3.png'
import splash from '../asset/images/primium-splash-1.png'
import getStartedImg from '../asset/images/get started right rings.png'
import getStartedLeftImg from '../asset/images/get started left ring.png'



function GetStarted() {
  return (
    <div id='getStarted' className='relative mb-6'>
        <img src={star} className='absolute w-sm top-20 left-10 z-[1]'></img>
        <img src={star} className='absolute w-xl -top-24 right-16 z-[1] '></img>
        <img src={splash} className='absolute w-xl -top-36 -left-12 z-[-1]'></img>

         <div id='getStarted' className='flex items-center justify-end max-w-screen-xl mx-auto relative   text-lg font-medium font-clash_Regular capitalize bg-black rounded-lg' >
         <img className='w-96 absolute left-0 bottom-0' src={getStartedLeftImg}></img>

       
        <div id='getStarted-left' className='flex flex-col items-start text-left  text-white w-1/2'>
            <h1 className='font-bold text-4xl font-clash_bold  mt-8'>ready to get started?</h1>
            <p className='mt-4'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet<br/> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div id='hero-btns-grp' className='flex gap-4 mt-6'>
            <button class="flex gap-2 items-center bg-white hover:bg-black-700 text-black font-bold py-2 px-4 rounded">
                
              Download App
               <img src={apple}></img>
             </button>
           
            </div>
        </div>
        <div className=' -mt-2'  id='getStarted-right'>
            <img src={getStartedImg} className=''></img>
        </div>

    </div>
    </div>
  )
}

export default GetStarted