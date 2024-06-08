import React from 'react'
import customizeImg from '../asset/images/customize left img.png'
import customizeBullet from '../asset/images/customize-bullet.png'
import star from '../asset/images/Star 3.png'

function Customize() {
  return (
    <div id='customize-section' className='flex items-center justify-start max-w-screen-xl mx-auto relative -pt-10 px-4 text-lg font-medium  capitalize'>
  <img src={star} className='absolute w-xl bottom-20 right-20'></img>

     <div id='customize-left' className='w-1/2'>
        <img src={customizeImg} className=''></img>
    </div>
   
    <div id='customize-right' className='flex flex-col w-1/2'>
       
        <div className='flex flex-col primium-text-grp text-left items-start mt-4'>
            <div className='flex gap-2 items-center' >
                <img  src={customizeBullet} className='w-xl'></img>
                <h3 className='font-bold text-lg text-black font-clash_bold'>fully customizable</h3>
            </div>
            <p className='text-sm text-gray-800 mt-2 leading-6'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
        
    </div>

</div>
  )
}

export default Customize