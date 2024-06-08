import React from 'react'
import advantageImg from '../asset/images/advantage-right-img.png'
import advantageBullet from '../asset/images/advantage-bullet.png'

function Advantages() {
  return (
    <div id='advantage-section' className='flex items-center justify-start max-w-screen-xl mx-auto relative -pt-10 px-4 text-lg font-medium  capitalize'>
  
    <div id='advantage-left' className='flex flex-col w-1/2'>
    
        <div className='primium-title text-left mb-4'>
            <p className='text-customRed uppercase text-lg  font-medium ' >advatnages</p>
            <h1 className='font-bold text-4xl font-clash_bold text-left bg-transparent '>why choose Uifry?</h1>

        </div>
        <div className='flex flex-col primium-text-grp text-left items-start mt-4'>
            <div className='flex gap-2 items-center' >
                <img  src={advantageBullet} className='w-xl'></img>
                <h3 className='font-bold text-lg text-black font-clash_bold'>clever notifications</h3>
            </div>
            <p className='text-sm text-gray-700 mt-2 leading-6'>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
        
    </div>
    <div id='advantage-right' className='w-1/2'>
        <img src={advantageImg} className=''></img>
    </div>

</div>
  )
}

export default Advantages