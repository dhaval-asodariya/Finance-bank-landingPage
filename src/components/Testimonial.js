import React from 'react'
import testimonialImg from '../asset/images/testimonial left img.png'
import testiUserImg from '../asset/images/testi-people-img.png'


function Testimonial() {
  return (
    <div id='testimonial-section' className='flex flex-col items-center'>
      <div id='testi-title text-center' >
        <p className='text-customRed uppercase text-lg  font-medium'>testimonial</p>
        <h3 className='font-bold text-4xl text-black font-clash_bold text-center '>what our users <br/>say about us?</h3>
      </div>
        <div id='customize-section' className='flex items-center justify-start max-w-screen-xl mx-auto relative -pt-10 px-4 text-lg font-medium  capitalize'>
       {/* <img src={star} className='absolute w-xl bottom-20 right-20'></img> */}

     <div id='customize-left' className='w-2/3'>
        <img src={testimonialImg} className=''></img>
    </div>
   
    <div id='customize-right' className='flex flex-col w-1/2'>
       
        <div className='flex flex-col  text-left items-start mt-4'>
            <div className='' >
               
                <h3 className='font-bold text-xl text-black font-clash_bold'>the best financial accounting app <br/> ever!</h3>
            </div>
            <p className='text-sm text-gray-800 my-4 leading-6'>“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”</p>
            <img src={testiUserImg}></img>
            <p className='font-bold text-md text-black font-clash_semibold mt-4'>Nick Jonas</p>
        </div>
        
    </div>

</div>

    </div>
  )
}

export default Testimonial