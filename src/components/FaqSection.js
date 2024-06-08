import React from 'react'
import RedFaq from './RedFaq'
import Faq from './Faq'
import star from '../asset/images/Star 3.png'

function FaqSection() {
  return (
    <div id='Faq-section' className='flex flex-col items-left max-w-screen-xl mx-auto relative  px-4'>
       <img src={star} className='absolute w-xl top-20 right-60'></img>

      <div id='Faq-title text-left' >
        <p className='text-customRed uppercase text-lg text-left  font-medium'>faq</p>
        <h3 className='font-bold text-4xl text-black font-clash_bold text-left '>Frequently asked <br/> questions</h3>
      </div>

        <div id='question-boxes-section' className='flex flex-col my-6'>
            <div className='flex  gap-10 my-4'>
                <RedFaq />
                <Faq/>
            </div>
            <div className='flex gap-10 my-4'>
                <Faq/>
                <RedFaq/>
            </div>
            <div className='flex gap-10 my-4'>
                <RedFaq/>
                <Faq/>
            </div>

        </div>

    </div>
  )
}

export default FaqSection