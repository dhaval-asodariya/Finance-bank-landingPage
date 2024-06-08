import React from 'react'
import logo from '../asset/images/logo.png'
import mailIcon from '../asset/images/mailIcon.png'
import callIcon from '../asset/images/callIcon.png'


function Footer() {
  return (
    <div className='flex flex-col items-center max-w-screen-xl m-auto divide-y divide-teal-400 '>
        <div className='flex items-start justify-between w-full mx-auto relative  text-lg font-medium  capitalize mt-32 mb-24'>
            <div className='flex flex-col items-start text-left gap-2'>
                <img src={logo} className='w-24'></img>
                <div className='flex items-center gap-2 '>
                   <img src={mailIcon} className='h-fit'></img>
                   <p>XYZhelp@EXAMPLE.com</p>

                </div>
                <div className='flex items-center gap-2'>
                   <img src={callIcon} className='h-fit'></img>
                   <p>+91 83567 67889</p>

                </div>
            </div>
            <div className='flex flex-col text-left'>
                <h2 className='font-bold text-3xl font-clash_semibold '>Links</h2>
                <ul className='flex flex-col text-md gap-2'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Bookings</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='flex flex-col text-left'>
                <h2 className='font-bold text-3xl font-clash_semibold '>Legal</h2>
                <ul className='flex flex-col text-md gap-2'>
                    <li>Terms of use</li>
                    <li>Privacy policy</li>
                    <li>Cookie policy</li>
                   
                </ul>
            </div>
            <div className='flex flex-col text-left'>
                <h2 className='font-bold text-3xl font-clash_semibold '>Product</h2>
                <ul className='flex flex-col text-md gap-2'>
                    <li>Take toure</li>
                    <li>Live chat</li>
                    <li>Reviews</li>
                   
                </ul>
            </div>
            <div className='flex flex-col text-left'>
                <h2 className='font-bold text-3xl font-clash_semibold '>Newsletter</h2>
                <ul className='flex flex-col text-md gap-2'>
                    <li>Stay up to date</li>
                    <li className='flex'>
                        <input placeholder='Your Email' className='p-2 rounded-s w-32 border border-gray-600'></input>
                        <button class="flex gap-2 items-center bg-black hover:bg-black-700 text-white font-bold py-2 px-4 rounded-e">
                            Subscribe
              
                        </button>
                    </li>
                   
                </ul>
            </div>
          

        </div>
        

        <div>
            <p className='text-sm text-gray-800 my-8'>Copyright 2022 uifry.com all rights reserved</p>
        </div>


    </div>
  )
}

export default Footer