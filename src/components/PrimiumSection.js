import React from 'react'
import primiumImg from '../asset/images/primium left img.png'
import bulletStar from '../asset/images/bullet-star.png'
import bulletStar2 from '../asset/images/bullet-star-2.png'
import bulletStar3 from '../asset/images/bullet-star-3.png'
import primiumSplash from '../asset/images/primium-splash-1.png'



function PrimiumSection() {
  return (
    <div id='primium-section' className='flex items-center justify-start max-w-screen-xl mx-auto relative -pt-10 px-4 text-lg font-medium  capitalize'>
        <img src={primiumSplash} className='absolute top-16 -right-44 z-[-1]'></img>
        <div id='primium-left' className='w-2/3'>
            <img src={primiumImg} className=''></img>
        </div>
        <div id='primium-right' className='flex flex-col '>
            <div className='primium-title text-left mb-4'>
                <p className='text-customRed uppercase text-lg  font-medium ' >features</p>
                <h1 className='font-bold text-4xl font-clash_bold text-left bg-transparent '>uifry premium</h1>

            </div>
            <div className='flex flex-col primium-text-grp text-left items-start mt-4'>
                <div className='flex gap-2'>
                    <img src={bulletStar}></img>
                    <h3 className='font-bold text-md text-black font-clash_semibold'>budgeting intervals</h3>
                </div>
                <p className='text-sm text-gray-700 mt-2 leading-6'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className='flex flex-col primium-text-grp text-left items-start mt-4'>
                <div className='flex gap-2'>
                    <img src={bulletStar2}></img>
                    <h3 className='font-bold text-md text-black font-clash_semibold'>budgeting intervals</h3>
                </div>
                <p className='text-sm text-gray-700 mt-2 leading-6'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className='flex flex-col primium-text-grp text-left items-start mt-4'>
                <div className='flex gap-2'>
                    <img src={bulletStar3}></img>
                    <h3 className='font-bold text-md text-black font-clash_semibold'>budgeting intervals</h3>
                </div>
                <p className='text-sm text-gray-700 mt-2 leading-6'>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
        </div>

    </div>
  )
}

export default PrimiumSection